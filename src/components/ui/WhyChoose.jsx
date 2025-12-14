// /src/components/WhyChoose.jsx
import React from 'react';
import Link from 'next/link';
import { RiMedalLine, RiArrowRightLine} from 'react-icons/ri'

export default function WhyChoose() {
  const items = [
    {
      title: 'Estrategia Probada',
      desc: 'Modelos cuantitativos y análisis macro para optimizar retornos ajustados al riesgo.',
      icon: 'chart',
    },
    {
      title: 'Transparencia Total',
      desc: 'Reportes periódicos, acceso a métricas y un dashboard claro para cada inversionista.',
      icon: 'eye',
    },
    {
      title: 'Tecnología de Vanguardia',
      desc: 'Plataforma segura, infraestructuras modernas y despliegues automáticos.',
      icon: 'rocket',
    },
    {
      title: 'Gestión Profesional',
      desc: 'Equipo con experiencia en mercados globales y gestión patrimonial.',
      icon: 'shield',
    },
  ];

  const Icon = ({ name }) => {
    const commonProps = { width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' };
    switch (name) {
      case 'chart':
        return (
          <svg {...commonProps} aria-hidden="true">
            <path d="M3 17h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 13v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 17V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 17v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'eye':
        return (
          <svg {...commonProps} aria-hidden="true">
            <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        );
      case 'rocket':
        return (
          <svg {...commonProps} aria-hidden="true">
            <path d="M5 19c1.3-1.3 3.2-2.1 5-2.4L19 8l-6.6 9.1c-.3 1.8-1.1 3.7-2.4 5L5 19z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 7l5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'shield':
      default:
        return (
          <svg {...commonProps} aria-hidden="true">
            <path d="M12 3l7 3v5c0 5-3.6 9.3-7 10-3.4-.7-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
    }
  };

  return (
    <section className="why-choose container" aria-labelledby="why-title">
      <div className="why-head">
        <h2 id="why-title">¿Por qué elegir Edron Capitals?</h2>
        <p className="why-sub">Combinamos tecnología, transparencia y gestión experta para proteger y hacer crecer su patrimonio.</p>
      </div>

      <div className="why-grid">
        {items.map((it, i) => (
          <article className="why-card" key={i}>
            <div className="why-icon" aria-hidden="true" style={{ color: 'var(--cl-primary-500)' }}>
              <Icon name={it.icon} />
            </div>
            <h3 className="why-title-card">{it.title}</h3>
            <p className="why-desc">{it.desc}</p>
          </article>
        ))}
      </div>

      <div className="why-cta">
        <Link href="/login" className="btn actived">Comienza a invertir <RiArrowRightLine /></Link>
        
      </div>
    </section>
  );
}
