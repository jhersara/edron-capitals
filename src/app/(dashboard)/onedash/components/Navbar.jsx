'use client'
import Link from 'next/link'
import '@/app/(dashboard)/onedash/components/Navbar.css'
import {
  FiHome,
  FiPieChart,
  FiTrendingUp,
  FiList,
  FiLogOut,
  FiUser,
  FiHelpCircle
} from 'react-icons/fi'

export default function Navbar() {
  return (
    <aside className="navbar">
      <nav className="nav-content">
        {/* 🔹 SECCIÓN PRINCIPAL */}
        <ul className="nav-main">
          <li>
            <Link href="/" className="section">
              <FiHome size={22} />
              Home
            </Link>
          </li>

          <li>
            <Link href="/portfolio" className="section">
              <FiPieChart size={22} />
              Portafolio
            </Link>
          </li>

          <li>
            <Link href="/invest" className="section">
              <FiTrendingUp size={22} />
              Inversiones
            </Link>
          </li>

          <li>
            <Link href="/movements" className="section">
              <FiList size={22} />
              Movimientos
            </Link>
          </li>
        </ul>

        {/* 🔸 SECCIÓN INFERIOR */}
        <ul className="nav-bottom">
          <li>
            <Link href="/profile" className="section">
              <FiUser size={22} />
              Mi perfil
            </Link>
          </li>

          <li>
            <Link href="/help" className="section">
              <FiHelpCircle size={22} />
              Ayuda
            </Link>
          </li>

          <li>
            <Link href="/logout" className="section logout">
              <FiLogOut size={22} />
              Salir
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
