'use client'
import { useState } from 'react'
import { investmentFunds } from '@/data/investmentFunds'
import './AdminFundManager.css'

export default function AdminFundManager() {
  const [funds, setFunds] = useState(investmentFunds)
  const [saveStatus, setSaveStatus] = useState({})

  const updateFundField = (fundId, field, value) => {
    setFunds(prev => prev.map(fund => 
      fund.id === fundId 
        ? { 
            ...fund, 
            [field]: field.includes('Percentage') || field.includes('Value') || field.includes('Amount') 
              ? parseFloat(value) || 0 
              : value 
          }
        : fund
    ))
  }

  const updatePerformanceHistory = (fundId, monthIndex, value) => {
    setFunds(prev => prev.map(fund => 
      fund.id === fundId 
        ? {
            ...fund,
            performanceHistory: fund.performanceHistory.map((item, idx) =>
              idx === monthIndex ? { ...item, value: parseFloat(value) || 0 } : item
            )
          }
        : fund
    ))
  }

  const updateComposition = (fundId, assetIndex, field, value) => {
    setFunds(prev => prev.map(fund => 
      fund.id === fundId 
        ? {
            ...fund,
            composition: fund.composition.map((item, idx) =>
              idx === assetIndex ? { 
                ...item, 
                [field]: field === 'percentage' ? parseFloat(value) || 0 : value 
              } : item
            )
          }
        : fund
    ))
  }

  const addNewFund = () => {
    const newFund = {
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
    }
    
    setFunds(prev => [...prev, newFund])
  }

  const saveToAPI = async (fund) => {
    setSaveStatus(prev => ({ ...prev, [fund.id]: 'saving' }))
    
    try {
      // Simulación de llamada a API
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Aquí iría la conexión real a tu API
      console.log('Guardando fondo:', fund)
      /*
      const response = await fetch('/api/funds/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fund)
      })
      
      if (!response.ok) throw new Error('Error al guardar')
      */
      
      setSaveStatus(prev => ({ ...prev, [fund.id]: 'success' }))
      
      // Resetear estado después de 3 segundos
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

  return (
    <div className="admin-manager">
      <h2>Panel de Administración - Gestión de Fondos</h2>
      
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

              <div className="form-group" data-tooltip="Monto total invertido por clientes">
                <label>Capital Invertido</label>
                <input 
                  type="number" 
                  step="0.01"
                  value={fund.investedAmount}
                  onChange={(e) => updateFundField(fund.id, 'investedAmount', e.target.value)}
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

              <div className="form-group" data-tooltip="Tiempo para retirar inversión">
                <label>Liquidez</label>
                <input 
                  type="text" 
                  value={fund.liquidity}
                  onChange={(e) => updateFundField(fund.id, 'liquidity', e.target.value)}
                  placeholder="Ej: 48 horas"
                />
              </div>

              <div className="form-group" data-tooltip="Categoría para filtros">
                <label>Categoría</label>
                <input 
                  type="text" 
                  value={fund.category}
                  onChange={(e) => updateFundField(fund.id, 'category', e.target.value)}
                  placeholder="Ej: Alto Rendimiento"
                />
              </div>

              <div className="form-group" data-tooltip="Monto mínimo para invertir">
                <label>Inversión Mínima</label>
                <input 
                  type="number" 
                  value={fund.minInvestment}
                  onChange={(e) => updateFundField(fund.id, 'minInvestment', e.target.value)}
                  placeholder="0"
                />
              </div>
            </div>

            {/* HISTORIAL DE RENDIMIENTO */}
            <div className="performance-history-admin">
              <h4>Historial de Rendimiento (Últimos 9 meses)</h4>
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

            {/* COMPOSICIÓN */}
            <div className="composition-admin">
              <h4>Composición del Fondo (Debe sumar 100%)</h4>
              {fund.composition.map((asset, idx) => (
                <div key={idx} className="asset-input-row">
                  <input 
                    type="text"
                    value={asset.asset}
                    onChange={(e) => updateComposition(fund.id, idx, 'asset', e.target.value)}
                    placeholder="Nombre del activo"
                  />
                  <input 
                    type="number"
                    value={asset.percentage}
                    onChange={(e) => updateComposition(fund.id, idx, 'percentage', e.target.value)}
                    placeholder="%"
                    min="0"
                    max="100"
                  />
                </div>
              ))}
            </div>

            {/* ESTADO DE GUARDADO */}
            {saveStatus[fund.id] && (
              <div className={`save-status ${saveStatus[fund.id]}`}>
                {saveStatus[fund.id] === 'saving' && '⏳ Guardando cambios...'}
                {saveStatus[fund.id] === 'success' && '✅ Cambios guardados exitosamente'}
                {saveStatus[fund.id] === 'error' && '❌ Error al guardar, intenta nuevamente'}
              </div>
            )}

            <button 
              className={`btn-primary ${saveStatus[fund.id] === 'saving' ? 'saving' : ''}`}
              onClick={() => saveToAPI(fund)}
              disabled={saveStatus[fund.id] === 'saving'}
            >
              💾 Guardar Cambios en {fund.name}
            </button>
          </div>
        ))}
      </div>

      {/* BOTÓN PARA CREAR NUEVO FONDO */}
      <div className="create-fund-section" onClick={addNewFund}>
        <h3>+ Crear Nuevo Fondo de Inversión</h3>
        <p>Agrega un nuevo fondo a tu portafolio de inversiones</p>
        <button className="create-fund-btn">
          Agregar Fondo
        </button>
      </div>
    </div>
  )
}