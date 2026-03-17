"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiDocker, SiPostgresql, 
  SiMongodb, SiRedis, SiNginx, SiLinux, SiOpenai, SiFlutter, SiSwift, SiKotlin, 
  SiDotnet, SiSelenium, SiPuppeteer, SiTensorflow, SiPytorch
} from 'react-icons/si';

export default function Services() {
  const services = [
    { 
      title: 'Парсинг и автоматизация', 
      desc: [
        'Разработка парсеров любой сложности с обходом систем антифрода.',
        'Парсинг динамических сайтов.',
        'Разработка веб-краулеров (пауков) с последующей обработкой данных.'
      ],
      tech: [
        { icon: SiPython, color: '#3776AB', name: 'Python' },
        { icon: SiSelenium, color: '#43B02A', name: 'Selenium' },
        { icon: SiPuppeteer, color: '#40B5A4', name: 'Puppeteer' },
        { icon: SiDocker, color: '#2496ED', name: 'Docker' },
        { icon: SiPostgresql, color: '#336791', name: 'PostgreSQL' }
      ],
      gradient: 'from-neon-green to-emerald-500'
    },
    { 
      title: 'Веб-разработка', 
      desc: [
        'Разработка WebApp-приложений для Telegram.',
        'Pixel-perfect верстка и разработка сайтов.',
        'Разработка TWA и PWA приложений.'
      ],
      tech: [
        { icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
        { icon: SiReact, color: '#61DAFB', name: 'React' },
        { icon: SiNextdotjs, color: '#000000', name: 'Next.js' },
        { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
        { icon: SiNginx, color: '#009639', name: 'Nginx' }
      ],
      gradient: 'from-neon-blue to-cyan-500'
    },
    { 
      title: 'Разработка ПО', 
      desc: [
        'Создание десктопных программ под Windows.',
        'Разработка мобильных приложений (iOS, Android).'
      ],
      tech: [
        { icon: SiDotnet, color: '#512BD4', name: '.NET' },
        { icon: SiFlutter, color: '#02569B', name: 'Flutter' },
        { icon: SiSwift, color: '#F05138', name: 'Swift' },
        { icon: SiKotlin, color: '#7F52FF', name: 'Kotlin' }
      ],
      gradient: 'from-neon-purple to-indigo-500'
    },
    { 
      title: 'ИИ и автоматизация', 
      desc: [
        'Интеграция ИИ в бизнес-процессы.',
        'Автоматизация с использованием ИИ-агентов (настройка, развертывание и адаптация под задачи клиента).'
      ],
      tech: [
        { icon: SiOpenai, color: '#412991', name: 'OpenAI' },
        { icon: SiPython, color: '#3776AB', name: 'Python' },
        { icon: SiTensorflow, color: '#FF6F00', name: 'TensorFlow' },
        { icon: SiPytorch, color: '#EE4C2C', name: 'PyTorch' },
        { icon: SiRedis, color: '#DC382D', name: 'Redis' }
      ],
      gradient: 'from-neon-pink to-rose-500'
    },
    { 
      title: 'Консалтинг и инфраструктура', 
      desc: [
        'Аудит IT-систем.',
        'Составление технических заданий (ТЗ).',
        'DevOps-услуги.',
        'Обеспечение информационной безопасности.'
      ],
      tech: [
        { icon: SiLinux, color: '#FCC624', name: 'Linux' },
        { icon: SiDocker, color: '#2496ED', name: 'Docker' },
        { icon: SiNginx, color: '#009639', name: 'Nginx' },
        { icon: SiPostgresql, color: '#336791', name: 'PostgreSQL' }
      ],
      gradient: 'from-rockstar-yellow to-neon-orange'
    }
  ];

  return (
    <main className="min-h-screen bg-transparent text-white font-sans selection:bg-neon-pink selection:text-white pt-20 relative overflow-hidden">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-0 left-0 right-0 flex items-center justify-center z-0 pointer-events-none -mt-20 md:-mt-32"
          >
            <span className="text-[5rem] md:text-[20rem] font-black text-white leading-none tracking-tighter select-none">
              SERVICES
            </span>
          </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-5xl md:text-9xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-pink to-neon-orange text-center uppercase tracking-tighter drop-shadow-[0_0_35px_rgba(255,0,255,0.3)]"
        >
          Услуги
        </motion.h1>
        
        <div className="relative z-10 grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <div key={index} className="relative">
              {/* Animated Border Container */}
              <div className="relative rounded-3xl p-[3px] overflow-hidden group">
                {/* Moving Gradient Border - Glow Layer */}
                <motion.div
                  className="absolute inset-[-100%]"
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0%, ${service.tech[0]?.color || '#ff00ff'} 15%, transparent 30%, transparent 50%, ${service.tech[1]?.color || '#00ffff'} 65%, transparent 80%)`,
                    filter: 'blur(20px)',
                  }}
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 4,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />
                
                {/* Moving Gradient Border - Sharp Layer */}
                <motion.div
                  className="absolute inset-[-100%]"
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0%, ${service.tech[0]?.color || '#ff00ff'} 15%, transparent 30%, transparent 50%, ${service.tech[1]?.color || '#00ffff'} 65%, transparent 80%)`,
                  }}
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 4,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />

                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/70 relative z-10 rounded-3xl p-8 md:p-10 h-full"
                >
                  {/* Gradient Glow Background inside card */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />
                  
                  <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12">
                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className={`text-3xl md:text-4xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r ${service.gradient}`}>
                        {service.title}
                      </h3>
                      <ul className="space-y-3">
                        {service.desc.map((item, i) => (
                          <li key={i} className="flex items-start text-gray-300 text-lg">
                            <span className={`mr-3 mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex-1 md:max-w-md">
                      <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-bold">Технологии</h4>
                      <div className="flex flex-wrap gap-4">
                        {service.tech.map((tech, i) => (
                          <div 
                            key={i} 
                            className="flex items-center gap-2 bg-gray-900 border border-white/10 px-4 py-2 rounded-full hover:border-white/40 transition-colors group/tech"
                          >
                            <tech.icon 
                              className="w-5 h-5 transition-transform group-hover/tech:scale-110" 
                              style={{ color: tech.color, filter: `drop-shadow(0 0 5px ${tech.color})` }} 
                            />
                            <span className="text-sm font-medium text-gray-300 group-hover/tech:text-white transition-colors">
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
