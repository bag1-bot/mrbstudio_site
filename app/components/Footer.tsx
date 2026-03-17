import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black/80 py-16 border-t border-white/10 relative z-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="flex flex-col items-center gap-6 mb-10">
                    <div className="flex justify-center items-center space-x-4">
                        <span className="h-px w-12 bg-white/20" />
                        <div className="text-3xl font-black tracking-tighter neon-gradient-text neon-gradient-animate drop-shadow-[0_0_18px_rgba(255,0,255,0.35)]">
                            MRB
                        </div>
                        <span className="h-px w-12 bg-white/20" />
                    </div>

                    <div className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none neon-gradient-text neon-gradient-animate drop-shadow-[0_0_28px_rgba(0,255,255,0.25)]">
                        MRB STUDIO
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 mb-8 text-gray-400 text-sm">
                     <a href="tel:+79046185496" className="hover:text-neon-pink transition-colors">+7(904)618-54-96</a>
                     <a href="mailto:mrbstudio@bk.ru" className="hover:text-neon-pink transition-colors">mrbstudio@bk.ru</a>
                </div>

                <p className="text-gray-500 text-xs mb-4">
                    MRB STUDIO. Все права защищены.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 text-[10px] text-gray-600 uppercase tracking-wider">
                    <Link href="/privacy-policy" className="hover:text-gray-400">Политика конфиденциальности</Link>
                    <Link href="/cookie-policy" className="hover:text-gray-400">Политика Cookie</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
