"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, FileText } from "lucide-react";
import { profile } from "@/data/profile";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <title>GitHub</title>
    <path 
      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      fill="currentColor"
    />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <title>LinkedIn</title>
    <path 
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      fill="currentColor"
    />
  </svg>
);

const contacts = [
  {
    label: "Email Me",
    href: `mailto:${profile.email}`,
    icon: Mail,
    value: profile.email
  },
  {
    label: "WhatsApp",
    href: profile.whatsapp,
    icon: MessageSquare,
    value: profile.phone
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: LinkedinIcon,
    value: "tawkir-arifin-310a00230"
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: GithubIcon,
    value: "synyster100"
  },
  {
    label: "Resume",
    href: "/Tawkir-Arifin-Resume.pdf",
    icon: FileText,
    value: "Download Resume PDF ↗",
    download: true
  }
];

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-background relative">
      <div className="container-grid px-4 md:px-8 py-20 md:py-32 border-b border-line text-center">
        
        {/* Section Header */}
        <div className="flex justify-between items-start mb-12 border-b border-line pb-4 font-mono">
          <span className="text-[10px] tracking-wider text-muted">[ 08 / 10 ] CONNECT</span>
          <span className="text-[10px] tracking-wider text-muted">AVAILABILITY // OPEN</span>
        </div>

        {/* Huge Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto mb-8"
        >
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-foreground select-none">
            Ready to build something <span className="text-accent">useful</span>?
          </h2>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-16"
        >
          Available for frontend development, AI web apps, full-stack MVPs, research prototypes, and learning-system builds.
        </motion.p>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {contacts.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.download ? undefined : "_blank"}
                rel={item.download ? undefined : "noopener noreferrer"}
                download={item.download || undefined}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col items-center justify-between p-6 border border-line bg-background-soft/30 hover:bg-background-soft hover:border-line-dark transition-all duration-300 group cursor-pointer"
              >
                {/* Icon Row */}
                <div className="text-muted group-hover:text-accent transition-colors duration-200 mb-4 p-2 border border-line/60 rounded bg-background group-hover:border-accent/40">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Details */}
                <div className="space-y-1 text-center w-full">
                  <span className="block font-mono text-[10px] text-muted uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="block text-xs font-semibold text-foreground truncate max-w-full">
                    {item.value}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
