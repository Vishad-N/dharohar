import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const galleryImages = [
  "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1603561596112-0a132b757442?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=1000&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section className="py-32 px-6 max-w-[1600px] mx-auto bg-ivory">
      <div className="text-center mb-16">
         <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 tracking-[0.2em] text-xs font-medium uppercase mb-4 block flex justify-center items-center gap-2"
          >
            <Instagram className="w-4 h-4" /> @DharoharJewellers
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-matte-black"
          >
            Join Our Legacy
          </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {galleryImages.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="group relative aspect-square rounded-[24px] overflow-hidden cursor-pointer"
          >
             <div className="absolute inset-0 bg-gold-600/60 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="absolute inset-0 bg-matte-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <Instagram className="text-ivory w-8 h-8 scale-50 group-hover:scale-100 transition-transform duration-500" />
             </div>
             <img 
               src={src} 
               alt={`Instagram gallery ${idx}`} 
               className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
             />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
