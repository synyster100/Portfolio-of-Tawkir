"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-background/80 backdrop-blur-md">
      <div className="container-grid flex h-14 items-center justify-between px-4 md:px-8">
        {/* Left Side: Technical Info */}
        <div className="flex items-center space-x-2 font-mono text-[11px] font-medium tracking-wider text-foreground">
          <span className="font-bold uppercase tracking-tight">{profile.name}</span>
          <span className="text-accent">•</span>
          <span className="hidden sm:inline text-muted uppercase font-light">{profile.role.replace(" ", ".")}</span>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-[12px] font-medium tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Technical Metadata & CTA */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:block font-mono text-[11px] text-muted">
            SYSTEM / 2026
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center border border-foreground px-3 py-1.5 text-[11px] font-mono font-medium tracking-wider text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
          >
            GET IN TOUCH ↗
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex md:hidden items-center justify-center p-1.5 border border-line text-foreground hover:bg-background-soft transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-line bg-background/95 backdrop-blur-lg">
          <nav className="flex flex-col space-y-4 px-6 py-6 border-x border-line mx-4 bg-background">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[14px] font-medium tracking-tight text-foreground hover:text-accent transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center border border-foreground py-2 text-[12px] font-mono font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-200 mt-2"
            >
              GET IN TOUCH ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
