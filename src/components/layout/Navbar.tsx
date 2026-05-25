import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Collections', path: '/collections' },
    { name: 'Bridal', path: '/collections?category=bridal' },
    { name: 'Heritage', path: '/collections?category=heritage' },
    { name: 'About House', path: '/about' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled || !isHome ? 'glass-nav py-4' : 'bg-transparent py-6 text-brand-ivory'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2" 
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop Left Nav */}
        <nav className="hidden lg:flex gap-8 text-sm font-sans tracking-widest uppercase">
          {navLinks.slice(0, 2).map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`hover:text-brand-gold transition-colors ${!isScrolled && isHome ? 'text-brand-ivory opacity-90' : 'text-brand-dark/80'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className={`font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase whitespace-nowrap ${
            !isScrolled && isHome ? 'text-brand-ivory' : 'text-brand-dark'
          }`}>
            Dharohar
          </span>
          <span className={`font-sans text-[0.6rem] tracking-[0.4em] uppercase mt-1 ${
            !isScrolled && isHome ? 'text-brand-ivory/80' : 'text-brand-dark/60'
          }`}>
            Jewellers
          </span>
        </Link>

        {/* Desktop Right Nav & Icons */}
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex gap-8 text-sm font-sans tracking-widest uppercase mr-4">
            {navLinks.slice(2).map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`hover:text-brand-gold transition-colors ${!isScrolled && isHome ? 'text-brand-ivory opacity-90' : 'text-brand-dark/80'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className={`flex items-center gap-5 ${
            !isScrolled && isHome ? 'text-brand-ivory' : 'text-brand-dark'
          }`}>
            <button className="hover:text-brand-gold transition-colors">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button className="hover:text-brand-gold transition-colors hidden md:block">
              <User className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <Link to="/checkout" className="hover:text-brand-gold transition-colors relative">
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-2 w-4 h-4 bg-brand-gold text-brand-dark text-[10px] flex items-center justify-center rounded-full font-medium">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-brand-ivory z-50 text-brand-dark lg:hidden"
          >
            <div className="p-6 flex justify-between items-center border-b border-brand-dark/10">
              <div className="flex flex-col items-start">
                <span className="font-serif text-xl tracking-[0.2em] uppercase">Dharohar</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 flex flex-col gap-8 text-xl font-serif tracking-widest mt-10">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="hover:text-brand-gold transition-colors border-b border-brand-dark/5 pb-4">
                  {link.name}
                </Link>
              ))}
              <div className="mt-8 flex gap-6">
                <User className="w-6 h-6" strokeWidth={1} />
                <span className="font-sans text-sm items-center flex uppercase tracking-widest">Sign In</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
