/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Showcase from './components/Showcase';
import Heritage from './components/Heritage';
import Craftsmanship from './components/Craftsmanship';
import Gallery from './components/Gallery';
import Appointment from './components/Appointment';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-ivory min-h-screen text-matte-black antialiased selection:bg-gold-500 selection:text-ivory">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold-500 origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />
      <Hero />
      <Collections />
      <Showcase />
      <Heritage />
      <Craftsmanship />
      <Gallery />
      <Appointment />
      <Footer />
    </div>
  );
}

