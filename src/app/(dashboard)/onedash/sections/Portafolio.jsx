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
  FiShield,
  FiGlobe,
  FiActivity,
  FiDatabase
} from 'react-icons/fi'
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts'
import { investmentFunds, fundCategories, recentActivities, fundMetrics } from '@/data/investmentFunds'
import { useState } from 'react'

export default function Portfolio() {
  const [selectedFund, setSelectedFund] = useState('fondo-tecnologico')
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [timeRange, setTimeRange] = useState('1Y')
  
  const currentFund = investmentFunds.find(f => f.id === selectedFund)
  const filteredFunds = selectedCategory === 'todos' 
    ? investmentFunds 
    : investmentFunds.filter(f => f.category.toLowerCase().includes(selectedCategory))

  const timeRanges = [
    { label: '1M', value: '1M' },
    { label: '3M', value: '3M' },
    { label: '6M', value: '6M' },
    { label: '1Y', value: '1Y' },
    { label: 'Todo', value: 'ALL' }
  ]

  // Generar tonos de amarillo para gráficos
  const getYellowShade = (index) => {
    const shades = ['#ffea00', '#e6d200', '#ccba00', '#b3a100', '#998900']
    return shades[index % shades.length]
  }

  return (
    <section className="portfolio-funds">

      {/* HEADER PRINCIPAL */}
      <div className="funds-header">
        <div>
          <h1>Mi Portafolio de Fondos</h1>
          <p>Gestiona y monitorea tus inversiones en fondos colectivos</p>
        </div>
        <div className="header-actions">
          <button className="btn-primary">
            <FiCreditCard /> Nuevo Aporte
          </button>
          <button className="btn-secondary">
            <FiDownload /> Estado de Cuenta
          </button>
        </div>
      </div>

      {/* ESTADÍSTICAS GLOBALES */}
      <div className="global-metrics">
        <div className="metric-card">
          <div className="metric-icon">
            <FiDollarSign />
          </div>
          <div className="metric-content">
            <span>Valor Total del Portafolio</span>
            <h2>${fundMetrics.totalValue.toLocaleString('es-ES', { minimumFractionDigits: 2 })}</h2>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon positive">
            <FiTrendingUp />
          </div>
          <div className="metric-content">
            <span>Ganancias Totales</span>
            <h2 className="positive">+${fundMetrics.totalReturns.toLocaleString('es-ES', { minimumFractionDigits: 2 })}</h2>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon">
            <FiActivity />
          </div>
          <div className="metric-content">
            <span>Rendimiento Promedio</span>
            <h2>+{fundMetrics.averageReturn}%</h2>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon">
            <FiDatabase />
          </div>
          <div className="metric-content">
            <span>Fondos Activos</span>
            <h2>{investmentFunds.length}</h2>
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="funds-main-content">
        
        {/* COLUMNA IZQUIERDA - DETALLE DEL FONDO */}
        <div className="fund-detail-section">
          <div className="fund-detail-card">
            <div className="fund-detail-header">
              <div className="fund-badge">
                {currentFund.category}
              </div>
              <div className="fund-actions">
                <button className="btn-icon">
                  <FiDownload />
                </button>
                <button className="btn-icon">
                  <FiGlobe />
                </button>
              </div>
            </div>

            <div className="fund-title">
              <h2>{currentFund.name}</h2>
              <p>{currentFund.description}</p>
            </div>

            <div className="fund-metrics">
              <div className="fund-metric">
                <span>Valor Actual de la Cuota</span>
                <h3>${currentFund.currentValue.toLocaleString('es-ES', { minimumFractionDigits: 2 })}</h3>
              </div>
              <div className="fund-metric">
                <span>Rendimiento Acumulado</span>
                <h3 className="positive">+{currentFund.returnPercentage.toFixed(2)}%</h3>
              </div>
              <div className="fund-metric">
                <span>Comisión de Gestión</span>
                <h3>{currentFund.managementFee}</h3>
              </div>
              <div className="fund-metric">
                <span>Liquidez</span>
                <h3>{currentFund.liquidity}</h3>
              </div>
            </div>

            {/* GRÁFICO DE RENDIMIENTO */}
            <div className="fund-performance-chart">
              <div className="chart-header">
                <h4>Evolución Histórica</h4>
                <div className="time-range-selector">
                  {timeRanges.map(range => (
                    <button
                      key={range.value}
                      className={`time-range-btn ${timeRange === range.value ? 'active' : ''}`}
                      onClick={() => setTimeRange(range.value)}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={currentFund.performanceHistory}>
                  <defs>
                    <linearGradient id={`gradient-${currentFund.id}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={currentFund.color} stopOpacity={0.8}/>
                      <stop offset="95%" stopColor={currentFund.color} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--cl-border)" />
                  <XAxis 
                    dataKey="month" 
                    stroke="var(--cl-text-secondary)"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="var(--cl-text-secondary)"
                    fontSize={12}
                    tickFormatter={(value) => `$${(value/1000).toFixed(0)}k`}
                  />
                  <Tooltip 
                    formatter={(value) => [`$${value.toLocaleString('es-ES')}`, 'Valor de la cuota']}
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
                    stroke={currentFund.color}
                    strokeWidth={2}
                    fillOpacity={1}
                    fill={`url(#gradient-${currentFund.id})`}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* COMPOSICIÓN DEL FONDO */}
            <div className="fund-composition">
              <h4>Composición del Fondo</h4>
              <div className="composition-bars">
                {currentFund.composition.map((asset, index) => (
                  <div key={index} className="composition-bar">
                    <div className="bar-label">
                      <span>{asset.asset}</span>
                      <strong>{asset.percentage}%</strong>
                    </div>
                    <div className="bar-container">
                      <div 
                        className="bar-fill"
                        style={{ 
                          width: `${asset.percentage}%`,
                          backgroundColor: getYellowShade(index)
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ACTIVIDAD RECIENTE */}
          <div className="recent-activity-card">
            <h3>Actividad Reciente</h3>
            <div className="activity-list">
              {recentActivities.map((activity, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-icon">
                    {activity.type === 'Aporte' ? (
                      <FiArrowUp className="positive" />
                    ) : activity.type === 'Reinversión' ? (
                      <FiActivity className="warning" />
                    ) : (
                      <FiArrowDown />
                    )}
                  </div>
                  <div className="activity-details">
                    <h4>{activity.type}</h4>
                    <span>{activity.date} • {activity.fund}</span>
                  </div>
                  <div className={`activity-amount ${activity.type === 'Aporte' ? 'positive' : ''}`}>
                    {activity.type === 'Aporte' ? '+' : '-'}${activity.amount.toLocaleString('es-ES')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA - LISTA DE FONDOS */}
        <div className="funds-list-section">
          {/* FILTROS POR CATEGORÍA */}
          <div className="category-filters">
            <h3>Categorías de Fondos</h3>
            <div className="filter-buttons">
              {fundCategories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                  <span className="fund-count">{category.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* LISTA DE FONDOS */}
          <div className="funds-list">
            {filteredFunds.map(fund => (
              <div 
                key={fund.id}
                className={`fund-item ${selectedFund === fund.id ? 'selected' : ''}`}
                onClick={() => setSelectedFund(fund.id)}
              >
                <div className="fund-item-header">
                  <div className="fund-icon">
                    {fund.category === 'Alto Rendimiento' ? <FiTrendingUp /> : 
                     fund.category === 'Protección' ? <FiShield /> : 
                     <FiGlobe />}
                  </div>
                  <div className="fund-item-info">
                    <h4>{fund.name}</h4>
                    <span className="fund-category">{fund.category}</span>
                  </div>
                </div>

                <div className="fund-item-metrics">
                  <div className="metric">
                    <span>Rendimiento</span>
                    <strong className="positive">+{fund.returnPercentage.toFixed(2)}%</strong>
                  </div>
                  <div className="metric">
                    <span>Valor</span>
                    <strong>${fund.currentValue.toLocaleString('es-ES', { minimumFractionDigits: 2 })}</strong>
                  </div>
                </div>

                <div className="risk-indicator">
                  <span className={`risk-level ${fund.riskLevel.toLowerCase()}`}>
                    Riesgo {fund.riskLevel}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* INFORMACIÓN DEL FONDO */}
          <div className="fund-info-card">
            <h3>Información del Fondo</h3>
            <div className="info-grid">
              <div className="info-item">
                <span>Mínimo de Inversión</span>
                <strong>${currentFund.minInvestment.toLocaleString('es-ES')}</strong>
              </div>
              <div className="info-item">
                <span>Rendimiento Esperado</span>
                <strong>{currentFund.expectedReturn}</strong>
              </div>
              <div className="info-item">
                <span>Comisión de Gestión</span>
                <strong>{currentFund.managementFee}</strong>
              </div>
              <div className="info-item">
                <span>Liquidez</span>
                <strong>{currentFund.liquidity}</strong>
              </div>
            </div>
            
            <button className="btn-primary full-width">
              <FiDollarSign /> Invertir en este Fondo
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}