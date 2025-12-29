'use client'
import '@/app/(dashboard)/onedash/components/Navbar.css'
import { FiHome, FiPieChart, FiTrendingUp, FiList, FiUser, FiHelpCircle, FiLogOut } from 'react-icons/fi'

export default function Navbar({ onChange }) {
  return (
    <aside className="navbar">
      <nav className="nav-content">
        <ul className="nav-main">
          <li onClick={() => onChange('home')} className="section">
            <FiHome size={22} />
            Home
          </li>
          <li onClick={() => onChange('portfolio')} className="section">
            <FiPieChart size={22} />
            Portafolio
          </li>
          <li onClick={() => onChange('invest')} className="section">
            <FiTrendingUp size={22} />
            Invertir
          </li>
          <li onClick={() => onChange('movements')} className="section">
            <FiList size={22} />
            Movimientos
          </li>
        </ul>

        {/* PARTE INFERIOR */}
        <ul className="nav-bottom">
          <li onClick={() => onChange('profile')} className="section">
            <FiUser size={22} />
            Mi perfil
          </li>
          <li onClick={() => onChange('help')} className="section">
            <FiHelpCircle size={22} />
            Ayuda
          </li>
          <li className="section logout">
            <FiLogOut size={22} />
            Salir
          </li>
        </ul>
      </nav>
    </aside>
  )
}
