import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-matte-black text-ivory py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col items-center justify-center mb-24 cursor-pointer">
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="w-24 h-24 rounded-full border border-gold-500/30 flex items-center justify-center mb-6"
          >
             <h2 className="font-serif text-3xl text-gold-400">D</h2>
          </motion.div>
          <span className="font-serif text-3xl tracking-widest uppercase">Dharohar</span>
          <span className="text-[0.6rem] tracking-[0.4em] font-sans mt-3 text-gold-500 font-medium">Wear The Legacy</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-t border-b border-ivory/10 py-16">
          <div className="md:col-span-1">
            <h4 className="font-serif text-xl mb-6 text-gold-400">Our Boutiques</h4>
            <ul className="space-y-4 text-ivory/60 font-light text-sm">
              <li>New Delhi, India</li>
              <li>Mumbai, India</li>
              <li>Dubai, UAE</li>
              <li>London, UK</li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-serif text-xl mb-6 text-gold-400">Explore</h4>
            <ul className="space-y-4 text-ivory/60 font-light text-sm">
              <li className="hover:text-gold-500 transition-colors cursor-pointer">Collections</li>
              <li className="hover:text-gold-500 transition-colors cursor-pointer">High Jewellery</li>
              <li className="hover:text-gold-500 transition-colors cursor-pointer">Bridal Trousseau</li>
              <li className="hover:text-gold-500 transition-colors cursor-pointer">The Heritage</li>
              <li className="hover:text-gold-500 transition-colors cursor-pointer">Appointment</li>
            </ul>
          </div>

          <div className="md:col-span-2">
             <h4 className="font-serif text-xl mb-6 text-gold-400">The Insider</h4>
             <p className="text-ivory/60 font-light text-sm mb-6 max-w-sm">
               Subscribe to receive exclusive access to our newest creations, styling events, and the stories behind the mastery.
             </p>
             <div className="flex border-b border-ivory/20 pb-2">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="bg-transparent outline-none flex-1 font-light text-sm text-ivory placeholder:text-ivory/40"
               />
               <button className="text-sm tracking-widest uppercase text-gold-500 font-medium hover:text-ivory transition-colors">
                 Subscribe
               </button>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-ivory/40 font-light tracking-wide gap-4">
          <p>&copy; {new Date().getFullYear()} Dharohar Jewellers. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Pinterest</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Facebook</a>
          </div>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-ivory transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-ivory transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
