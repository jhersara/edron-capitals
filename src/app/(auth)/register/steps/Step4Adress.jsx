'use client'
import ProgressBar from "@/components/ui/ProgressBar"

export default function Step4Adress({ next, back }) {
  return (
    <section className="step">
      <ProgressBar step={4} />

      <h2>Dirección</h2>

      <input placeholder="Dirección completa" />
      <input placeholder="Ciudad" />
      <input placeholder="Departamento / Estado" />
      <input placeholder="País" />
      <input placeholder="Código postal (opcional)" />

      <div className="actions">
        <button className="btn-secondary" onClick={back}>Volver</button>
        <button className="btn-primary" onClick={next}>Continuar</button>
      </div>
    </section>
  )
}
