import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FEATURED_PRODUCTS } from '../data';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { ChevronRight, Heart, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = FEATURED_PRODUCTS.find(p => p.id === id) || FEATURED_PRODUCTS[0];
  const [activeImage, setActiveImage] = useState(product.images[0] || product.image);

  useEffect(() => {
    setActiveImage(product.images[0] || product.image);
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-brand-dark/50 mb-12">
        <Link to="/" className="hover:text-brand-dark transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/collections" className="hover:text-brand-dark transition-colors">Collections</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-brand-dark">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Images Column */}
        <div className="flex flex-col-reverse md:flex-row gap-6 h-[80vh] sticky top-32">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto md:w-24 shrink-0 no-scrollbar">
            {[product.image, ...product.images].map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`flex-shrink-0 aspect-[3/4] w-20 md:w-full overflow-hidden border transition-all ${
                  activeImage === img ? 'border-brand-dark opacity-100' : 'border-transparent opacity-50 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`${product.name} - view ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          
          {/* Main Image */}
          <div className="flex-grow bg-white overflow-hidden relative group cursor-zoom-in">
            <motion.img 
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={activeImage} 
              alt={product.name} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Details Column */}
        <div className="flex flex-col pt-4">
          <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-sans mb-4 block">
            {product.category}
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif text-brand-dark mb-6 leading-tight">
            {product.name}
          </h1>
          <p className="text-2xl font-sans tracking-wide text-brand-dark/80 mb-8">
            ₹ {product.price.toLocaleString()}
          </p>

          <p className="text-brand-dark/70 font-light leading-relaxed mb-12">
            {product.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 mb-16">
            <Button className="w-full">Add To Cart</Button>
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1">Book Consultation</Button>
              <button className="w-14 items-center justify-center border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white transition-colors flex shrink-0">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Details Accordion style lists */}
          <div className="border-t border-brand-dark/10 divide-y divide-brand-dark/10">
            <div className="py-6">
              <h3 className="uppercase tracking-widest text-sm font-sans mb-4 text-brand-dark">Product Details</h3>
              <div className="grid grid-cols-2 gap-y-4 text-sm font-light text-brand-dark/70">
                <div><span className="text-brand-dark font-medium block mb-1">Material</span> {product.details.material}</div>
                <div><span className="text-brand-dark font-medium block mb-1">Purity</span> {product.details.purity}</div>
                <div><span className="text-brand-dark font-medium block mb-1">Weight</span> {product.details.weight}</div>
                <div><span className="text-brand-dark font-medium block mb-1">Stones</span> {product.details.stones}</div>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-4 pt-12 mt-12 border-t border-brand-dark/10">
            <div className="flex flex-col items-center text-center gap-3">
              <ShieldCheck className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-widest font-sans text-brand-dark/70">Certified<br/>Authenticity</span>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <Truck className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-widest font-sans text-brand-dark/70">Insured<br/>Shipping</span>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <RefreshCw className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-widest font-sans text-brand-dark/70">15-Day<br/>Returns</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
