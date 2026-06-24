"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { profile } from "@/data/profile";

const specialties = [
  { num: "01", label: "Frontend Development" },
  { num: "02", label: "AI Applications" },
  { num: "03", label: "Full-Stack Systems" },
  { num: "04", label: "Research & Data" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container-grid px-4 md:px-8 pt-16 pb-12 md:pt-28 md:pb-16 flex flex-col justify-between">
        
        {/* Top Section Metadata indicator */}
        <div className="flex justify-between items-center border-b border-line pb-4 mb-8 md:mb-12 font-mono text-[10px] tracking-wider text-muted">
          <span>[ 01 / 10 ] IDENTITY</span>
          <span className="uppercase">{profile.location}</span>
        </div>

        {/* Hero Title */}
        <div className="relative z-10 mb-8 md:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hero-title text-foreground font-display font-black uppercase"
          >
            Tawkir Arifin<span className="text-accent">.</span>
          </motion.h1>
        </div>

        {/* Hero Description & CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 space-y-6"
          >
            <p className="text-lg md:text-2xl font-light leading-relaxed text-foreground tracking-tight max-w-3xl">
              {profile.headline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                href="#work"
                className="inline-flex items-center justify-center bg-foreground text-background px-6 py-3 text-xs font-mono font-medium tracking-wider hover:bg-accent hover:text-white transition-colors duration-300"
              >
                VIEW WORK ↗
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center border border-foreground text-foreground px-6 py-3 text-xs font-mono font-medium tracking-wider hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                GET IN TOUCH ↗
              </Link>
            </div>
          </motion.div>

          {/* Right hand abstract geometric element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:col-span-4 lg:flex justify-end select-none pointer-events-none"
          >
            <div className="font-display font-black text-9xl leading-none text-foreground border border-line p-8 flex items-center justify-center aspect-square w-48 h-48">
              TA
            </div>
          </motion.div>
        </div>

        {/* Bottom Metadata specialties row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-line pt-6">
          {specialties.map((spec, index) => (
            <motion.div
              key={spec.num}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="flex items-start space-x-2.5 font-mono"
            >
              <span className="text-[10px] text-accent font-medium">[{spec.num}]</span>
              <span className="text-xs text-foreground font-medium uppercase tracking-tight">{spec.label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
