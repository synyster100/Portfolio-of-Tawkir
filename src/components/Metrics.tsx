"use client";

import { motion } from "framer-motion";
import { proof } from "@/data/profile";

export default function Metrics() {
  return (
    <section className="bg-background relative">
      <div className="container-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-b border-line">
        {proof.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col justify-between p-6 md:p-8 border-b border-line last:border-b-0 sm:border-r sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r border-line lg:last:border-r-0"
          >
            {/* Index Counter */}
            <div className="font-mono text-[9px] tracking-wider text-muted mb-6 uppercase">
              METRIC // 0{index + 1}
            </div>

            {/* Metric & Info */}
            <div>
              <span className="block font-display text-4xl md:text-5xl font-black text-accent uppercase leading-none tracking-tighter">
                {item.metric}
              </span>
              <span className="block font-display text-base font-bold text-foreground uppercase tracking-tight mt-3">
                {item.label}
              </span>
              <p className="font-sans text-[13px] text-muted leading-relaxed mt-2">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
