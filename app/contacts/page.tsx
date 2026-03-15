"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Contacts() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-neon-pink selection:text-white pt-20">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
          >
            <span className="text-[5rem] md:text-[20rem] font-black text-white leading-none tracking-tighter select-none">
              CONTACT
            </span>
          </motion.div>

        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative z-10 text-5xl md:text-9xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-rockstar-yellow via-neon-orange to-neon-red uppercase tracking-tighter drop-shadow-[0_0_35px_rgba(255,165,0,0.4)] text-center"
        >
          Контакты
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 space-y-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto text-center bg-black/50 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10"
        >
          <p className="text-lg md:text-xl">Свяжитесь с нами для обсуждения вашего проекта:</p>
          <ul className="space-y-4">
            <li className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3">
              <span className="text-neon-blue">Telegram:</span> 
              <a href="https://t.me/mrb_studio" className="text-white hover:text-neon-pink transition-colors font-bold text-xl md:text-2xl">@mrb_studio</a>
            </li>
            <li className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3">
              <span className="text-neon-blue">Email:</span> 
              <a href="mailto:contact@mrbstudio.com" className="text-white hover:text-neon-pink transition-colors font-bold text-xl md:text-2xl">contact@mrbstudio.com</a>
            </li>
            <li className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3">
              <span className="text-neon-blue">Телефон:</span>
              <span className="text-white font-bold text-xl md:text-2xl">+7 (999) 123-45-67</span>
            </li>
          </ul>
          <div className="mt-12 pt-8">
            <a 
              href="https://t.me/mrb_studio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 md:px-12 py-3 md:py-4 rounded-full font-black text-lg md:text-xl hover:bg-neon-pink hover:text-white transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,0,255,0.6)] w-full md:w-auto"
            >
              Оставить Заявку
            </a>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
