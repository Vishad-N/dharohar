import { motion } from 'motion/react';

export default function Appointment() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="bg-ivory rounded-[32px] p-10 md:p-20 relative overflow-hidden shadow-2xl border border-beige"
        >
          {/* Subtle logo watermark in bg */}
          <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
             <div className="w-96 h-96 border-[40px] border-matte-black rounded-full" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold-500 tracking-[0.2em] text-xs font-medium uppercase mb-6 block">
                Bespoke Services
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-matte-black mb-8 leading-tight">
                Schedule a <br /> Private Viewing
              </h2>
              <p className="text-matte-black/70 font-light mb-12">
                Allow our master curators to guide you through our most exclusive collections in a private setting. Experience personal luxury tailored entirely to your desires.
              </p>

              <div className="space-y-6 text-sm text-matte-black/80 font-medium">
                <p className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-gold-400 block" /> Virtual Consultations
                </p>
                <p className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-gold-400 block" /> In-Boutique Appointments
                </p>
                <p className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-gold-400 block" /> Bridal Trousseau Styling
                </p>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b border-matte-black/20 pb-4 outline-none focus:border-gold-500 transition-colors font-light placeholder:text-matte-black/40"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-matte-black/20 pb-4 outline-none focus:border-gold-500 transition-colors font-light placeholder:text-matte-black/40"
                />
              </div>
              <div>
                <select className="w-full bg-transparent border-b border-matte-black/20 pb-4 outline-none focus:border-gold-500 transition-colors font-light text-matte-black/60 appearance-none">
                  <option value="">Select Service</option>
                  <option value="bridal">Bridal Viewing</option>
                  <option value="bespoke">Bespoke Creation</option>
                  <option value="general">General Appointment</option>
                </select>
              </div>
              <button 
                type="button" 
                className="w-full py-5 bg-matte-black text-ivory text-sm tracking-widest uppercase mt-6 hover:bg-gold-500 transition-colors rounded-xl font-medium"
              >
                Request Appointment
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
