'use client'
import React from 'react'
import Home from '../sections/Home'
import Portfolio from '../sections/Portafolio'
import Invest from '../sections/Invest'
import Movements from '../sections/Movements'
import '@/app/(dashboard)/onedash/components/MainContent.css'
import { motion, AnimatePresence } from 'framer-motion'

export default function MainContent({ section }) {
  return (
    <main className='main-content'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={section}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {section === 'home' && <Home/>}
          {section === 'portfolio' && <Portfolio />}
          {section === 'invest' && <Invest />}
          {section === 'movements' && <Movements />}
          {section === 'profile' && <Profile />}
          {section === 'help' && <Help />}
        </motion.div>
      </AnimatePresence>
    </main>
  )
}


/* COMPONENTES SIMULADOS */
const Profile = () => <h1>Mi perfil</h1>
const Help = () => <h1>Centro de ayuda</h1>