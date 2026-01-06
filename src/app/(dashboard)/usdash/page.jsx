'use client'
import { useState } from 'react'
import { useFunds } from '@/context/FundsContext'
import './AdminFundManager.css'

export default function AdminFundManager() {
  const { funds, updateFund, createFund, setFunds } = useFunds()
  const [saveStatus, setSaveStatus] = useState({})
  const [newFundTemplate, setNewFundTemplate] = useState(null)

  const updateFundField = (fundId, field, value) => {
    updateFund(fundId, { [field]: value })
  }

  const updatePerformanceHistory = (fundId, monthIndex, value) => {
    const fund = funds.find(f => f.id === fundId)
    if (!fund) return

    const updatedHistory = [...fund.performanceHistory]
    updatedHistory[monthIndex] = { 
      ...updatedHistory[monthIndex], 
      value: parseFloat(value) || 0 
    }

    updateFund(fundId, { performanceHistory: updatedHistory })
  }

  const updateComposition = (fundId, assetIndex, field, value) => {
    const fund = funds.find(f => f.id === fundId)
    if (!fund) return

    const updatedComposition = [...fund.composition]
    updatedComposition[assetIndex] = { 
      ...updatedComposition[assetIndex], 
      [field]: field === 'percentage' ? parseFloat(value) || 0 : value 
    }

    updateFund(fundId, { composition: updatedComposition })
  }

  const addNewFund = () => {
    setNewFundTemplate({
      id: `fondo-nuevo-${Date.now()}`,
      name: 'Nuevo Fondo',
      description: 'Descripción del nuevo fondo',
      category: 'Nuevo',
      riskLevel: 'Moderado',
      minInvestment: 1000,
      expectedReturn: '10-15% anual',
      currentValue: 10000,
      investedAmount: 10000,
      returns: 0,
      returnPercentage: 0,
      managementFee: '1.5% anual',
      liquidity: '48 horas',
      performanceHistory: [
        { month: 'Ene', value: 9500 },
        { month: 'Feb', value: 9700 },
        { month: 'Mar', value: 9900 },
        { month: 'Abr', value: 10000 },
        { month: 'May', value: 10200 },
        { month: 'Jun', value: 10400 },
        { month: 'Jul', value: 10600 },
        { month: 'Ago', value: 10800 },
        { month: 'Sep', value: 11000 }
      ],
      composition: [
        { asset: 'Activo 1', percentage: 40 },
        { asset: 'Activo 2', percentage: 30 },
        { asset: 'Activo 3', percentage: 20 },
        { asset: 'Reserva', percentage: 10 }
      ],
      color: '#ffea00'
    })
  }

  const saveNewFund = () => {
    if (newFundTemplate) {
      createFund(newFundTemplate)
      setNewFundTemplate(null)
      setSaveStatus(prev => ({ ...prev, [newFundTemplate.id]: 'success' }))
      
      setTimeout(() => {
        setSaveStatus(prev => ({ ...prev, [newFundTemplate.id]: null }))
      }, 3000)
    }
  }

  const saveToAPI = async (fund) => {
    setSaveStatus(prev => ({ ...prev, [fund.id]: 'saving' }))
    
    try {
      // Simulación de API - Reemplaza con tu endpoint real
      const response = await fetch('/api/funds/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fund)
      })

      if (!response.ok) throw new Error('Error al guardar')
      
      // Los datos ya están actualizados en el contexto
      // Solo mostramos éxito
      setSaveStatus(prev => ({ ...prev, [fund.id]: 'success' }))
      
      setTimeout(() => {
        setSaveStatus(prev => ({ ...prev, [fund.id]: null }))
      }, 3000)
      
    } catch (error) {
      console.error('Error:', error)
      setSaveStatus(prev => ({ ...prev, [fund.id]: 'error' }))
      
      setTimeout(() => {
        setSaveStatus(prev => ({ ...prev, [fund.id]: null }))
      }, 3000)
    }
  }

  const handleImport = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const importedFunds = JSON.parse(e.target.result)
        setFunds(importedFunds)
        alert('Fondos importados exitosamente')
      } catch (error) {
        alert('Error al importar el archivo')
      }
    }
    reader.readAsText(file)
  }

  const handleExport = () => {
    const dataStr = JSON.stringify(funds, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'fondos-inversion.json'
    link.click()
  }

  return (
    <div className="admin-manager">
      <div className="admin-header">
        <h2>Panel de Administración - Gestión de Fondos</h2>
        <div className="admin-actions">
          <button className="btn-secondary" onClick={handleExport}>
            📁 Exportar Fondos
          </button>
          <label className="btn-secondary">
            📤 Importar Fondos
            <input 
              type="file" 
              accept=".json" 
              onChange={handleImport}
              style={{ display: 'none' }}
            />
          </label>
        </div>
      </div>

      <div className="funds-list-admin">
        {funds.map(fund => (
          <div key={fund.id} className="fund-card-admin">
            <div className="fund-header-admin">
              <h3>{fund.name}</h3>
              <span className={`risk-badge ${fund.riskLevel.toLowerCase().replace(' ', '-')}`}>
                {fund.riskLevel}
              </span>
            </div>

            <div className="fund-form-grid">
              <div className="form-group" data-tooltip="Nombre público del fondo">
                <label>Nombre del Fondo</label>
                <input 
                  type="text" 
                  value={fund.name}
                  onChange={(e) => updateFundField(fund.id, 'name', e.target.value)}
                  placeholder="Ej: Fondo Tech Global"
                />
              </div>

              <div className="form-group" data-tooltip="Valor actual de cada cuota">
                <label>Valor de Cuota</label>
                <input 
                  type="number" 
                  step="0.01"
                  value={fund.currentValue}
                  onChange={(e) => updateFundField(fund.id, 'currentValue', e.target.value)}
                  placeholder="0.00"
                />
              </div>

              <div className="form-group" data-tooltip="Rendimiento porcentual desde inicio">
                <label>Rendimiento (%)</label>
                <input 
                  type="number" 
                  step="0.01"
                  value={fund.returnPercentage}
                  onChange={(e) => updateFundField(fund.id, 'returnPercentage', e.target.value)}
                  placeholder="0.00"
                />
              </div>

              <div className="form-group" data-tooltip="Comisión anual de gestión">
                <label>Comisión de Gestión</label>
                <input 
                  type="text" 
                  value={fund.managementFee}
                  onChange={(e) => updateFundField(fund.id, 'managementFee', e.target.value)}
                  placeholder="Ej: 1.5% anual"
                />
              </div>
            </div>

            {/* HISTORIAL DE RENDIMIENTO */}
            <div className="performance-history-admin">
              <h4>Historial de Rendimiento</h4>
              <div className="history-grid">
                {fund.performanceHistory.map((month, idx) => (
                  <div key={idx} className="history-input">
                    <label>{month.month}</label>
                    <input 
                      type="number"
                      value={month.value}
                      onChange={(e) => updatePerformanceHistory(fund.id, idx, e.target.value)}
                      placeholder="0"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ESTADO DE GUARDADO */}
            {saveStatus[fund.id] && (
              <div className={`save-status ${saveStatus[fund.id]}`}>
                {saveStatus[fund.id] === 'saving' && '⏳ Guardando cambios...'}
                {saveStatus[fund.id] === 'success' && '✅ Cambios guardados'}
                {saveStatus[fund.id] === 'error' && '❌ Error al guardar'}
              </div>
            )}

            <button 
              className={`btn-primary ${saveStatus[fund.id] === 'saving' ? 'saving' : ''}`}
              onClick={() => saveToAPI(fund)}
              disabled={saveStatus[fund.id] === 'saving'}
            >
              💾 Guardar Cambios
            </button>
          </div>
        ))}
      </div>

      {/* FORMULARIO PARA NUEVO FONDO */}
      {newFundTemplate && (
        <div className="new-fund-form">
          <h3>Crear Nuevo Fondo</h3>
          <div className="fund-form-grid">
            <div className="form-group">
              <label>Nombre del Fondo</label>
              <input 
                type="text"
                value={newFundTemplate.name}
                onChange={(e) => setNewFundTemplate(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="form-group">
              <label>Valor Inicial</label>
              <input 
                type="number"
                value={newFundTemplate.currentValue}
                onChange={(e) => setNewFundTemplate(prev => ({ ...prev, currentValue: parseFloat(e.target.value) || 0 }))}
              />
            </div>
          </div>
          <div className="form-actions">
            <button className="btn-primary" onClick={saveNewFund}>
              Crear Fondo
            </button>
            <button className="btn-secondary" onClick={() => setNewFundTemplate(null)}>
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* BOTÓN PARA CREAR NUEVO FONDO */}
      {!newFundTemplate && (
        <div className="create-fund-section" onClick={addNewFund}>
          <h3>+ Crear Nuevo Fondo de Inversión</h3>
          <p>Agrega un nuevo fondo a tu portafolio de inversiones</p>
          <button className="create-fund-btn">
            Agregar Fondo
          </button>
        </div>
      )}
    </div>
  )
}