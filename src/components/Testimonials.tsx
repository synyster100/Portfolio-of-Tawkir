"use client";

import { motion } from "framer-motion";

const proofPoints = [
  {
    num: "01",
    highlight: "Responsive Rebuilds",
    statement: "Built responsive websites for organizational and sister-concern brands.",
    outcome: "Verified cross-platform performance & design systems integration"
  },
  {
    num: "02",
    highlight: "AI Implementations",
    statement: "Developed AI-driven applications and chatbots using LLM APIs and Next.js.",
    outcome: "Shipped low-latency chat interfaces & backend proxy routines"
  },
  {
    num: "03",
    highlight: "Data Curations",
    statement: "Curated and worked with a 500,000+ point AQI dataset for forecasting research.",
    outcome: "Validated with ARIMA, SARIMA, LSTM, and Transformer model variants"
  },
  {
    num: "04",
    highlight: "Full-Stack Versatility",
    statement: "Contributed across frontend, backend, research, and enterprise application environments.",
    outcome: "Shipped React, Node.js, C#/.NET, Flask, and database integrations"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-panel text-panel-text relative">
      <div className="container-grid px-4 md:px-8 py-16 md:py-24 border-b border-line-dark border-l border-r">
        
        {/* Section Header */}
        <div className="flex justify-between items-start mb-12 border-b border-line-dark pb-4 font-mono">
          <span className="text-[10px] tracking-wider text-accent">[ 07 / 10 ] PROOF</span>
          <span className="text-[10px] tracking-wider text-muted">VERIFIED RECORDS</span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="section-title text-panel-text font-display font-extrabold uppercase mb-4">
            Proof over noise<span className="text-accent">.</span>
          </h2>
          <p className="text-muted text-sm md:text-base leading-relaxed">
            Tangible deliverables and development benchmarks. No filler adjectives or corporate buzzwords — just code, datasets, and running systems.
          </p>
        </div>

        {/* Proof Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {proofPoints.map((point, index) => (
            <motion.div
              key={point.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-line-dark p-6 md:p-8 flex flex-col justify-between hover:bg-white/5 transition-all duration-300 group"
            >
              <div>
                {/* ID Header */}
                <div className="flex justify-between items-center mb-6 font-mono text-[10px]">
                  <span className="text-accent font-bold">[{point.num}]</span>
                  <span className="text-muted uppercase tracking-wider">{point.highlight}</span>
                </div>

                {/* Proof Statement */}
                <p className="font-display text-lg md:text-xl font-bold uppercase tracking-tight leading-snug text-panel-text group-hover:text-accent transition-colors duration-300">
                  {point.statement}
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-8 pt-4 border-t border-line-dark flex items-center justify-between font-mono text-[9px] text-muted uppercase tracking-wider">
                <span>{point.outcome}</span>
                <span className="text-accent font-bold">● VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
