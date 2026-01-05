'use client'
import './Portfolio.css'
import { FiTrendingUp } from 'react-icons/fi'

export default function Portfolio() {
  return (
    <section className="portfolio">

      {/* HEADER */}
      <header className="portfolio-header">
        <div>
          <h1>Portafolio</h1>
          <span>Saldo total</span>
          <h2>$ 28.686,68</h2>
        </div>
      </header>

      {/* BAR */}
      <div className="portfolio-bar">
        <div className="available" />
        <div className="invested" />
      </div>

      {/* BALANCES */}
      <div className="portfolio-balances">
        <div>
          <span>Saldo disponible</span>
          <strong>$ 2.436,68</strong>
        </div>
        <div>
          <span>Acciones y ETFs</span>
          <strong>$ 26.250,00</strong>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="portfolio-products">
        <div className="product active">
          Acciones y ETFs
        </div>
        <div className="product">Fondos</div>
        <div className="product">Renta fija</div>
        <div className="product">CDTs</div>
      </div>

      {/* PERFORMANCE */}
      <div className="portfolio-performance">
        <span>Valor actual en acciones</span>
        <h3>$ 26.250,00</h3>
        <p className="positive">
          + $ 6.750,00 (+34,61%)
        </p>
      </div>

      {/* CHART + COMPOSITION */}
      <div className="portfolio-bottom">

        <div className="chart-placeholder">
          <FiTrendingUp size={28} />
          <p>Gráfico de rendimiento</p>
        </div>

        <div className="composition">
          <h4>Composición</h4>
          <div className="donut">
            <span>100%</span>
          </div>
          <p>Empresas · LTMCO</p>
        </div>

      </div>

    </section>
  )
}
