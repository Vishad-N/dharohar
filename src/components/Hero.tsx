import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1603561596112-0a132b757442?q=80&w=2670&auto=format&fit=crop" 
          alt="Royal Indian Heritage Jewellery" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 mix-blend-multiply" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 mt-16 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-gold-300 tracking-[0.2em] text-xs md:text-sm font-medium uppercase mb-6 block">
            Royal Indian Craftsmanship
          </span>
          <h1 className="text-ivory font-serif text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-tight">
            Wear The <br /> Legacy
          </h1>
          <p className="text-ivory/80 max-w-lg mx-auto text-sm md:text-base mb-10 font-light">
            Discover a timeless collection of handcrafted masterpieces inspired by the regal elegance of Indian heritage. Where every piece tells a story of artistry and grace.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button className="px-8 py-4 bg-gold-500 text-ivory text-sm tracking-widest uppercase hover:bg-gold-600 transition-colors rounded-2xl">
            Explore Collections
          </button>
          <button className="px-8 py-4 bg-transparent border border-ivory text-ivory text-sm tracking-widest uppercase hover:bg-ivory hover:text-matte-black transition-colors rounded-2xl backdrop-blur-sm">
            Shop Bridal
          </button>
        </motion.div>
      </div>

      {/* Decorative Gold Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.span 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-gold-400 to-transparent block"
        />
      </div>
    </section>
  );
}
