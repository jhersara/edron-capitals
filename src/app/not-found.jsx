'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/ui/Footer';


export default function Custom404() {
  return (
    <div className='nf-container'>
        {/* Numero 404 */}
        <motion.h1
            initial={{opacity:0, scale:0.7}}
            animate={{opacity:1, scale:1}}
            transition={{duration:1.2}}
            className='nf-title'
        >
            404
        </motion.h1>
        {/* Divider */}
        <div className="nf-divider"></div>
        {/* Mensaje */}
        <motion.p
            initial={{opacity:0, y:15}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.3, duration:0.6}}
            className='nf-message'
        >
            Ups, La pagina que visitas no existe ;) <br />
            Pero recuerda,
            <span className="nf-quote">
                "Un hombre se define por como actua ante lo inesperado"
            </span>
        </motion.p>

        {/* Boton */}
        <motion.div
            initial={{opacity:0, y:15}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.6, duration:0.6}}
            className='nf-message'
        >
            <Link href='/' className='nf-button'>
                Regresar al inicio
            </Link>
        </motion.div>
        {/* Footer */}
        <motion.div>
            <Footer/>
        </motion.div>
    </div>
  )
}
