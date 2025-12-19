'use client'
import ProgressBar from "@/components/ui/ProgressBar"

export default function Step3Personal({ next, back }) {
  return (
    <section className="step">
      <ProgressBar step={3} />

      <h2>Datos personales</h2>

      <select><option>Tipo de documento</option></select>
      <input placeholder="Número de documento" />
      <input placeholder="Nombres" />
      <input placeholder="Apellidos" />
      <input type="date" />
      <input placeholder="Nacionalidad" />
      <input placeholder="País de residencia" />

      <div className="actions">
        <button className="btn-secondary" onClick={back}>Volver</button>
        <button className="btn-primary" onClick={next}>Continuar</button>
      </div>
    </section>
  )
}
