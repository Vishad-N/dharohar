import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { CATEGORIES, FEATURED_PRODUCTS } from '../data';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=2000&q=80" 
            alt="Luxury Bridal Jewellery" 
            className="w-full h-full object-cover object-center scale-105 origin-center animate-[subtleZoom_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-brand-dark/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-brand-dark/30"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-brand-gold font-serif italic text-sm mb-3 block">
              High Jewellery Collection
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-brand-ivory font-serif mb-8 leading-tight">
              Timeless Elegance, <br/>
              <span className="italic font-light">Crafted Forever.</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <Button to="/collections" variant="primary" className="w-full sm:w-auto">
              Explore Collection
            </Button>
            <Button to="/collections?category=bridal" variant="primary" className="w-full sm:w-auto mt-4 sm:mt-0">
              Shop Bridal
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Legacy Snippet */}
      <section className="py-32 px-6 bg-brand-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-sans mb-8 block">The Maison</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-dark leading-relaxed mb-10">
            A legacy of master craftsmen breathing life into precious stones and eternal gold.
          </h2>
          <Link to="/about" className="inline-flex items-center gap-3 text-brand-dark uppercase tracking-widest text-sm hover:text-brand-gold transition-colors pb-1 border-b border-brand-dark hover:border-brand-gold">
            Discover Our Heritage <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Categories / Collections Grid */}
      <section className="py-24 px-6 lg:px-12 bg-brand-beige relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-serif text-brand-dark mb-4">Curated Collections</h2>
              <p className="text-brand-dark/60 font-light max-w-md">Experience the artistic soul of Indian craftsmanship.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative">
            {CATEGORIES.slice(0, 3).map((category, index) => (
              <Link 
                key={category.id} 
                to={`/collections?category=${category.id}`}
                className={`editorial-frame group cursor-pointer block ${index === 0 ? 'md:row-span-2 min-h-[60vh]' : 'min-h-[40vh]'}`}
              >
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-brand-dark/20 transition-colors duration-500"></div>
                <div className="frame-label relative z-10">
                  {category.name}<br/>
                  <span style={{ color: '#999', fontSize: '9px' }}>{category.description}</span>
                </div>
              </Link>
            ))}
            
            <div className="floating-detail hidden md:flex">
              <span>“Every jewel is a poem written in gold and stone, passed through generations.”</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 px-6 lg:px-12 bg-brand-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-sans mb-4 block">Iconic Creations</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">Featured Pieces</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {FEATURED_PRODUCTS.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-white">
                  {product.isNew && (
                    <span className="absolute top-4 left-4 z-20 text-[10px] uppercase tracking-widest bg-brand-dark text-white px-3 py-1">
                      New
                    </span>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 group-hover:opacity-0"
                  />
                  <img 
                    src={product.images[0]} 
                    alt={`${product.name} alternate`} 
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-700 group-hover:opacity-100 scale-105"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg text-brand-dark mb-2">{product.name}</h3>
                  <p className="font-sans text-sm tracking-wider text-brand-dark/60">₹ {product.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <Button variant="outline" to="/collections">View All Pieces</Button>
          </div>
        </div>
      </section>

      {/* Full Width Parallax / Story */}
      <section className="relative h-[80vh] flex items-center justify-center bg-brand-dark overflow-hidden">
         <img 
            src="https://images.unsplash.com/photo-1605100804763-247f66126e28?w=2000&q=80" 
            alt="Craftsmanship" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="relative z-10 text-center max-w-3xl px-6">
            <h2 className="text-4xl md:text-6xl font-serif text-brand-ivory mb-8">Craftsmanship Beyond Compare</h2>
            <p className="text-brand-ivory/80 font-light text-lg mb-12 leading-relaxed">
              Every curve, every cut, every polish is a testament to hundreds of hours of meticulous labor by artisans whose skills have been refined over generations.
            </p>
            <Button variant="outline" className="border-brand-ivory text-brand-ivory hover:bg-brand-ivory hover:text-brand-dark">
              Explore Our Process
            </Button>
          </div>
      </section>
    </div>
  );
};
