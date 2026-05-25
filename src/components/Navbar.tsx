import { motion } from 'motion/react';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'bg-ivory/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <a href="#" className="hover:text-gold-500 transition-colors">COLLECTIONS</a>
          <a href="#" className="hover:text-gold-500 transition-colors">HERITAGE</a>
        </div>

        <div className="text-center flex-1 md:flex-none">
          <a href="#" className="font-serif text-3xl tracking-widest uppercase flex flex-col items-center">
            <span>Dharohar</span>
            <span className="text-[0.5rem] tracking-[0.3em] font-sans mt-1 text-gold-500 font-medium">Wear The Legacy</span>
          </a>
        </div>

        <div className="flex items-center gap-6">
          <button className="hover:text-gold-500 transition-colors hidden md:block">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-gold-500 transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button className="md:hidden hover:text-gold-500 transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
