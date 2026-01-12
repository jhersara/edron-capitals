'use client'

import {
  FiHelpCircle,
  FiMail,
  FiBookOpen,
  FiAlertCircle,
  FiShield,
} from 'react-icons/fi'
import './Help.css'

export default function Help() {
  return (
    <section className="container">

      {/* HEADER */}
      <header style={{ marginBottom: '2rem' }}>
        <h1>Centro de ayuda</h1>
        <p>Soporte, preguntas frecuentes y documentación</p>
      </header>

      {/* ACCESOS RÁPIDOS */}
      <div className="grid help-grid">

        <div className="card help-card">
          <FiHelpCircle size={28} />
          <h3>Soporte</h3>
          <p>¿Tienes un problema con tu cuenta o inversiones?</p>
          <button className="btn-primary">Contactar soporte</button>
        </div>

        <div className="card help-card">
          <FiBookOpen size={28} />
          <h3>Guías</h3>
          <p>Aprende cómo invertir, retirar y gestionar tu portafolio</p>
          <button className="btn-secondary">Ver guías</button>
        </div>

        <div className="card help-card">
          <FiShield size={28} />
          <h3>Regulación</h3>
          <p>Información legal, KYC, AML y cumplimiento</p>
          <button className="btn-secondary">Ver documentos</button>
        </div>

      </div>

      {/* FAQ */}
      <div className="card help-faq">
        <h3>Preguntas frecuentes</h3>

        <div className="faq-item">
          <strong>¿Mi dinero está seguro?</strong>
          <p>
            Los fondos se gestionan bajo políticas estrictas de seguridad,
            segregación de cuentas y cumplimiento normativo.
          </p>
        </div>

        <div className="faq-item">
          <strong>¿Cuándo puedo invertir?</strong>
          <p>
            Una vez tu cuenta esté completamente verificada y aprobada.
          </p>
        </div>

        <div className="faq-item">
          <strong>¿Puedo retirar mis fondos?</strong>
          <p>
            Sí, según los términos del fondo y tu perfil de inversión.
          </p>
        </div>
      </div>

      {/* CONTACTO */}
      <div className="card help-contact">
        <h3>Contacto directo</h3>

        <div className="contact-row">
          <FiMail />
          <span>soporte@tufondo.com</span>
        </div>

        <div className="contact-row">
          <FiAlertCircle />
          <span>Horario de atención: L–V 9:00 – 18:00</span>
        </div>
      </div>

    </section>
  )
}
