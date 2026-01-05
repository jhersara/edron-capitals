'use client'
import '@/app/(dashboard)/onedash/components/Navbar.css'
import {
  FiHome,
  FiPieChart,
  FiTrendingUp,
  FiList,
  FiUser,
  FiHelpCircle,
  FiLogOut
} from 'react-icons/fi'

export default function Navbar({ onChange, activeSection }) {
  const Item = ({ id, icon: Icon, label, danger }) => (
    <li
      className={`section ${activeSection === id ? 'active' : ''} ${danger ? 'logout' : ''}`}
      onClick={() => onChange(id)}
    >
      <Icon size={22} />
      <span>{label}</span>
    </li>
  )

  return (
    <aside className="navbar">
      <nav className="nav-content">
        <ul className="nav-main">
          <Item id="home" icon={FiHome} label="Home" />
          <Item id="portfolio" icon={FiPieChart} label="Portafolio" />
          <Item id="invest" icon={FiTrendingUp} label="Invertir" />
          <Item id="movements" icon={FiList} label="Movimientos" />
        </ul>

        <ul className="nav-bottom">
          <Item id="profile" icon={FiUser} label="Mi perfil" />
          <Item id="help" icon={FiHelpCircle} label="Ayuda" />
          <Item id="logout" icon={FiLogOut} label="Salir" danger />
        </ul>
      </nav>
    </aside>
  )
}
