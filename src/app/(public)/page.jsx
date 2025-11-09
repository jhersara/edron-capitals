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
      {/** Seccion de datos comerciales */}
      <section className='info'>
        <div className="info_data">
          <div className="card_data">
            <h2>$150M+</h2>
            <p>Activos Bajo Gestion</p>
          </div>
          <div className="card_data">
            <h2>12.8%</h2>
            <p>Rentabilidad Anual Promedio</p>
          </div>
          <div className="card_data">
            <h2>500+</h2>
            <p>Inversores Activos</p>
          </div>
          <div className="card_data">
            <h2>5 Años</h2>
            <p>Operando en el Mercado</p>
          </div>
        </div>
        {/** Secion del carrousel */}
        <div className="carousel">
          <div className="track">
          {/* Bloque 1 */}
            <div className="cards"><img src="/images/amazon.svg" alt="Amazon" /></div>
            <div className="cards"><img src="/images/BlackRock.svg" alt="BlackRock" /></div>
            <div className="cards"><img src="/images/Cibest.svg" alt="Cibest" /></div>
            <div className="cards"><img src="/images/coca.svg" alt="Coca-Cola" /></div>
            <div className="cards"><img src="/images/Exness.svg" alt="Exness" /></div>
            <div className="cards"><img src="/images/Google.svg" alt="Google" /></div>
            <div className="cards"><img src="/images/Meta.svg" alt="Meta" /></div>
            <div className="cards"><img src="/images/NVIDIA.svg" alt="NVIDIA" /></div>
            <div className="cards"><img src="/images/Trii.svg" alt="Trii" /></div>

            {/* Bloque duplicado para loop perfecto */}
            <div className="cards"><img src="/images/amazon.svg" alt="Amazon" /></div>
            <div className="cards"><img src="/images/BlackRock.svg" alt="BlackRock" /></div>
            <div className="cards"><img src="/images/Cibest.svg" alt="Cibest" /></div>
            <div className="cards"><img src="/images/coca.svg" alt="Coca-Cola" /></div>
            <div className="cards"><img src="/images/Exness.svg" alt="Exness" /></div>
            <div className="cards"><img src="/images/Google.svg" alt="Google" /></div>
            <div className="cards"><img src="/images/Meta.svg" alt="Meta" /></div>
            <div className="cards"><img src="/images/NVIDIA.svg" alt="NVIDIA" /></div>
            <div className="cards"><img src="/images/Trii.svg" alt="Trii" /></div>
          </div>
        </div>  
      </section>
    
    </div>
  )
}
