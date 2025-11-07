import React from 'react'
import '@/styles/pages/page.css'

export default function HomePage() {
  return (
    <div className='container'>
      <nav className="navbar">
        <div className="logo">
          <img src="/" alt="Edron Capitals" />
        </div>
        <div className="navigate">
          <ul className="list">
            <li className="link"><a  className='li' href="/">Inicio</a></li>
            <li className="link"><a  className='li' href="/">Nosotros</a></li>
            <li className="link"><a className='li'  href="/">Servicios</a></li>
            <li className="link"><a className='li'  href="/">Contacto</a></li>
          </ul>
        </div>

        <div className="bt-login">
          <button className="active">Ingresar</button>
        </div>

        <div className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  )
}
