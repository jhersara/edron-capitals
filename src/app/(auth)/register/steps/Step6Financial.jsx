'use client'
import ProgressBar from "@/components/ui/ProgressBar"

export default function Step6Financial({ next, back }) {
  return (
    <section className="step">
      <ProgressBar step={7} />

      <h2>Perfil financiero</h2>

      <select><option>Actividad económica</option></select>
      <select><option>Fuente de fondos</option></select>
      <select><option>Ingresos aproximados</option></select>
      <select><option>Experiencia en inversiones</option></select>

      <div className="actions">
        <button className="btn-secondary" onClick={back}>Volver</button>
        <button className="btn-primary" onClick={next}>Continuar</button>
      </div>
    </section>
  )
}
