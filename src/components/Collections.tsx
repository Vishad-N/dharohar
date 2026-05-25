import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 1,
    title: "Bridal Jewellery",
    image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=2670&auto=format&fit=crop",
    className: "col-span-1 md:col-span-8 row-span-2",
  },
  {
    id: 2,
    title: "Heritage Gold",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2670&auto=format&fit=crop",
    className: "col-span-1 md:col-span-4 row-span-1",
  },
  {
    id: 3,
    title: "Diamond Edit",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2670&auto=format&fit=crop",
    className: "col-span-1 md:col-span-4 row-span-1",
  }
];

export default function Collections() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold-500 tracking-[0.2em] text-xs font-medium uppercase mb-4 block"
        >
          Curated For Royalty
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-serif text-matte-black"
        >
          Featured Collections
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[300px]">
        {collections.map((collection, index) => (
          <motion.div
            key={collection.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className={`group relative overflow-hidden rounded-[24px] cursor-pointer ${collection.className}`}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700 z-10" />
            <img 
              src={collection.image} 
              alt={collection.title}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex justify-between items-end">
              <h3 className="text-ivory font-serif text-3xl font-medium tracking-wide">
                {collection.title}
              </h3>
              <div className="w-12 h-12 rounded-full bg-ivory/20 backdrop-blur-md flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <ArrowRight className="text-ivory w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
