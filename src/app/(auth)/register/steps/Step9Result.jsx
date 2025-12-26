'use client'
import Link from "next/link"

export default function Step9Result() {
  return (
    <section className="step center">
      <h1>Cuenta en verificación</h1>
      <p>
        Estamos validando tu información.  
        Te notificaremos cuando puedas invertir.
      </p>

      <Link href='/onedash' className="btn-primary">Ir al dashboard</Link>
    </section>
  )
}
