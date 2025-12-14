'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '@/app/(auth)/login/login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulación (aquí conectas tu API)
    setTimeout(() => {
      console.log({ email, password })
      setLoading(false)
    }, 1200)
  }

  return (
    <main className="login">
      {/* LADO IZQUIERDO */}
      <section className="login__visual">
        <Image
          src="/images/logolg1.png"
          alt="Edron Capital"
          width={500}
          height={500}
          priority
        />
      </section>

      {/* LADO DERECHO */}
      <section className="login__form">
        <div className="login__form-wrapper">
          <span className="login__brand">‡Edron Capitals</span>

          <h1>Hola Edronita</h1>
          <p className="login__subtitle">
            Hoy es un gran día para invertir en ti.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary btn-full"
              disabled={loading}
            >
              {loading ? 'Ingresando...' : 'Ingresar'}
            </button>
          </form>

          <div className="login__links">
            <Link href="/forgot-password">Olvidé mi contraseña</Link>
            <Link href="/register" className="link-accent">
              Crear cuenta
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
