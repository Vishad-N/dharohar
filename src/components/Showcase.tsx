import { motion } from 'motion/react';
import { Heart, ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Royal Polki Choker",
    price: "₹ 2,45,000",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Kundan Heritage Bangle",
    price: "₹ 1,20,000",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Nizam Pearl Drop Earrings",
    price: "₹ 85,000",
    image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Temple Gold Necklace",
    price: "₹ 3,15,000",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function Showcase() {
  return (
    <section className="py-32 px-6 bg-beige">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-500 tracking-[0.2em] text-xs font-medium uppercase mb-4 block"
            >
              Latest Arrivals
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-serif text-matte-black"
            >
              Signature Pieces
            </motion.h2>
          </div>
          <motion.button 
             initial={{ opacity: 0, x: -10 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-sm tracking-widest uppercase border-b border-gold-500 pb-1 hover:text-gold-500 transition-colors"
          >
            View All
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden mb-6 bg-ivory">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Actions */}
                <div className="absolute top-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-10 h-10 bg-ivory rounded-full flex items-center justify-center shadow-lg hover:text-gold-500 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <button className="w-full py-3 bg-ivory/90 backdrop-blur-md rounded-xl text-xs tracking-widest uppercase font-medium hover:bg-gold-500 hover:text-ivory transition-colors flex items-center justify-center gap-2">
                    <ShoppingBag className="w-4 h-4" /> Add To Cart
                  </button>
                </div>
                {/* Subtle gradient to ensure button visibility */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="text-center px-4">
                <h3 className="font-serif text-xl text-matte-black mb-2">{product.name}</h3>
                <p className="text-gold-600 font-medium tracking-wide">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
