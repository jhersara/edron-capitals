'use client'
import ProgressBar from "@/components/ui/ProgressBar"

export default function Step2OTP({ next, back }) {
  return (
    <section className="step">
      <ProgressBar step={2} />

      <h2>Verificación de contacto</h2>

      <input placeholder="Código enviado al email" />
      <input placeholder="Código enviado al teléfono" />

      <div className="actions">
        <button className="btn-secondary" onClick={back}>Volver</button>
        <button className="btn-primary" onClick={next}>Verificar</button>
      </div>
    </section>
  )
}
