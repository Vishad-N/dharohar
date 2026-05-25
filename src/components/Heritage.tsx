import { motion } from 'motion/react';

export default function Heritage() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        <div className="w-full lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="rounded-[32px] overflow-hidden aspect-[4/5] relative z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2670&auto=format&fit=crop" 
              alt="Artisan crafting jewellery" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Decorative motif element */}
          <motion.div 
            initial={{ opacity: 0, rotate: -45 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute -bottom-10 -right-10 w-40 h-40 border border-gold-400 rounded-full flex items-center justify-center p-2 opacity-50 z-0"
          >
             <div className="w-full h-full border border-gold-400 rounded-full" />
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center">
           <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-500 tracking-[0.2em] text-xs font-medium uppercase mb-6 block"
            >
              Our Story
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-serif text-matte-black mb-10 leading-tight"
            >
              The Legacy Of <br />
              <span className="italic text-gold-500">Royal Panjab</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-matte-black/70 font-light leading-relaxed"
            >
              <p>
                Inspired by the profound elegance of royal heritage, Dharohar brings forth a curation of timeless masterworks. Each piece is a testament to generations of artisanal mastery, born from the sacred hearths of ancient gold crafters.
              </p>
              <p>
                Our philosophy transcends mere ornamentation. We believe in preserving the meticulous details of Indian artistry—the delicate filigree, the heavy unyielding gold, and the divine symmetry that adorned the royalty of yesteryears.
              </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6 }}
               className="mt-12"
            >
               <img 
                 src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=2670&auto=format&fit=crop" 
                 alt="Signature" 
                 className="w-32 h-auto opacity-30 grayscale mix-blend-multiply"
                 style={{ clipPath: 'inset(40% 0 40% 0)' }}
               />
               <p className="mt-4 text-xs tracking-widest uppercase text-matte-black font-medium">
                 Master Jewellers
               </p>
            </motion.div>
        </div>

      </div>
    </section>
  );
}
