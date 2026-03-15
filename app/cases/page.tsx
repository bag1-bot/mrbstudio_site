"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Cases() {
  const cases = [
    { 
      title: 'Теплый мастер', 
      client: 'Telegram Бот', 
      desc: 'Бот для записи на остекление балконов с галереей работ, админ‑панелью для владельца и группой для уведомлений. Отслеживание источников лидов: реклама или органический трафик.',
      link: 'https://t.me/teplo_nabalkone_bot'
    },
    { 
      title: 'Grip&Go', 
      client: 'Telegram Mini App', 
      desc: 'Магазин скальной обуви и снаряжения с корзиной, рейтингом пользователей и историей заказов. Бонусная система скидок для постоянных клиентов.',
      link: 'https://t.me/gripandgo_bot'
    },
    { 
      title: 'TurboMMR (Dota 2)', 
      client: 'Telegram Mini App', 
      desc: 'Приложение для отслеживания рейтинга в турбо‑режиме Dota 2. Собственная система рейтинга и статистика для игроков.',
      link: 'https://t.me/d2turbommr_bot'
    },
    { 
      title: 'SPAYKA49', 
      client: 'Telegram Бот', 
      desc: 'Бот для записи в коворкинг для тату‑мастеров. Справочная информация, связь с админом, галерея мест. Умная система слотов с выбором даты, времени и продолжительности сессии.',
      link: 'https://t.me/SPAYKA49INK_bot'
    },
    { 
      title: 'krakhotkina.ru', 
      client: 'Сайт', 
      desc: 'Сайт CEO кадровой компании «МАКПЕРСОНАЛ». Помогает пользователям записаться на консультацию или приобрести услугу для работы с профессионалом.',
      link: 'https://krakhotkina.ru'
    },
    { 
      title: 'makpersonal.ru', 
      client: 'Сайт', 
      desc: 'Платформа для заявок работодателям и соискателям. Помощь с трудоустройством и решение кадровых проблем через удобный интерфейс.',
      link: 'https://makpersonal.ru'
    },
    { 
      title: 'RENTAL-FORKLIFT', 
      client: 'Telegram Mini App', 
      desc: 'Приложение для аренды складской техники. В боте можно сдать свою технику в аренду. Подключен эквайринг для оплаты пользовательского абонемента.',
      link: 'https://t.me/Rent_forklift_bot'
    },
    { 
      title: 'lencapitals.ru', 
      client: 'Сайт', 
      desc: 'Сервис Оплаты зарубежных инвойсов в любую юрисдикцию',
      link: 'https://lencapitals.ru'
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-neon-pink selection:text-white pt-20 relative overflow-hidden">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-0 left-0 right-0 flex items-center justify-center z-0 pointer-events-none -mt-20 md:-mt-32"
          >
            <span className="text-[5rem] md:text-[20rem] font-black text-white leading-none tracking-tighter select-none">
              CASES
            </span>
          </motion.div>

        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative z-10 text-4xl md:text-8xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-emerald-400 to-neon-blue uppercase tracking-tighter drop-shadow-[0_0_35px_rgba(0,255,0,0.4)] text-center py-2"
        >
          Кейсы
        </motion.h1>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 p-6 rounded-lg border border-white/10 hover:border-neon-green transition-colors backdrop-blur-sm flex flex-col h-full"
            >
              <h3 className="text-xl font-bold mb-1 text-neon-pink">{c.title}</h3>
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider font-bold">{c.client}</p>
              <p className="text-gray-300 mb-6 flex-grow">{c.desc}</p>
              
              <a 
                href={c.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-center w-full py-3 rounded border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all font-bold uppercase text-sm tracking-wider"
              >
                Открыть проект →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
