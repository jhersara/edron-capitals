'use client'
import ProgressBar from "@/components/ui/ProgressBar"
import { useState } from 'react'

export default function Step7Legal({ next, back }) {
  const [declarations, setDeclarations] = useState({
    legalFunds: false,
    notRestricted: false,
    acceptRisks: false
  })

  const handleCheckboxChange = (field) => (e) => {
    setDeclarations(prev => ({
      ...prev,
      [field]: e.target.checked
    }))
  }

  const handleFinalize = () => {
    if (declarations.legalFunds && declarations.notRestricted && declarations.acceptRisks) {
      next()
    } else {
      alert('Debes aceptar todas las declaraciones legales')
    }
  }

  return (
    <section className="step">
      <ProgressBar step={7} />

      <h2>Declaraciones legales</h2>
      
      <p className="legal-notice">
        Para completar tu registro, debes aceptar las siguientes declaraciones legales:
      </p>

      <label className="checkbox">
        <input 
          type="checkbox" 
          checked={declarations.legalFunds}
          onChange={handleCheckboxChange('legalFunds')}
        /> 
        <span className="checkbox-text">
          <strong>Origen lícito de fondos:</strong> Declaro que los fondos utilizados proceden de actividades lícitas.
        </span>
      </label>

      <label className="checkbox">
        <input 
          type="checkbox" 
          checked={declarations.notRestricted}
          onChange={handleCheckboxChange('notRestricted')}
        /> 
        <span className="checkbox-text">
          <strong>No pertenezco a listas restrictivas:</strong> Confirmo que no aparezco en listas de personas políticamente expuestas, sancionadas o restringidas.
        </span>
      </label>

      <label className="checkbox">
        <input 
          type="checkbox" 
          checked={declarations.acceptRisks}
          onChange={handleCheckboxChange('acceptRisks')}
        /> 
        <span className="checkbox-text">
          <strong>Acepto riesgos:</strong> Comprendo y acepto los riesgos asociados a las inversiones.
        </span>
      </label>

      <div className="actions">
        <button className="btn-secondary" onClick={back}>Volver</button>
        <button 
          className="btn-primary" 
          onClick={handleFinalize}
          disabled={!declarations.legalFunds || !declarations.notRestricted || !declarations.acceptRisks}
        >
          Finalizar
        </button>
      </div>
    </section>
  )
}