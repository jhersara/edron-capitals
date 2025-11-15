"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AppDownloadSection() {
  return (
    <section className="app-download">
      <div className="app-content">

        {/* Texto izquierdo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-block"
        >
          <h2 className="title">
            HAZ QUE TU DINERO EMPIECE <br />
            A TRABAJAR POR TI
          </h2>

          <button className="download-btn active">
            <Image
              src="/images/darklogo.png"
              alt="Edron Logo"
              width={25}
              height={25}
            />
            Descargar App
          </button>
        </motion.div>

        {/* QR derecho */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="qr-block"
        >
          <Image
            src="/global/images/qr-app.png"
            alt="Código QR para descargar app"
            width={180}
            height={180}
            className="qr-img"
          />
          <p className="qr-text">Escanea el código para descargar la app</p>
        </motion.div>

      </div>
    </section>
  );
}
