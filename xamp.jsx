'use client'
import './Portfolio.css'
import { 
  FiTrendingUp, 
  FiPieChart, 
  FiDollarSign,
  FiCalendar,
  FiDownload,
  FiArrowUp,
  FiArrowDown,
  FiCreditCard,
  FiBarChart2,
  FiTarget,
  FiChevronRight,
  FiMoreVertical
} from 'react-icons/fi'
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts'
import { investmentPlans, historicalData, assetAllocation, recentMovements } from '@/data/investmentPlans'
import { useState } from 'react'

export default function Portfolio() {
  const [selectedPlan, setSelectedPlan] = useState('risktorisk')
  const [timeframe, setTimeframe] = useState('1Y')
  
  const currentPlan = investmentPlans.find(p => p.id === selectedPlan)
  const totalInvested = investmentPlans.reduce((sum, plan) => sum + plan.investedAmount, 0)
  const totalReturns = investmentPlans.reduce((sum, plan) => sum + plan.returns, 0)
  const totalValue = investmentPlans.reduce((sum, plan) => sum + plan.currentValue, 0)

  // Datos para el gráfico principal (simulando candlestick/área)
  const chartData = [
    { date: 'Ene', value: 24500, high: 25000, low: 24000 },
    { date: 'Feb', value: 26500, high: 27000, low: 26000 },
    { date: 'Mar', value: 28000, high: 28500, low: 27500 },
    { date: 'Abr', value: 30000, high: 30500, low: 29500 },
    { date: 'May', value: 31500, high: 32000, low: 31000 },
    { date: 'Jun', value: 33000, high: 33500, low: 32500 },
    { date: 'Jul', value: 35000, high: 35500, low: 34500 },
    { date: 'Ago', value: 36500, high: 37000, low: 36000 },
    { date: 'Sep', value: 38000, high: 38500, low: 37500 },
    { date: 'Oct', value: 40000, high: 40500, low: 39500 },
    { date: 'Nov', value: 41500, high: 42000, low: 41000 },
    { date: 'Dic', value: 42350, high: 42800, low: 41800 }
  ]

  return (
    <section className="portfolio">

      {/* HEADER SUPERIOR CON SALDO TOTAL */}
      <div className="portfolio-balance-card">
        <div className="balance-content">
          <div>
            <span className="balance-label">Saldo total</span>
            <h1>${totalValue.toLocaleString('es-ES', { minimumFractionDigits: 2 })}</h1>
          </div>
          
          <div className="balance-breakdown">
            <div className="breakdown-item">
              <span>Saldo disponible</span>
              <h3>$ 2.436,68</h3>
            </div>
            <div className="breakdown-separator"></div>
            <div className="breakdown-item">
              <span>Acciones y ETFs</span>
              <h3>$ 26.250,00</h3>
            </div>
          </div>
        </div>
        
        <div className="balance-actions">
          <button className="btn-primary">
            <FiCreditCard /> Nuevo Aporte
          </button>
          <button className="btn-icon">
            <FiMoreVertical />
          </button>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL EN GRID */}
      <div className="portfolio-main-grid">
        
        {/* COLUMNA IZQUIERDA - GRÁFICO PRINCIPAL */}
        <div className="main-chart-section">
          <div className="chart-header">
            <div>
              <h2>Acciones y ETFs</h2>
              <p>Valor actual en acciones</p>
              <h3>$ 26.250,00</h3>
            </div>
            
            <div className="performance-badge">
              <FiTrendingUp />
              <div>
                <span>Vas ganando aprox.</span>
                <h4>+$ 6.750,00 (+34,61%)</h4>
              </div>
            </div>
          </div>

          {/* GRÁFICO DE ÁREA ESTILO PROFESIONAL */}
          <div className="area-chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--cl-primary-500)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--cl-primary-500)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke="var(--cl-border)" 
                  horizontal={true}
                  vertical={false}
                />
                <XAxis 
                  dataKey="date" 
                  axisLine={false}
                  tickLine={false}
                  stroke="var(--cl-text-secondary)"
                  fontSize={12}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  stroke="var(--cl-text-secondary)"
                  fontSize={12}
                  tickFormatter={(value) => `$${(value/1000).toFixed(0)}k`}
                  domain={['dataMin - 5000', 'dataMax + 5000']}
                />
                <Tooltip 
                  formatter={(value) => [`$${value.toLocaleString('es-ES')}`, 'Valor']}
                  labelFormatter={(label) => `Mes: ${label}`}
                  contentStyle={{ 
                    backgroundColor: 'var(--cl-bg-alt)',
                    border: '1px solid var(--cl-border)',
                    borderRadius: 'var(--rd-md)',
                    color: 'var(--cl-text-primary)'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="var(--cl-primary-500)"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* TIMELINE INDICATORS */}
          <div className="chart-timeline">
            {['12 feb 2025', '22 abr 2025', '01 jul 2025', '02 sept 2025', '04 nov 2025'].map((date, index) => (
              <div key={index} className="timeline-marker">
                <div className="marker-dot"></div>
                <span>{date}</span>
              </div>
            ))}
          </div>

          {/* NOTA INFORMATIVA */}
          <div className="chart-note">
            <p>
              La información del gráfico es cargada a partir de febrero del 2023 y representa 
              la rentabilidad diaria de las acciones que están dentro de tu portafolio, 
              no se tienen en cuenta las ventas, depósitos y retiros.
            </p>
          </div>
        </div>

        {/* COLUMNA DERECHA - PLANES Y COMPOSICIÓN */}
        <div className="sidebar-section">
          
          {/* SECCIÓN DE PLANES */}
          <div className="plans-overview">
            <h3>Fondos Disponibles</h3>
            
            <div className="plans-list">
              <div className="plan-item">
                <div className="plan-icon">
                  <FiPieChart />
                </div>
                <div className="plan-info">
                  <h4>Fondos</h4>
                  <span>Disponible en la app</span>
                </div>
                <FiChevronRight className="plan-arrow" />
              </div>

              <div className="plan-item">
                <div className="plan-icon">
                  <FiBarChart2 />
                </div>
                <div className="plan-info">
                  <h4>Renta Fija</h4>
                  <span>Disponible en la app</span>
                </div>
                <FiChevronRight className="plan-arrow" />
              </div>

              <div className="plan-item">
                <div className="plan-icon">
                  <FiTarget />
                </div>
                <div className="plan-info">
                  <h4>CDTs</h4>
                  <span>Disponible en la app</span>
                </div>
                <FiChevronRight className="plan-arrow" />
              </div>
            </div>
          </div>

          {/* COMPOSICIÓN DEL PORTAFOLIO */}
          <div className="portfolio-composition">
            <div className="composition-header">
              <h3>Composición</h3>
              <button className="btn-text">Ver detalles</button>
            </div>
            
            <div className="composition-main">
              <div className="composition-chart">
                <div className="donut-chart">
                  <div className="donut-ring"></div>
                  <div className="donut-center">
                    <span>100.00%</span>
                  </div>
                </div>
              </div>
              
              <div className="composition-details">
                <div className="composition-item-main">
                  <div className="item-header">
                    <div className="item-dot"></div>
                    <h4>Empresas · LTMCO</h4>
                  </div>
                  <div className="item-distribution">
                    <span>Distribución</span>
                    <strong>100.00%</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* LISTA DE ACTIVOS */}
            <div className="assets-list">
              <div className="asset-item">
                <div className="asset-info">
                  <div className="asset-color" style={{ backgroundColor: 'var(--cl-primary-500)' }}></div>
                  <div>
                    <h5>Acciones Tech (AAPL)</h5>
                    <span>Apple Inc.</span>
                  </div>
                </div>
                <div className="asset-value">
                  <strong>40%</strong>
                  <span>$10,500</span>
                </div>
              </div>

              <div className="asset-item">
                <div className="asset-info">
                  <div className="asset-color" style={{ backgroundColor: 'var(--cl-primary-600)' }}></div>
                  <div>
                    <h5>Acciones Tech (MSFT)</h5>
                    <span>Microsoft Corp.</span>
                  </div>
                </div>
                <div className="asset-value">
                  <strong>35%</strong>
                  <span>$9,188</span>
                </div>
              </div>

              <div className="asset-item">
                <div className="asset-info">
                  <div className="asset-color" style={{ backgroundColor: 'var(--cl-primary-700)' }}></div>
                  <div>
                    <h5>Oro (GLD)</h5>
                    <span>SPDR Gold Shares</span>
                  </div>
                </div>
                <div className="asset-value">
                  <strong>25%</strong>
                  <span>$6,562</span>
                </div>
              </div>
            </div>
          </div>

          {/* MOVIMIENTOS RECIENTES */}
          <div className="recent-movements-sidebar">
            <div className="movements-header">
              <h3>Movimientos Recientes</h3>
              <button className="btn-text">Historial</button>
            </div>
            
            <div className="movements-list-compact">
              {recentMovements.slice(0, 3).map((movement, index) => (
                <div key={index} className="movement-item-compact">
                  <div className="movement-icon">
                    {movement.type === 'Aporte' ? (
                      <FiArrowUp className="positive" />
                    ) : (
                      <FiArrowDown />
                    )}
                  </div>
                  <div className="movement-details">
                    <h4>{movement.type}</h4>
                    <span>{movement.date} • {movement.plan}</span>
                  </div>
                  <div className={`movement-amount ${movement.type === 'Aporte' ? 'positive' : ''}`}>
                    {movement.type === 'Aporte' ? '+' : '-'}${movement.amount.toLocaleString('es-ES')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN INFERIOR - DETALLES DEL PLAN */}
      <div className="plan-details-section">
        <div className="section-tabs">
          <button className="tab active">Resumen</button>
          <button className="tab">Rendimiento</button>
          <button className="tab">Composición</button>
          <button className="tab">Documentos</button>
        </div>
        
        <div className="details-grid">
          <div className="detail-card">
            <h4>Inversión Inicial</h4>
            <h3>$ {currentPlan.investedAmount.toLocaleString('es-ES')}</h3>
            <span>Capital inicial invertido</span>
          </div>

          <div className="detail-card">
            <h4>Ganancias Acumuladas</h4>
            <h3 className="positive">+$ {currentPlan.returns.toLocaleString('es-ES', { minimumFractionDigits: 2 })}</h3>
            <span>Total de rendimientos</span>
          </div>

          <div className="detail-card">
            <h4>Rendimiento Total</h4>
            <h3 className="positive">+{currentPlan.returnPercentage.toFixed(2)}%</h3>
            <span>Porcentaje de ganancia</span>
          </div>

          <div className="detail-card">
            <h4>Retorno Esperado</h4>
            <h3>{currentPlan.expectedReturn}</h3>
            <span>Proyección anual</span>
          </div>
        </div>
      </div>

    </section>
  )
}