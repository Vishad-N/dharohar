import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-ivory pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col items-start mb-6">
              <span className="font-serif text-2xl tracking-[0.2em] uppercase text-brand-gold">
                Dharohar
              </span>
              <span className="font-sans text-[0.6rem] tracking-[0.4em] uppercase text-brand-ivory/60 mt-1">
                Jewellers
              </span>
            </Link>
            <p className="text-brand-ivory/70 text-sm leading-relaxed mb-6 font-light">
              Crafting timeless luxury and heritage elegance for the modern connoisseur.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-brand-ivory/20 rounded-full flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-brand-ivory/20 rounded-full flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-brand-ivory/20 rounded-full flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-serif text-lg tracking-wider mb-6 text-brand-gold">Collections</h4>
            <ul className="space-y-4 text-sm font-sans tracking-wide text-brand-ivory/70">
              <li><Link to="/collections" className="hover:text-brand-ivory transition-colors">Bridal Heirloom</Link></li>
              <li><Link to="/collections" className="hover:text-brand-ivory transition-colors">High Jewellery</Link></li>
              <li><Link to="/collections" className="hover:text-brand-ivory transition-colors">Everyday Diamonds</Link></li>
              <li><Link to="/collections" className="hover:text-brand-ivory transition-colors">Temple Gold</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-serif text-lg tracking-wider mb-6 text-brand-gold">Maison</h4>
            <ul className="space-y-4 text-sm font-sans tracking-wide text-brand-ivory/70">
              <li><Link to="/about" className="hover:text-brand-ivory transition-colors">Our Legacy</Link></li>
              <li><Link to="/about" className="hover:text-brand-ivory transition-colors">Craftsmanship</Link></li>
              <li><Link to="/about" className="hover:text-brand-ivory transition-colors">Sustainability</Link></li>
              <li><Link to="/about" className="hover:text-brand-ivory transition-colors">Boutiques</Link></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="font-serif text-lg tracking-wider mb-6 text-brand-gold">The Inner Circle</h4>
            <p className="text-brand-ivory/70 text-sm leading-relaxed mb-6 font-light">
              Subscribe to receive updates on exclusive collections and private events.
            </p>
            <form className="flex border-b border-brand-ivory/20 pb-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent w-full text-sm outline-none placeholder:text-brand-ivory/40 tracking-widest"
              />
              <button className="text-xs uppercase tracking-widest hover:text-brand-gold transition-colors pl-4">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-brand-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-brand-ivory/40 font-sans uppercase">
          <p>&copy; {new Date().getFullYear()} Dharohar Jewellers. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-brand-ivory transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-brand-ivory transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
