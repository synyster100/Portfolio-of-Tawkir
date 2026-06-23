"use client";

import { motion } from "framer-motion";
import { process } from "@/data/profile";

export default function Process() {
  return (
    <section className="bg-background relative">
      <div className="container-grid px-4 md:px-8 py-16 md:py-24 border-b border-line">
        
        {/* Section Header */}
        <div className="flex justify-between items-start mb-12 border-b border-line pb-4 font-mono">
          <span className="text-[10px] tracking-wider text-muted">[ 05 / 10 ] WORKFLOW</span>
          <span className="text-[10px] tracking-wider text-muted">METHODOLOGY</span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="section-title text-foreground font-display font-extrabold uppercase mb-4">
            How the work gets made<span className="text-accent">.</span>
          </h2>
          <p className="text-muted text-sm md:text-base leading-relaxed">
            Building digital systems requires a structured, non-decorative pipeline. Here is the operational protocol from initial understanding to final validation.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {process.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 md:p-8 flex flex-col justify-between min-h-[220px] hover:bg-background-soft/40 transition-colors duration-300"
            >
              <div>
                {/* Step Number */}
                <div className="font-display text-3xl font-black text-accent uppercase tracking-tighter leading-none mb-6">
                  {step.number}
                </div>
                
                {/* Step Title */}
                <h3 className="font-display text-base font-bold text-foreground uppercase tracking-tight mb-3">
                  {step.title}
                </h3>
              </div>

              {/* Step Description */}
              <p className="text-[13px] md:text-sm text-muted font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
