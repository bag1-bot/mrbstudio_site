"use client";

import { motion, useReducedMotion } from 'framer-motion';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-transparent">
      <motion.div className="relative z-10 text-center w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-0">
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            scale: { duration: 1, ease: "easeOut" },
            opacity: { duration: 1, ease: "easeOut" },
          }}
          className="text-5xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter neon-gradient-text neon-gradient-animate drop-shadow-[0_0_30px_rgba(255,0,255,0.6)] w-full block text-center"
        >
          MRB STUDIO
        </motion.h1>
        
        <div className="mt-16 space-y-8 w-full">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-4xl font-bold text-white tracking-wide uppercase w-full block text-center"
          >
            Разработка IT решений
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-2 md:gap-4 mt-6 text-gray-400 w-full px-2"
          >
            {['Telegram Боты', 'Telegram Mini App', 'Парсеры', 'Веб-сайты', 'Приложения'].map((item, index) => (
              <motion.span 
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, color: "#fff", borderColor: "#fff" }}
                className="border border-gray-600 px-2 py-1 md:px-4 md:py-2 rounded uppercase text-xs md:text-sm tracking-widest cursor-default transition-colors"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-12"
          >
            <a 
              href="https://t.me/mrb_studio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-transform transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Оставить Заявку
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        animate={shouldReduceMotion ? undefined : { y: [0, 10, 0] }}
        transition={shouldReduceMotion ? undefined : { repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-0 right-0 text-center"
      >
        <span className="text-white/50 text-sm tracking-widest uppercase">Узнать о нас побольше</span>
      </motion.div>
    </section>
  );
};

export default Hero;
