'use client'
import { useState } from 'react'
import ProgressBar from '@/components/ui/ProgressBar'
import '@/app/(auth)/register/steps/Steps.css'

export default function Step1Auth({ data = {}, onNext }) {
  const [form, setForm] = useState({
    email: data.email || '',
    password: '',
    confirmPassword: '',
    terms: false,
    privacy: false
  })

  const handleContinue = () => {
    onNext(form)
  }

  return (
    <section className="step">
      <ProgressBar step={1} />

      <h2>Crear cuenta</h2>

      <input
        type="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={e => setForm({ ...form, password: e.target.value })}
      />

      <input
        type="password"
        placeholder="Confirmar contraseña"
        value={form.confirmPassword}
        onChange={e =>
          setForm({ ...form, confirmPassword: e.target.value })
        }
      />

      <label className="checkbox">
        <input
          type="checkbox"
          checked={form.terms}
          onChange={e => setForm({ ...form, terms: e.target.checked })}
        />
        Acepto términos y condiciones
      </label>

      <label className="checkbox">
        <input
          type="checkbox"
          checked={form.privacy}
          onChange={e => setForm({ ...form, privacy: e.target.checked })}
        />
        Autorizo tratamiento de datos
      </label>

      <button className="btn-primary" onClick={handleContinue}>
        Continuar
      </button>
    </section>
  )
}
