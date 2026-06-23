"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/profile";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="services" className="bg-background relative">
      <div className="container-grid px-4 md:px-8 py-16 md:py-24 border-b border-line">
        
        {/* Section Header */}
        <div className="flex justify-between items-start mb-12 border-b border-line pb-4 font-mono">
          <span className="text-[10px] tracking-wider text-muted">[ 06 / 10 ] SERVICES</span>
          <span className="text-[10px] tracking-wider text-muted">CAPABILITIES</span>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Sticky Title & Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <h2 className="section-title text-foreground font-display font-extrabold uppercase">
              What I offer<span className="text-accent">.</span>
            </h2>
            <p className="text-muted text-sm md:text-base leading-relaxed max-w-md">
              A focused mix of frontend development, AI application development, full-stack implementation, and research-backed technical execution.
            </p>
          </div>

          {/* Right Column: Accordion Rows */}
          <div className="lg:col-span-7 border-t border-line divide-y divide-line">
            {services.map((service, index) => {
              const isOpen = activeIndex === index;
              const formattedNum = String(index + 1).padStart(2, "0");
              
              return (
                <div key={service.title} className="py-6">
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center space-x-4 md:space-x-6">
                      <span className="font-mono text-xs md:text-sm text-accent font-bold">
                        [{formattedNum}]
                      </span>
                      <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-tight text-foreground group-hover:text-accent transition-colors duration-200">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Rotate indicator icon */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="text-muted group-hover:text-accent transition-colors p-1"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pl-8 md:pl-12 space-y-6">
                          {/* Description */}
                          <p className="text-sm md:text-base font-light leading-relaxed text-muted max-w-2xl">
                            {service.description}
                          </p>

                          {/* Capabilities List */}
                          <div>
                            <div className="font-mono text-[9px] text-accent tracking-wider uppercase mb-2">
                              Capabilities Included
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {service.includes.map((inc) => (
                                <span
                                  key={inc}
                                  className="font-mono text-[9px] text-foreground tracking-tight border border-line-dark/10 px-2 py-0.5 uppercase bg-background-soft"
                                >
                                  {inc}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
