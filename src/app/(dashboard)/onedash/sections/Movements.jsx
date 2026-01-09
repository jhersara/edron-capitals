'use client'

import './Invest.css'
import { FiArrowUpRight, FiArrowDownLeft, FiTrendingUp } from 'react-icons/fi'

const movements = [
  {
    id: 1,
    type: 'Aporte',
    date: '14 Oct 2025',
    amount: '+ $5.000.000',
    status: 'Confirmado',
    icon: <FiArrowUpRight />
  },
  {
    id: 2,
    type: 'Rendimiento',
    date: '19 Sep 2025',
    amount: '+ $245.000',
    status: 'Acreditado',
    icon: <FiTrendingUp />
  },
  {
    id: 3,
    type: 'Aporte',
    date: '09 Ago 2025',
    amount: '+ $3.000.000',
    status: 'Confirmado',
    icon: <FiArrowUpRight />
  },
  {
    id: 4,
    type: 'Retiro',
    date: '19 Sep 2025',
    amount: '+ $245.000',
    status: 'Acreditado',
    icon: <FiArrowDownLeft />
  },
]

export default function Movements() {
  return (
    <section className="container">

      {/* TÍTULO */}
      <header style={{ marginBottom: '2rem' }}>
        <h1>Movimientos</h1>
        <p>Historial de tus transacciones recientes</p>
      </header>

      {/* LISTA */}
      <div className="grid">
        {movements.map(mv => (
          <div key={mv.id} className="card movement-item">
            
            <div className="movement-left">
              <div className="movement-icon">
                {mv.icon}
              </div>
              <div>
                <h4>{mv.type}</h4>
                <p>{mv.date}</p>
              </div>
            </div>

            <div className="movement-right">
              <strong>{mv.amount}</strong>
              <span className="movement-status">
                {mv.status}
              </span>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}
