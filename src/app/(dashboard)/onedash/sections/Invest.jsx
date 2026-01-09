'use client'

import { FiTrendingUp, FiPieChart, FiLock } from 'react-icons/fi'

export default function Invest() {
  return (
    <section className="container">
      
      {/* TÍTULO */}
      <header style={{ marginBottom: '2rem' }}>
        <h1>Invertir</h1>
        <p>Elige cómo quieres hacer crecer tu dinero</p>
      </header>

      {/* RESUMEN */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3>Saldo disponible</h3>
        <h2>$ 2.436,68</h2>
        <p>Disponible para nuevas inversiones</p>
      </div>

      {/* OPCIONES */}
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        
        <div className="card">
          <FiTrendingUp size={28} />
          <h3>Acciones y ETFs</h3>
          <p>Invierte en empresas y mercados globales.</p>
          <button className="btn-primary">Invertir</button>
        </div>

        <div className="card">
          <FiPieChart size={28} />
          <h3>Fondos</h3>
          <p>Portafolios diversificados gestionados.</p>
          <button className="btn-primary">Invertir</button>
        </div>

        <div className="card">
          <FiLock size={28} />
          <h3>Renta fija</h3>
          <p>Inversiones estables con menor riesgo.</p>
          <button className="btn-primary">Invertir</button>
        </div>

        <div className="card">
          <FiLock size={28} />
          <h3>CDT</h3>
          <p>Plazos fijos con rentabilidad asegurada.</p>
          <button className="btn-primary">Invertir</button>
        </div>

      </div>
    </section>
  )
}
