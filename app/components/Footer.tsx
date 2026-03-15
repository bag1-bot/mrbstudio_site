import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10 relative z-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="flex justify-center items-center space-x-4 mb-8">
                    <span className="h-px w-12 bg-white/20"></span>
                    <div className="text-3xl font-bold text-white tracking-tighter">MRB</div>
                    <span className="h-px w-12 bg-white/20"></span>
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
