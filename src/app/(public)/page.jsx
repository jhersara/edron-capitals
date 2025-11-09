import React from 'react'
import { RiMedalLine, RiArrowRightLine} from 'react-icons/ri'
import '@/styles/pages/page.css'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className='container'>
      <nav className="navbar">
        {/* === LOGO === */}
        <div className="logo">
          <a href="/">
            <div className="logo-wrapper">
              <Image
                src="/images/home_logo.png"
                alt="Edron Capitals"
                fill
                priority
                className="home_logo"
              />
            </div>
          </a>
        </div>

        {/* === NAVEGACIÓN === */}
        <div className="navigate">
          <ul className="list">
            <li className="link"><a className='li' href="/">Inicio</a></li>
            <li className="link"><a className='li' href="/">Nosotros</a></li>
            <li className="link"><a className='li' href="/">Servicios</a></li>
            <li className="link"><a className='li' href="/">Contacto</a></li>
          </ul>
        </div>

        {/* === BOTÓN LOGIN === */}
        <div className="bt-login">
          <button className="active">
            <Image
              src='/images/darklogo.png'
              alt='Logo'
              height={30}
              width={30}
            />
            Ingresar
          </button>
        </div>

        {/* === MENÚ MÓVIL === */}
        <div className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/** SECSION DEL HERO */}

      <section className="hero">
        <div className="hero_content">
          <div className="marker">
            <RiMedalLine className='mdl' />
            Fondo de Invercion Registrado
          </div>
          <h1>Invierte con <span className="strong">Confianza</span><br />y Transparencia</h1>
          <p className="text">Accede  a oportunidades de invercion profecionales con reportes diarios, seguridad institucional y rendimientos superiores al mercado.</p>
          <div className="btn_content">
            <a href="/" className="btn actived">Comienza a invertir <RiArrowRightLine /></a>
            <a href="/" className="btn on_actived">Conoce mas</a>
          </div>
        </div>
      </section>
    </div>
  )
}
