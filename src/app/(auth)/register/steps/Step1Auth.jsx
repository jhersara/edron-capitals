'use client'

import ProgressBar from "@/components/ui/ProgressBar"

export default function Step1Auth({ next, data, setData }) {
  return (
    <section className="step">
      <ProgressBar step={1} />

      <h2>Crear cuenta</h2>

      <input
        type="email"
        placeholder="Correo electrónico"
        value={data.email || ''}
        onChange={e => setData({ ...data, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={data.password || ''}
        onChange={e => setData({ ...data, password: e.target.value })}
      />

      <input
        type="password"
        placeholder="Confirmar contraseña"
      />

      <label className="checkbox">
        <input type="checkbox" /> Acepto términos y condiciones
      </label>

      <label className="checkbox">
        <input type="checkbox" /> Autorizo tratamiento de datos
      </label>

      <button className="btn-primary" onClick={next}>
        Continuar
      </button>
    </section>
  )
}

