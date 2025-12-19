"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import '@/styles/ui/footer.css'
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="footer">
        
      <div className="footer-container">

        {/* --- Columna 1: Empresa / Legal --- */}
        <div className="footer-columns">
          <div className="footer-col">
            <h4>Empresa</h4>
            <a href="/">Inicio</a>
            <a href="/">Fondos</a>
            <a href="/">Nosotros</a>
            <a href="/">Contacto</a>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <a href="/">Términos y Condiciones</a>
            <a href="/">Política de Privacidad</a>
            <a href="/">Contrato de Servicios</a>
            <a href="/">Código de Buen Gobierno</a>
          </div>
        </div>

        {/* --- Columna 2: Formulario de suscripción --- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="footer-news"
          viewport={{ once: true }}
        >
          <h4>¿Quieres estar al tanto?</h4>
          <p>Déjanos tu correo y te contaremos todas nuestras novedades.</p>

          <div className="email-box">
            <span className="mail-icon">✉</span>
            <input
              type="email"
              placeholder="Escribe tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <Link  href='register' className="btn news-btn">Registrarme</Link>
        </motion.div>
      </div>

      {/* --- Línea inferior con logo y redes --- */}
      <div className="footer-bottom">
        <div className="footer-logo">
          <Image
            src="/images/logo.png"
            width={32}
            height={32}
            alt="Edron Logo"
          />
          <span>Edron Capitals</span>
        </div>

        <div className="social-icons">
          <a href="#"><i className="ri-facebook-fill"></i></a>
          <a href="#"><i className="ri-instagram-line"></i></a>
          <a href="#"><i className="ri-twitter-x-line"></i></a>
          <a href="#"><i className="ri-tiktok-fill"></i></a>
          <a href="#"><i className="ri-linkedin-fill"></i></a>
          <a href="#"><i className="ri-youtube-fill"></i></a>
        </div>
      </div>
    </footer>
  );
}
