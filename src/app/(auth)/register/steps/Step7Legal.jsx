'use client'
import ProgressBar from "@/components/ui/ProgressBar"

export default function Step7Legal({ next, back }) {
  return (
    <section className="step">
      <ProgressBar step={7} />

      <h2>Declaraciones legales</h2>

      <label className="checkbox"><input type="checkbox" /> Origen lícito de fondos</label>
      <label className="checkbox"><input type="checkbox" /> No pertenezco a listas restrictivas</label>
      <label className="checkbox"><input type="checkbox" /> Acepto riesgos</label>

      <div className="actions">
        <button className="btn-secondary" onClick={back}>Volver</button>
        <button className="btn-primary" onClick={next}>Finalizar</button>
      </div>
    </section>
  )
}
