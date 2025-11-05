import { useState } from 'react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const stats = [
    { value: '$25M+', label: 'Activos Bajo Gestión' },
    { value: '15.2%', label: 'Rendimiento Anual' },
    { value: '500+', label: 'Inversores Activos' },
    { value: '99.8%', label: 'Tasa de Satisfacción' }
  ];

  const features = [
    {
      icon: '📊',
      title: 'Rendimientos Consistentes',
      description: 'Estrategias de inversión probadas que generan retornos consistentes mes a mes.'
    },
    {
      icon: '🔒',
      title: 'Seguridad Garantizada',
      description: 'Tus inversiones protegidas con los más altos estándares de seguridad financiera.'
    },
    {
      icon: '📈',
      title: 'Dashboard en Tiempo Real',
      description: 'Monitorea tus inversiones y rendimientos 24/7 desde cualquier dispositivo.'
    },
    {
      icon: '💰',
      title: 'Retiros Rápidos',
      description: 'Accede a tu dinero cuando lo necesites con retiros procesados en 24 horas.'
    }
  ];

  return (
    <div style={styles.container}>
      {/* Header/Navbar */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <span style={styles.logoIcon}>💎</span>
            <span style={styles.logoText}>Edron Capitals</span>
          </div>
          
          {/* Desktop Menu */}
          <nav style={styles.desktopNav}>
            <a href="#inicio" style={styles.navLink}>Inicio</a>
            <a href="#nosotros" style={styles.navLink}>Nosotros</a>
            <a href="#rendimientos" style={styles.navLink}>Rendimientos</a>
            <a href="#contacto" style={styles.navLink}>Contacto</a>
          </nav>

          <div style={styles.headerButtons}>
            <a href="/login" style={styles.loginButton}>Iniciar Sesión</a>
            <a href="/register" style={styles.registerButton}>Empezar Ahora</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            style={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={styles.mobileMenu}>
            <a href="#inicio" style={styles.mobileNavLink}>Inicio</a>
            <a href="#nosotros" style={styles.mobileNavLink}>Nosotros</a>
            <a href="#rendimientos" style={styles.mobileNavLink}>Rendimientos</a>
            <a href="#contacto" style={styles.mobileNavLink}>Contacto</a>
            <a href="/login" style={styles.mobileNavLink}>Iniciar Sesión</a>
            <a href="/register" style={styles.mobileRegisterButton}>Empezar Ahora</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section style={styles.hero} id="inicio">
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Invierte en tu Futuro con
            <span style={styles.heroTitleAccent}> Edron Capitals</span>
          </h1>
          <p style={styles.heroDescription}>
            Accede a estrategias de inversión profesionales y haz crecer tu patrimonio 
            con rendimientos consistentes respaldados por expertos financieros.
          </p>
          <div style={styles.heroButtons}>
            <a href="/register" style={styles.heroCTA}>
              Crear Cuenta Gratis
            </a>
            <a href="#rendimientos" style={styles.heroSecondary}>
              Ver Rendimientos
            </a>
          </div>
          
          {/* Stats */}
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} style={styles.statCard}>
                <div style={styles.statValue}>{stat.value}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features} id="nosotros">
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>¿Por qué elegir Edron Capitals?</h2>
          <p style={styles.sectionSubtitle}>
            Nos diferenciamos por nuestra transparencia, experiencia y compromiso con tus objetivos financieros
          </p>
          
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} style={styles.featureCard}>
                <div style={styles.featureIcon}>{feature.icon}</div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section style={styles.performance} id="rendimientos">
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Rendimientos Históricos</h2>
          <p style={styles.sectionSubtitle}>
            Resultados reales de nuestro fondo de inversión
          </p>
          
          <div style={styles.performanceCard}>
            <div style={styles.performanceHeader}>
              <div>
                <h3 style={styles.performanceTitle}>Performance 2024</h3>
                <p style={styles.performanceSubtitle}>Rendimiento acumulado del fondo</p>
              </div>
              <div style={styles.performanceBadge}>
                <span style={styles.performancePercent}>+15.2%</span>
              </div>
            </div>
            
            <div style={styles.performanceChart}>
              {/* Simulación de gráfica simple */}
              <div style={styles.chartBars}>
                {[45, 62, 55, 78, 85, 72, 88, 95, 82, 90, 98, 100].map((height, i) => (
                  <div key={i} style={styles.chartBarWrapper}>
                    <div style={{...styles.chartBar, height: `${height}%`}}></div>
                    <span style={styles.chartLabel}>
                      {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.performanceMetrics}>
              <div style={styles.metric}>
                <span style={styles.metricLabel}>Mejor Mes</span>
                <span style={styles.metricValue}>+2.8%</span>
              </div>
              <div style={styles.metric}>
                <span style={styles.metricLabel}>Rendimiento Promedio</span>
                <span style={styles.metricValue}>+1.27%</span>
              </div>
              <div style={styles.metric}>
                <span style={styles.metricLabel}>Volatilidad</span>
                <span style={styles.metricValue}>Baja</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>¿Listo para hacer crecer tu capital?</h2>
          <p style={styles.ctaDescription}>
            Únete a cientos de inversores que ya confían en Edron Capitals
          </p>
          <a href="/register" style={styles.ctaButton}>
            Comenzar Ahora - Es Gratis
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer} id="contacto">
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <div style={styles.footerLogo}>
              <span style={styles.logoIcon}>💎</span>
              <span style={styles.footerLogoText}>Edron Capitals</span>
            </div>
            <p style={styles.footerText}>
              Fondo de inversión profesional comprometido con el crecimiento de tu patrimonio.
            </p>
          </div>

          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Contacto</h4>
            <p style={styles.footerText}>📧 info@edroncapitals.com</p>
            <p style={styles.footerText}>📱 +57 300 123 4567</p>
            <p style={styles.footerText}>📍 Bogotá, Colombia</p>
          </div>

          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Enlaces</h4>
            <a href="#" style={styles.footerLink}>Términos y Condiciones</a>
            <a href="#" style={styles.footerLink}>Política de Privacidad</a>
            <a href="#" style={styles.footerLink}>Preguntas Frecuentes</a>
          </div>
        </div>
        
        <div style={styles.footerBottom}>
          <p style={styles.footerCopyright}>
            © 2025 Edron Capitals. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    color: '#1a1a1a',
    lineHeight: '1.6',
  },
  
  // Header
  header: {
    position: 'sticky',
    top: 0,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #e5e7eb',
    zIndex: 1000,
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e40af',
  },
  logoIcon: {
    fontSize: '1.75rem',
  },
  logoText: {
    fontSize: '1.25rem',
  },
  desktopNav: {
    display: 'flex',
    gap: '2rem',
  },
  navLink: {
    color: '#4b5563',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s',
  },
  headerButtons: {
    display: 'flex',
    gap: '1rem',
  },
  loginButton: {
    padding: '0.5rem 1.5rem',
    color: '#1e40af',
    textDecoration: 'none',
    fontWeight: '500',
    borderRadius: '0.5rem',
    transition: 'background 0.3s',
  },
  registerButton: {
    padding: '0.5rem 1.5rem',
    background: '#1e40af',
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    borderRadius: '0.5rem',
    transition: 'background 0.3s',
  },
  mobileMenuButton: {
    display: 'none',
    fontSize: '1.5rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#1e40af',
  },
  mobileMenu: {
    display: 'none',
    flexDirection: 'column',
    padding: '1rem 2rem',
    gap: '1rem',
    borderTop: '1px solid #e5e7eb',
  },
  mobileNavLink: {
    color: '#4b5563',
    textDecoration: 'none',
    fontWeight: '500',
    padding: '0.5rem 0',
  },
  mobileRegisterButton: {
    padding: '0.75rem',
    background: '#1e40af',
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    borderRadius: '0.5rem',
    textAlign: 'center',
  },

  // Hero
  hero: {
    background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
    color: 'white',
    padding: '6rem 2rem',
  },
  heroContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '800',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
  },
  heroTitleAccent: {
    display: 'block',
    color: '#fbbf24',
  },
  heroDescription: {
    fontSize: '1.25rem',
    maxWidth: '700px',
    margin: '0 auto 2rem',
    opacity: 0.95,
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '4rem',
    flexWrap: 'wrap',
  },
  heroCTA: {
    padding: '1rem 2rem',
    background: '#fbbf24',
    color: '#1a1a1a',
    textDecoration: 'none',
    fontWeight: '600',
    borderRadius: '0.5rem',
    fontSize: '1.125rem',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  heroSecondary: {
    padding: '1rem 2rem',
    background: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    textDecoration: 'none',
    fontWeight: '600',
    borderRadius: '0.5rem',
    fontSize: '1.125rem',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    transition: 'background 0.3s',
  },
  
  // Stats
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  },
  statCard: {
    background: 'rgba(255, 255, 255, 0.15)',
    padding: '1.5rem',
    borderRadius: '1rem',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  statValue: {
    fontSize: '2.5rem',
    fontWeight: '800',
    marginBottom: '0.5rem',
    color: '#fbbf24',
  },
  statLabel: {
    fontSize: '0.95rem',
    opacity: 0.9,
  },

  // Features Section
  features: {
    padding: '6rem 2rem',
    background: 'white',
  },
  sectionContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#1a1a1a',
  },
  sectionSubtitle: {
    fontSize: '1.125rem',
    textAlign: 'center',
    color: '#6b7280',
    maxWidth: '700px',
    margin: '0 auto 3rem',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  },
  featureCard: {
    padding: '2rem',
    borderRadius: '1rem',
    background: '#f9fafb',
    border: '1px solid #e5e7eb',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  featureTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
    color: '#1a1a1a',
  },
  featureDescription: {
    color: '#6b7280',
    lineHeight: '1.6',
  },

  // Performance Section
  performance: {
    padding: '6rem 2rem',
    background: '#f9fafb',
  },
  performanceCard: {
    background: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e5e7eb',
  },
  performanceHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  performanceTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '0.25rem',
  },
  performanceSubtitle: {
    color: '#6b7280',
  },
  performanceBadge: {
    background: '#10b981',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
  },
  performancePercent: {
    fontSize: '1.5rem',
    fontWeight: '700',
  },
  performanceChart: {
    marginBottom: '2rem',
  },
  chartBars: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: '200px',
    padding: '1rem 0',
    gap: '0.5rem',
  },
  chartBarWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  },
  chartBar: {
    width: '100%',
    background: 'linear-gradient(to top, #1e40af, #3b82f6)',
    borderRadius: '0.25rem',
    minHeight: '20px',
    transition: 'height 0.3s',
  },
  chartLabel: {
    fontSize: '0.75rem',
    color: '#6b7280',
  },
  performanceMetrics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '2rem',
    padding: '1.5rem',
    background: '#f9fafb',
    borderRadius: '0.5rem',
  },
  metric: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  metricLabel: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  metricValue: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1a1a1a',
  },

  // CTA Section
  cta: {
    padding: '6rem 2rem',
    background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
    color: 'white',
  },
  ctaContent: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
  },
  ctaDescription: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    opacity: 0.95,
  },
  ctaButton: {
    display: 'inline-block',
    padding: '1rem 2.5rem',
    background: '#fbbf24',
    color: '#1a1a1a',
    textDecoration: 'none',
    fontWeight: '600',
    borderRadius: '0.5rem',
    fontSize: '1.125rem',
    transition: 'transform 0.3s',
  },

  // Footer
  footer: {
    background: '#1f2937',
    color: 'white',
    padding: '3rem 2rem 1rem',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    marginBottom: '2rem',
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
  },
  footerLogoText: {
    fontSize: '1.25rem',
  },
  footerTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  footerText: {
    color: '#d1d5db',
    fontSize: '0.95rem',
  },
  footerLink: {
    color: '#d1d5db',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.3s',
  },
  footerBottom: {
    maxWidth: '1200px',
    margin: '2rem auto 0',
    paddingTop: '2rem',
    borderTop: '1px solid #374151',
    textAlign: 'center',
  },
  footerCopyright: {
    color: '#9ca3af',
    fontSize: '0.875rem',
  },

  // Media Queries simuladas
  '@media (max-width: 768px)': {
    heroTitle: {
      fontSize: '2rem',
    },
  },
};