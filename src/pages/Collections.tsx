import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FEATURED_PRODUCTS, CATEGORIES } from '../data';
import { Filter, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export const Collections = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'all');

  const filteredProducts = activeCategory === 'all' 
    ? FEATURED_PRODUCTS 
    : FEATURED_PRODUCTS.filter(p => {
        const cat = CATEGORIES.find(c => c.id === activeCategory);
        return cat ? p.category === cat.name : true;
      });

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">Explore the Collections</h1>
        <p className="text-brand-dark/60 font-light">From high jewelry to everyday elegance, discover pieces that resonate with your spirit.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-brand-dark/10 pb-6 mb-12 gap-6">
        <div className="flex gap-8 overflow-x-auto w-full md:w-auto no-scrollbar py-2 text-sm uppercase tracking-widest font-sans">
          <button 
            className={`whitespace-nowrap transition-colors ${activeCategory === 'all' ? 'text-brand-dark border-b border-brand-dark pb-1' : 'text-brand-dark/40 hover:text-brand-dark'}`}
            onClick={() => setActiveCategory('all')}
          >
            All Pieces
          </button>
          {CATEGORIES.map(cat => (
            <button 
              key={cat.id}
              className={`whitespace-nowrap transition-colors ${activeCategory === cat.id ? 'text-brand-dark border-b border-brand-dark pb-1' : 'text-brand-dark/40 hover:text-brand-dark'}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-6 text-sm uppercase tracking-widest font-sans shrink-0 ml-auto w-full justify-between md:w-auto md:justify-end">
          <button className="flex items-center gap-2 text-brand-dark/70 hover:text-brand-dark transition-colors">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="flex items-center gap-2 text-brand-dark/70 hover:text-brand-dark transition-colors">
            Sort <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filteredProducts.map((product, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={product.id}
          >
            <Link to={`/product/${product.id}`} className="group cursor-pointer block">
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
                  src={product.images[0] || product.image} 
                  alt={`${product.name} alternate`} 
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-700 group-hover:opacity-100 scale-105"
                />
              </div>
              <div className="text-center">
                <span className="text-brand-gold uppercase tracking-widest text-[10px] font-sans mb-2 block">
                  {product.category}
                </span>
                <h3 className="font-serif text-xl text-brand-dark mb-2">{product.name}</h3>
                <p className="font-sans text-sm tracking-wider text-brand-dark/60">₹ {product.price.toLocaleString()}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
