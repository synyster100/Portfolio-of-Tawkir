"use client";

import { profile } from "@/data/profile";

const pageLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

const elsewhereLinks = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "WhatsApp", href: profile.whatsapp }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-panel text-panel-text relative">
      <div className="container-grid px-4 md:px-8 py-12 md:py-16 border-t border-line-dark border-l border-r">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-line-dark pb-12">
          
          {/* Left Column: Branding */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="font-display text-2xl font-black uppercase tracking-tight text-panel-text">
              Tawkir<span className="text-accent">.</span>
            </h3>
            <div className="space-y-1 font-mono text-xs text-muted uppercase">
              <p>{profile.role}</p>
              <p>{profile.location}</p>
            </div>
          </div>

          {/* Middle Column: Nav Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-[10px] text-accent tracking-wider uppercase">
              Pages
            </h4>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-tight">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-panel-text transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Elsewhere Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-[10px] text-accent tracking-wider uppercase">
              Elsewhere
            </h4>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-tight">
              {elsewhereLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-panel-text transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[10px] font-mono text-muted uppercase tracking-wider gap-4">
          <span>
            © {currentYear} TAWKIR ARIFIN. ALL RIGHTS RESERVED.
          </span>
          <span className="flex items-center space-x-1.5">
            <span>BUILT WITH NEXT.JS</span>
            <span className="text-accent">•</span>
            <span>SYSTEM.V2</span>
          </span>
        </div>

      </div>
    </footer>
  );
}
