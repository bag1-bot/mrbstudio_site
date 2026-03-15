"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type CharacterProps = {
  name: string;
  tagline: string;
  description: string;
  quote?: string;
  videoPlaceholder?: boolean;
  align?: 'left' | 'right';
  themeColor?: string; // e.g. 'pink', 'blue', 'orange'
  imageSrc?: string;
};

const CharacterCard = ({ name, tagline, description, quote, align = 'left', themeColor = 'neon-pink', imageSrc }: CharacterProps) => {
  const isLeft = align === 'left';
  
  const getGradient = (color: string) => {
    switch (color) {
      case 'neon-blue': return 'from-neon-blue to-cyan-500';
      case 'neon-orange': return 'from-neon-orange to-yellow-500';
      case 'neon-purple': return 'from-neon-purple to-indigo-500';
      case 'neon-green': return 'from-neon-green to-emerald-500';
      case 'neon-red': return 'from-neon-red to-rose-600';
      case 'rockstar-yellow': return 'from-rockstar-yellow to-neon-orange';
      default: return 'from-neon-pink to-rose-500';
    }
  };

  return (
    <div className={`flex flex-col md:flex-row items-center justify-between min-h-screen py-20 px-4 md:px-12 gap-12 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
      {/* Content Side */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 space-y-6 z-10"
      >
        <h2 className={`text-4xl md:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${getGradient(themeColor)} drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]`}>
          {name}
        </h2>
        
        <p className="text-lg md:text-2xl font-bold text-white/90 italic border-l-4 border-white pl-4">
          "{tagline}"
        </p>

        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-2xl">
          <p className="text-base md:text-xl text-gray-300 leading-relaxed font-light">
            {description}
          </p>
          
          {quote && (
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xl md:text-2xl font-serif text-white italic text-center">
                "{quote}"
              </p>
            </div>
          )}
        </div>
        
        <a 
          href="https://t.me/mrb_studio" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`mt-8 px-8 py-3 bg-gradient-to-r ${getGradient(themeColor)} text-black font-bold uppercase tracking-widest hover:opacity-90 transition-opacity rounded shadow-[0_0_15px_rgba(255,255,255,0.2)] transform hover:scale-105 duration-300 w-full md:w-auto inline-block text-center`}
        >
          Оставить заявку
        </a>
      </motion.div>

      {/* Visual Side */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: isLeft ? 5 : -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full md:w-1/2 h-[300px] md:h-[700px] relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-gray-900 border border-white/5 group"
      >
        <div className={`absolute inset-0 bg-gradient-to-tr ${getGradient(themeColor)} opacity-10 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
        
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            fill
            unoptimized={imageSrc.endsWith('.gif')} // Required for local GIFs to animate
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-white/20 flex items-center justify-center animate-pulse">
               <span className="text-white/30 font-bold text-xl uppercase tracking-widest">Image</span>
            </div>
          </div>
        )}

        {/* Overlay Details */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
             <span className="text-white/60 text-sm uppercase tracking-widest">Workflow Step</span>
        </div>
      </motion.div>
    </div>
  );
};

export default CharacterCard;
