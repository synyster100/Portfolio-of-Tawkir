"use client";

import { motion } from "framer-motion";
import { experiences, extracurricular } from "@/data/profile";

const allExperiences = [
  ...experiences,
  {
    id: "05",
    company: extracurricular[0].organization,
    type: "Extracurricular",
    title: extracurricular[0].role,
    location: extracurricular[0].location,
    mode: "On-Site",
    date: extracurricular[0].date,
    bullets: extracurricular[0].bullets,
    tags: ["Leadership", "Cultural Management", "Collaborative Operations"]
  }
];

export default function ExperienceGrid() {
  return (
    <section id="experience" className="bg-background relative">
      <div className="container-grid px-4 md:px-8 py-16 md:py-24 border-b border-line">
        
        {/* Section Header */}
        <div className="flex justify-between items-start mb-12 border-b border-line pb-4 font-mono">
          <span className="text-[10px] tracking-wider text-muted">[ 03 / 10 ] COLLABORATORS</span>
          <span className="text-[10px] tracking-wider text-muted">TIMELINE // 2021-2026</span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="section-title text-foreground font-display font-extrabold uppercase mb-4">
            Selected collaborators<span className="text-accent">.</span>
          </h2>
          <p className="text-muted text-sm md:text-base leading-relaxed">
            A history of technical execution, model building, and frontend development across US remotely-operated startups, academic research laboratories, and institutional organizations.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-line border border-line">
          {allExperiences.map((exp, index) => {
            const isLast = index === allExperiences.length - 1;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-background p-6 md:p-8 flex flex-col justify-between hover:bg-background-soft/40 transition-colors duration-300 ${
                  isLast ? "lg:col-span-2" : ""
                }`}
              >
                <div>
                  {/* Card Header Row */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs text-accent font-bold">[{exp.id}]</span>
                    <span className="font-mono text-[10px] bg-background-soft px-2.5 py-1 uppercase border border-line text-muted">
                      {exp.type}
                    </span>
                  </div>

                  {/* Company & Role */}
                  <div className="mb-6">
                    <h3 className="font-display text-xl font-bold text-foreground uppercase tracking-tight">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-medium text-muted mt-1">
                      {exp.title}
                    </p>
                    <p className="font-mono text-[11px] text-muted font-light mt-1.5 flex flex-wrap gap-2">
                      <span>{exp.date}</span>
                      <span>•</span>
                      <span>{exp.location} ({exp.mode})</span>
                    </p>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-8 text-[13px] md:text-sm text-muted font-light leading-relaxed list-none pl-0">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="relative pl-5 before:content-['—'] before:absolute before:left-0 before:text-accent">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-line">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] text-foreground tracking-tight border border-line-dark/10 px-2 py-0.5 uppercase bg-background-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
