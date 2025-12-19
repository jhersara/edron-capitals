'use client'
import ProgressBar from "@/components/ui/ProgressBar"

export default function Step5KYC({ next, back }) {
  return (
    <section className="step">
      <ProgressBar step={5} />

      <h2>Verificación de identidad</h2>

      <input type="file" />
      <input type="file" />
      <button className="btn-secondary">Tomar selfie</button>

      <div className="actions">
        <button className="btn-secondary" onClick={back}>Volver</button>
        <button className="btn-primary" onClick={next}>Enviar</button>
      </div>
    </section>
  )
}
