"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BenefitsSection() {
  const benefits = [
    "Inversión mínima accesible desde $5.000.000 COP",
    "Sin comisiones de entrada ni permanencia",
    "Liquidez flexible según tus necesidades",
    "Asesoría personalizada por expertos certificados",
    "Diversificación profesional del portafolio",
    "Cumplimiento regulatorio total",
  ];

  return (
    <section className="benefits-wrapper">
      <div className="benefits-container">
        <motion.div
          className="benefits-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="benefits-title">
            Beneficios de <span>Invertir con Nosotros</span>
          </h2>
          <p className="benefits-subtitle">
            En <strong>Edron Capitals</strong> diseñamos cada aspecto de nuestro
            servicio pensando en tu tranquilidad, crecimiento y libertad
            financiera.
          </p>

          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                className="benefit-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="benefit-icon">☑</span>
                {benefit}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="benefits-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="image-frame">
            <Image
              src="/images/growth-chart.jpg"
              alt="Gráfico de crecimiento financiero"
              width={480}
              height={480}
              className="benefit-img"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
