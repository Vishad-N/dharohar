import { motion } from 'motion/react';

export default function Craftsmanship() {
  return (
    <section className="py-32 bg-matte-black text-ivory overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2670&auto=format&fit=crop')] bg-cover opacity-5 mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-400 tracking-[0.2em] text-xs font-medium uppercase mb-4 block"
          >
            The Atelier
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif mb-8 leading-tight"
          >
            Symphony of Art <br/> & Devotion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-ivory/60 font-light"
          >
            Explore the hallowed halls of our atelier where raw gold meets the soul of an artisan. Watch how a mere sketch evolves into a royal heirloom.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "The Vision",
              image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=2670&auto=format&fit=crop",
              desc: "Every creation begins with a sketch inspired by ancient motifs and architecture."
            },
            {
              title: "The Forging",
              image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=2670&auto=format&fit=crop",
              desc: "Molding pure gold through traditional fire, passion, and unparalleled precision.",
              offset: true
            },
            {
              title: "The Polishing",
              image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2670&auto=format&fit=crop",
              desc: "Meticulous detailing sets the stones alive with a fire that rivals the stars."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className={`flex flex-col ${item.offset ? 'md:mt-16' : ''}`}
            >
              <div className="rounded-[24px] overflow-hidden aspect-[3/4] mb-8 relative group">
                <div className="absolute inset-0 bg-gold-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="text-center px-4">
                <span className="text-gold-400 font-serif text-2xl mb-4 block">{item.title}</span>
                <p className="text-ivory/60 font-light text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
