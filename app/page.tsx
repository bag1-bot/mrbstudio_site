"use client";

import Header from './components/Header';
import Hero from './components/Hero';
import CharacterCard from './components/CharacterCard';
import Footer from './components/Footer';
import { Fragment } from 'react';

const workflowSteps = [
  {
    name: "01. Брифинг",
    tagline: "Понимание задачи — ключ к успеху.",
    description: "На этом этапе мы детально обсуждаем ваш проект, цели и целевую аудиторию. Мы анализируем конкурентов и формируем техническое задание, чтобы убедиться, что мы движемся в правильном направлении с самого начала.",
    quote: "Мы не просто слушаем, мы слышим ваши потребности.",
    themeColor: "neon-blue",
    align: "left",
    imageSrc: "/mrbstudio_site/img/1.gif"
  },
  {
    name: "02. Прототип",
    tagline: "Структура прежде всего.",
    description: "Создаем каркас будущего приложения или сайта. Прорабатываем UX (пользовательский опыт), чтобы интерфейс был интуитивно понятным и удобным. Вы увидите логику работы продукта еще до начала дизайна.",
    quote: "Удобство пользователя начинается с продуманной структуры.",
    themeColor: "neon-pink",
    align: "right",
    imageSrc: "/mrbstudio_site/img/2.gif"
  },
  {
    name: "03. UI Дизайн",
    tagline: "Визуальная магия.",
    description: "Наполняем прототип жизнью. Подбираем цветовую палитру, шрифты и графические элементы. Создаем уникальный стиль, который выделит ваш бренд среди конкурентов. Neon, Glassmorphism или минимализм — выбор за вами.",
    quote: "Дизайн — это не то, как это выглядит, а то, как это работает.",
    themeColor: "neon-green",
    align: "left",
    imageSrc: "/mrbstudio_site/img/3.gif"
  },
  {
    name: "04. Кодинг",
    tagline: "Превращаем идеи в код.",
    description: "Самый ответственный этап. Наши разработчики пишут чистый, оптимизированный и масштабируемый код. Мы используем современные технологии (Next.js, Python, React), чтобы ваш продукт работал быстро и надежно.",
    quote: "Качественный код — фундамент стабильного продукта.",
    themeColor: "neon-purple",
    align: "right",
    imageSrc: "/mrbstudio_site/img/4.gif"
  },
  {
    name: "05. Тесты",
    tagline: "Никаких багов.",
    description: "Тщательно проверяем работоспособность на всех устройствах и разрешениях. Проводим нагрузочное тестирование и устраняем возможные ошибки до того, как их увидят пользователи.",
    quote: "Совершенство в деталях.",
    themeColor: "neon-orange",
    align: "left",
    imageSrc: "/mrbstudio_site/img/5.gif"
  },
  {
    name: "06. Релиз",
    tagline: "Полет нормальный.",
    description: "Разворачиваем проект на боевых серверах, настраиваем домены и SSL. Передаем вам все доступы и обучаем управлению. Но на этом мы не прощаемся — обеспечиваем поддержку и развитие продукта.",
    quote: "Ваш успех — наша главная награда.",
    themeColor: "rockstar-yellow",
    align: "right",
    imageSrc: "/mrbstudio_site/img/6.gif"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-pink-500 selection:text-white">
      <Header />
      <Hero />
      
      <div className="relative z-10 bg-gradient-to-b from-black via-gray-900 to-black pb-20">
        <div className="max-w-7xl mx-auto space-y-24 pt-20">
          {workflowSteps.map((step, index) => (
            <Fragment key={index}>
               <CharacterCard 
                 name={step.name}
                 tagline={step.tagline}
                 description={step.description}
                 quote={step.quote}
                 themeColor={step.themeColor}
                 align={step.align as 'left' | 'right'}
                 imageSrc={step.imageSrc}
               />
               {/* Separator */}
               {index < workflowSteps.length - 1 && (
                 <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-10" />
               )}
            </Fragment>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
