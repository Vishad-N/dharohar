import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center bg-brand-dark overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1599643478524-fb66f7f2b9b4?w=2000&q=80" 
          alt="Legacy" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
        />
        <div className="relative z-10 text-center max-w-4xl px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold uppercase tracking-[0.4em] text-xs font-sans mb-6 block">Our Heritage</span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-ivory mb-6 leading-tight">
              A Century of Crafted Perfection
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 px-6 lg:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif text-brand-dark mb-10 leading-relaxed">
          Founded in the royal courts of Rajasthan, Dharohar Jewellers has been the custodian of heritage jewelry techniques for over four generations.
        </h2>
        <p className="font-sans font-light text-brand-dark/70 leading-loose text-lg mb-8">
          What began as a sacred commission for the royal family soon became an emblem of artistic excellence. Every piece we create is a testament to the unyielding dedication of our artisans, preserving techniques like Kundan, Meenakari, and Polki that have existed for centuries.
        </p>
        <p className="font-sans font-light text-brand-dark/70 leading-loose text-lg">
          Today, we blend this profound ancestral wisdom with contemporary aesthetics, creating not just jewelry, but timeless heirlooms designed to be passed down through generations.
        </p>
      </section>

      {/* Craftsmanship Highlights */}
      <section className="py-24 bg-brand-beige px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1620658428570-5b18cd4fe1fb?w=800&q=80" 
                alt="Artisan at work" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-sans mb-4 block">The Process</span>
              <h3 className="text-4xl font-serif text-brand-dark mb-8">Crafted by Hand, Guided by Soul</h3>
              <p className="font-sans font-light text-brand-dark/70 leading-loose mb-6">
                Our ateliers are sanctuaries of patience. An single magnificent piece can take up to six months to complete. From the selection of flawless gemstones to the final intricate polishing, human hands guide every step.
              </p>
              <p className="font-sans font-light text-brand-dark/70 leading-loose">
                We refuse the compromise of mass production. It is the slight, beautiful imperfections of handcrafting that give Dharohar jewelry its unique soul.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
