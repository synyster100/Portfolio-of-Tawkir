"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { works } from "@/data/profile";

export default function WorkGrid() {
  return (
    <section id="work" className="bg-background relative">
      <div className="container-grid px-4 md:px-8 py-16 md:py-24 border-b border-line">
        
        {/* Section Header */}
        <div className="flex justify-between items-start mb-12 border-b border-line pb-4 font-mono">
          <span className="text-[10px] tracking-wider text-muted">[ 04 / 10 ] PORTFOLIO</span>
          <span className="text-[10px] tracking-wider text-muted">WORKS // 2024-2025</span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="section-title text-foreground font-display font-extrabold uppercase mb-4">
            Selected work<span className="text-accent">.</span>
          </h2>
          <p className="text-muted text-sm md:text-base leading-relaxed">
            A showcase of web applications, AI integration projects, data pipelines, and design system revamps. Every product is engineered for visual precision and high performance.
          </p>
        </div>

        {/* 2-Column Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {works.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group flex flex-col justify-between"
            >
              <div>
                {/* Image Wrap */}
                <div className="relative w-full aspect-[4/3] bg-background-soft border border-line overflow-hidden cursor-crosshair">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Orange Border Flash on Hover */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-accent/30 transition-colors duration-500 z-10 pointer-events-none" />
                </div>

                {/* Metadata Row */}
                <div className="flex justify-between items-center mt-6 font-mono text-[10px] text-muted">
                  <span className="uppercase tracking-wider">{project.category}</span>
                  <span>{project.year}</span>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight text-foreground group-hover:text-accent transition-colors duration-300 mt-2.5">
                  {project.title}
                </h3>

                {/* Short Outcome Statement */}
                <p className="text-sm text-muted font-light leading-relaxed mt-2.5 max-w-xl">
                  {project.description}
                </p>
              </div>

              {/* Tags list */}
              <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-line/60">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] text-foreground tracking-tight border border-line-dark/10 px-2 py-0.5 uppercase bg-background-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
