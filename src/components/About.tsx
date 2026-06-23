"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="bg-background relative">
      <div className="container-grid px-4 md:px-8 py-16 md:py-24 border-b border-line">
        
        {/* Section Index Indicator */}
        <div className="flex items-center space-x-2 font-mono text-[10px] tracking-wider text-muted mb-12">
          <span>[ 02 / 10 ] ABOUT</span>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Columns: Text Content */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="section-title text-foreground font-display font-extrabold uppercase">
              A developer of one. Built around{" "}
              <span className="text-accent">systems</span>,{" "}
              <span className="text-accent">interfaces</span>, and{" "}
              <span className="text-accent">useful products</span>.
            </h2>
            
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted max-w-3xl">
              <p>
                {profile.shortBio}
              </p>
              <p>
                I thrive in environments where clean frontend presentation meets strong computational or logical workflows. Whether that means tuning an AQI neural network model, packaging learning materials for corporate platforms, or building reactive dashboard interfaces in Next.js, my focus is always on clarity, optimization, and engineered stability.
              </p>
            </div>
          </div>

          {/* Right Columns: Grayscale Avatar Panel */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[320px] aspect-[4/5] bg-background-soft border border-line p-3 group cursor-crosshair overflow-hidden"
            >
              {/* Internal border effect */}
              <div className="absolute inset-0 border border-line-dark/10 m-5 pointer-events-none z-10" />

              {/* Image Frame */}
              <div className="relative w-full h-full bg-background-soft overflow-hidden border border-line">
                <Image
                  src="/images/profile.jpg"
                  alt={profile.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  loading="eager"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Accent Orange Overlay Grid on Hover */}
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-5 left-5 right-5 bg-panel/90 backdrop-blur-sm border border-line-dark/20 text-panel-text px-3 py-2 z-20 font-mono text-[9px] tracking-wide flex justify-between uppercase">
                <span>{profile.name}</span>
                <span>TA // 2026</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
