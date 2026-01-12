'use client'

import {
  FiUser,
  FiMail,
  FiShield,
  FiCheckCircle,
  FiAlertCircle,
  FiLock
} from 'react-icons/fi'
import './Profile.css'

export default function Profile() {
  return (
    <section className="container">

      {/* HEADER */}
      <header style={{ marginBottom: '2rem' }}>
        <h1>Perfil de usuario</h1>
        <p>Información personal, verificación y estado de la cuenta</p>
      </header>

      {/* IDENTIDAD */}
      <div className="card profile-identity">
        <div className="profile-identity-left">
          <div className="profile-avatar">
            <FiUser size={28} />
          </div>

          <div>
            <h2>Juan Pérez</h2>
            <p className="muted">
              <FiMail /> juan@email.com
            </p>
          </div>
        </div>

        <div className="profile-status verified">
          <FiCheckCircle />
          Cuenta verificada
        </div>
      </div>

      {/* GRID PRINCIPAL */}
      <div className="grid profile-grid">

        {/* KYC */}
        <div className="card">
          <h3>Verificación (KYC)</h3>

          <div className="kyc-row">
            <span>Identidad</span>
            <FiCheckCircle className="success" />
          </div>

          <div className="kyc-row">
            <span>Documento</span>
            <FiCheckCircle className="success" />
          </div>

          <div className="kyc-row">
            <span>Perfil financiero</span>
            <FiCheckCircle className="success" />
          </div>

          <div className="kyc-complete">
            <FiShield /> Verificación completada
          </div>
        </div>

        {/* PERFIL FINANCIERO */}
        <div className="card">
          <h3>Perfil de inversión</h3>

          <p><strong>Experiencia:</strong> Intermedia</p>
          <p><strong>Objetivo:</strong> Crecimiento</p>
          <p><strong>Horizonte:</strong> Mediano plazo</p>
          <p><strong>Riesgo:</strong> Moderado</p>
        </div>

        {/* CUENTA */}
        <div className="card">
          <h3>Estado de la cuenta</h3>

          <p><strong>Cuenta creada:</strong> 12 / 08 / 2024</p>
          <p><strong>Último acceso:</strong> Hoy</p>
          <p><strong>Estado:</strong> Activa</p>

          <span className="account-ok">
            <FiCheckCircle /> Sin bloqueos
          </span>
        </div>

        {/* ALERTAS */}
        <div className="card">
          <h3>Alertas</h3>

          <div className="alert neutral">
            <FiAlertCircle />
            No tienes alertas pendientes
          </div>
        </div>

      </div>

      {/* SEGURIDAD */}
      <div className="card profile-security">
        <h3>Seguridad</h3>

        <div className="security-actions">
          <button className="btn-primary">
            <FiLock /> Cambiar contraseña
          </button>

          <button className="btn-secondary">
            Cerrar sesión
          </button>
        </div>
      </div>

    </section>
  )
}
