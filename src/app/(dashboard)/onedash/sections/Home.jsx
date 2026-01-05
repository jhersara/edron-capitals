'use client'
import './Home.css'
import { FiTrendingUp, FiShield, FiClock } from 'react-icons/fi'


export default function Home() {
  return (
    <section className="home">

      {/* HEADER */}
      <header className="home-header">
        <div>
          <h1>Panel de control</h1>
          <p>Resumen general de tu cuenta de inversión</p>
        </div>

        <button className="btn-primary">
          Invertir ahora
        </button>
      </header>

      {/* KPIs */}
      <div className="home-kpis">
        <div className="card kpi">
          <span>Balance total</span>
          <h2>$ 0.00</h2>
          <small>Disponible para invertir</small>
        </div>

        <div className="card kpi">
          <span>Invertido</span>
          <h2>$ 0.00</h2>
          <small>Capital en curso</small>
        </div>

        <div className="card kpi">
          <span>Rendimiento</span>
          <h2>0%</h2>
          <small>Histórico</small>
        </div>
      </div>

      {/* STATUS */}
      <div className="home-status">
        <div className="card status-card">
          <FiShield size={22} />
          <div>
            <h3>Verificación pendiente</h3>
            <p>Completa tu perfil para habilitar inversiones.</p>
          </div>
        </div>

        <div className="card status-card">
          <FiClock size={22} />
          <div>
            <h3>Cuenta recién creada</h3>
            <p>Aún no tienes movimientos registrados.</p>
          </div>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="home-actions">
        <div className="card action">
          <h3>Completar perfil</h3>
          <p>Finaliza tu información KYC</p>
        </div>

        <div className="card action">
          <h3>Explorar inversiones</h3>
          <p>Conoce nuestros fondos disponibles</p>
        </div>
      </div>

      {/* ACTIVITY */}
      <div className="card home-activity">
        <h3>Actividad reciente</h3>

        <div className="empty">
          <FiTrendingUp size={28} />
          <p>No hay movimientos aún</p>
        </div>
      </div>

    </section>
  )
}
