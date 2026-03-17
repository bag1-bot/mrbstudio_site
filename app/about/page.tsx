"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiGo, SiPhp, SiMysql, 
  SiGnubash, SiHtml5, SiVuedotjs, SiDocker, SiKubernetes, SiRedis, SiPostgresql, 
  SiMongodb, SiPrometheus, SiGrafana, SiLinux, SiFastapi, SiFlask, 
  SiDjango, SiRabbitmq, SiApachekafka, SiGit, SiGitlab, SiSelenium, SiNginx 
} from 'react-icons/si';

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const languages = [
    { icon: SiPython, name: 'Python', color: '#3776AB' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiCplusplus, name: 'C++', color: '#00599C' },
    { icon: SiGo, name: 'Go', color: '#00ADD8' },
    { icon: SiPhp, name: 'PHP', color: '#777BB4' },
    { icon: SiMysql, name: 'SQL', color: '#4479A1' },
    { icon: SiGnubash, name: 'Bash', color: '#4EAA25' },
    { icon: SiHtml5, name: 'HTML', color: '#E34F26' },
    { icon: SiVuedotjs, name: 'Vue.js', color: '#4FC08D' },
  ];

  const technologies = [
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
    { icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5' },
    { icon: SiRedis, name: 'Redis', color: '#DC382D' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiPrometheus, name: 'Prometheus', color: '#E6522C' },
    { icon: SiGrafana, name: 'Grafana', color: '#F46800' },
    { icon: SiLinux, name: 'Linux', color: '#FCC624' },
    { icon: SiFastapi, name: 'FastAPI', color: '#009688' },
    { icon: SiFlask, name: 'Flask', color: '#000000' },
    { icon: SiDjango, name: 'Django', color: '#092E20' },
    { icon: SiRabbitmq, name: 'RabbitMQ', color: '#FF6600' },
    { icon: SiApachekafka, name: 'Kafka', color: '#231F20' },
    { icon: SiGit, name: 'Git', color: '#F05032' },
    { icon: SiGitlab, name: 'GitLab', color: '#FC6D26' },
    { icon: SiSelenium, name: 'Selenium', color: '#43B02A' },
    { icon: SiNginx, name: 'Nginx', color: '#009639' },
  ];

  return (
    <main className="min-h-screen bg-transparent text-white font-sans selection:bg-neon-pink selection:text-white pt-20">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        {/* Intro Section */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center max-w-7xl mx-auto px-4">
          {/* Animated Background Text */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
          >
            <span className="text-[5rem] md:text-[20rem] font-black text-white leading-none tracking-tighter select-none">
              MRB
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full"
          >
            {/* Title with Gradient and Glow */}
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="text-5xl md:text-9xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue uppercase tracking-tighter drop-shadow-[0_0_35px_rgba(255,0,255,0.4)]"
            >
              MRB STUDIO
            </motion.h1>

            {/* Content Card with Glassmorphism */}
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-neon-pink rounded-full blur-[80px] opacity-40"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-neon-blue rounded-full blur-[80px] opacity-40"></div>

              {/* Animated Border Container */}
              <div className="relative rounded-3xl p-[3px] overflow-hidden group">
                {/* Moving Gradient Border - Glow Layer */}
                <div
                  className="absolute inset-[-100%] hidden md:block"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0%, #ff00ff 15%, transparent 30%, transparent 50%, #00ffff 65%, transparent 80%)',
                    filter: 'blur(20px)',
                  }}
                />
                
                {/* Moving Gradient Border - Sharp Layer */}
                <div
                  className="absolute inset-[-100%]"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0%, #ff00ff 15%, transparent 30%, transparent 50%, #00ffff 65%, transparent 80%)',
                  }}
                />
                
                {/* Inner Content Card */}
                <motion.div 
                  className="bg-black/70 rounded-3xl p-8 md:p-12 text-left relative z-10 h-full"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.005 }}
                  transition={{ duration: 0.3 }}
                >
                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[200%] w-full -translate-y-full group-hover:translate-y-full transition-transform duration-[2s] ease-in-out"></div>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                  {/* Left Column: Headline */}
                  <div className="md:w-1/3">
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                      5 Лет <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400">
                        Инноваций
                      </span>
                    </h2>
                    <div className="h-1 w-20 bg-neon-pink rounded-full mb-6"></div>
                    <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">
                      Опыт • Качество • Скорость
                    </p>
                  </div>

                  {/* Right Column: Description */}
                  <div className="md:w-2/3 space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                    <p>
                      Мы — команда увлеченных профессионалов, которая превращает сложные бизнес-задачи в элегантные цифровые решения. За 5 лет мы прошли путь от небольших скриптов до <span className="text-white font-semibold">масштабных корпоративных систем</span>.
                    </p>
                    <p>
                      Наша миссия — <span className="text-neon-blue font-bold">автоматизировать ваш бизнес</span>, освобождая время для главного. Мы создаем не просто сайты или ботов, а инструменты, которые приносят прибыль.
                    </p>
                    <div className="pt-4 border-t border-white/10 mt-6">
                      <p className="italic text-white/80">
                        "Мы верим, что технологии должны работать на вас, а не наоборот. Доверьте нам техническую часть, и мы создадим продукт, которым вы будете гордиться."
                      </p>
                    </div>
                  </div>
                </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Languages Section */}
        <section>
          <motion.h3 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400 uppercase tracking-widest pl-4 border-l-4 border-neon-green"
          >
            Языки Программирования
          </motion.h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, borderColor: lang.color, boxShadow: `0 0 15px ${lang.color}40` }}
                className="bg-gray-900/60 p-6 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-4 transition-all duration-300 group cursor-default"
              >
                <lang.icon 
                  className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" 
                  style={{ color: lang.color, filter: `drop-shadow(0 0 10px ${lang.color}60)` }}
                />
                <span className="font-bold text-gray-300 group-hover:text-white transition-colors">{lang.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section>
          <motion.h3 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-rockstar-yellow uppercase tracking-widest text-right pr-4 border-r-4 border-neon-orange"
          >
            Технологии и Инструменты
          </motion.h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, borderColor: tech.color, boxShadow: `0 0 15px ${tech.color}40` }}
                className="bg-gray-900/60 p-6 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-4 transition-all duration-300 group cursor-default"
              >
                <tech.icon 
                  className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" 
                  style={{ color: tech.color, filter: `drop-shadow(0 0 8px ${tech.color}50)` }}
                />
                <span className="font-medium text-sm text-gray-400 group-hover:text-white transition-colors text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
