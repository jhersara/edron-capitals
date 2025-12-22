'use client'
import { useState } from 'react'
import ProgressBar from "@/components/ui/ProgressBar"
import '@/app/(auth)/register/steps/Steps.css'

export default function Step1Auth({ next, data, setData }) {
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Email inválido'
    }
    
    if (!data.password || data.password.length < 8) {
      newErrors.password = 'Mínimo 8 caracteres'
    }
    
    if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden'
    }
    
    if (!data.terms || !data.privacy) {
      newErrors.terms = 'Debes aceptar todos los términos'
    }
    
    return newErrors
  }

  const handleContinue = () => {
    const validationErrors = validateForm()
    
    if (Object.keys(validationErrors).length === 0) {
      next()
    } else {
      setErrors(validationErrors)
    }
  }

  const handleCheckboxChange = (field) => (e) => {
    setData({ ...data, [field]: e.target.checked })
    if (errors.terms) {
      setErrors({ ...errors, terms: '' })
    }
  }

  return (
    <section className="step">
      <ProgressBar step={1} />

      <h2>Crear cuenta</h2>

      <input
        type="email"
        placeholder="Correo electrónico"
        value={data.email || ''}
        onChange={e => {
          setData({ ...data, email: e.target.value })
          if (errors.email) setErrors({ ...errors, email: '' })
        }}
        className={errors.email ? 'error' : ''}
      />
      {errors.email && <span className="error-message">{errors.email}</span>}

      <input
        type="password"
        placeholder="Contraseña"
        value={data.password || ''}
        onChange={e => {
          setData({ ...data, password: e.target.value })
          if (errors.password) setErrors({ ...errors, password: '' })
        }}
        className={errors.password ? 'error' : ''}
      />
      {errors.password && <span className="error-message">{errors.password}</span>}

      <input
        type="password"
        placeholder="Confirmar contraseña"
        value={data.confirmPassword || ''}
        onChange={e => setData({ ...data, confirmPassword: e.target.value })}
        className={errors.confirmPassword ? 'error' : ''}
      />
      {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}

      <label className="checkbox">
        <input
          type="checkbox"
          checked={data.terms || false}
          onChange={handleCheckboxChange('terms')}
        />
        Acepto términos y condiciones
      </label>

      <label className="checkbox">
        <input
          type="checkbox"
          checked={data.privacy || false}
          onChange={handleCheckboxChange('privacy')}
        />
        Autorizo tratamiento de datos
      </label>
      
      {(errors.terms && !data.terms && !data.privacy) && (
        <span className="error-message">{errors.terms}</span>
      )}

      <button 
        className="btn-primary" 
        onClick={handleContinue}
        disabled={!data.email || !data.password || !data.confirmPassword}
      >
        Continuar
      </button>
    </section>
  )
}