'use client'
import React from 'react'
import '@/app/(dashboard)/onedash/components/MainContent.css'


export default function MainContent({ section }) {
  return (
    <main className='main-content'>
      {section === 'home' && <Home/>}
      {section === 'portfolio' && <Portfolio />}
      {section === 'invest' && <Invest />}
      {section === 'movements' && <Movements />}
      {section === 'profile' && <Profile />}
      {section === 'help' && <Help />}
    </main>
  )
}


/* COMPONENTES SIMULADOS */
const Home = () => <h1>Dashboard principal</h1>
const Portfolio = () => <h1>Mi portafolio</h1>
const Invest = () => <h1>Invertir</h1>
const Movements = () => <h1>Movimientos</h1>
const Profile = () => <h1>Mi perfil</h1>
const Help = () => <h1>Centro de ayuda</h1>