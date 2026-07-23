"use client";

import { Pause, Play } from "lucide-react";
import React, { useState } from "react";

interface NavbarProps {
  onOpenRegister: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  activeSection?: string;
  setActiveSection?: (section: string) => void;
}

export default function Navbar({
  onOpenRegister,
  soundEnabled,
  onToggleSound,
  activeSection = "about",
  setActiveSection,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "sponsors", label: "SPONSORS" },
    { id: "organizers", label: "ORGANIZERS" },
    { id: "schedule", label: "SCHEDULE" },
    { id: "faq", label: "FAQ" },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    if (setActiveSection) {
      setActiveSection(id);
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full wood-nav-bg border-b border-[#5c3a1e] shadow-2xl transition-all backdrop-blur-md">
      {/* Decorative top rope border */}
      <div className="h-1 w-full bg-linear-to-r from-[#b8860b] via-[#ffd700] to-[#b8860b] opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* BRAND LOGO matching reference image 11_12_00 AM */}
        <a
          href="#about"
          onClick={(e) => handleNavClick("about", e)}
          className="flex items-center gap-3 group"
        >
          <div className="w-11 h-11 rounded-full bg-linear-to-br from-[#d4af37] via-[#8b5a2b] to-[#2b1b17] p-0.5 shadow-lg group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center">
            <div className="w-full h-full bg-[#180e08] rounded-full flex items-center justify-center border border-[#d4af37]/60">
              <span className="font-pirate text-2xl text-[#f3e5ab] drop-shadow-sm">
                ☠
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-pirate text-2xl sm:text-3xl font-bold tracking-wider text-[#f4ecd8] drop-shadow">
              HACKPRENEUR
            </span>
            <span className="text-[9px] tracking-[0.3em] font-bold text-[#d4af37] uppercase font-sans -mt-1">
              BUILD • INNOVATE • CONQUER
            </span>
          </div>
        </a>

        {/* DESKTOP NAV LINKS matching reference image 11_12_00 AM */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-[#d8c8b0]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`relative py-1.5 transition-all duration-200 ${
                  isActive
                    ? "text-[#f3e5ab] font-extrabold"
                    : "hover:text-[#ffffff] text-[#c4b396]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.75 bg-linear-to-r from-[#d4af37] via-[#a81c19] to-[#d4af37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT ACTION BUTTONS matching reference image 11_12_00 AM */}
        <div className="hidden lg:flex items-center justify-center gap-3">
          <button
            onClick={onToggleSound}
            className="px-3.5 py-2.5 rounded-lg border border-[#8b5a2b]/60 bg-[#2b1b17] text-[#f4ecd8] hover:bg-[#3d271d] hover:border-[#d4af37] transition-all text-xs font-semibold flex items-center gap-2 shadow-md cursor-pointer"
            title={soundEnabled ? "Pause Audio" : "Play Audio"}
          >
            {soundEnabled ? (
              <Pause size={14} className="text-amber-400 fill-amber-400" />
            ) : (
              <Play size={14} className="text-amber-400 fill-amber-400" />
            )}
            <span className="font-mono text-[11px] tracking-wider uppercase font-bold text-amber-200">
              {soundEnabled ? "PAUSE AUDIO" : "PLAY AUDIO"}
            </span>
          </button>

          <a
            href="https://forms.gle/GSExBRPYAzxPeDxq6"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onOpenRegister}
            className="px-8 py-3.5 rounded-lg font-pirate text-xl leading-none tracking-wider text-white font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform flex items-center justify-center text-center bg-[url('/images/register.png')] bg-[length:100%_100%] bg-center bg-no-repeat cursor-pointer"
          >
            <span className="leading-none">REGISTER NOW</span>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onToggleSound}
            className="px-2.5 py-2 rounded-lg border border-[#8b5a2b] bg-[#2b1b17] text-[#f4ecd8] flex items-center gap-1 cursor-pointer"
            title={soundEnabled ? "Pause Audio" : "Play Audio"}
          >
            {soundEnabled ? (
              <Pause size={14} className="text-amber-400 fill-amber-400" />
            ) : (
              <Play size={14} className="text-amber-400 fill-amber-400" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#2b1b17] border border-[#8b5a2b] text-[#f4ecd8]"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1d120a] border-b border-[#5c3a1e] px-6 py-4 flex flex-col gap-3 font-semibold text-xs tracking-wider text-[#d8c8b0] uppercase">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                handleNavClick(item.id, e);
                setMobileMenuOpen(false);
              }}
              className={`py-2 border-b border-[#3a2313] ${
                activeSection === item.id ? "text-[#ffd700] font-bold" : "hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://forms.gle/GSExBRPYAzxPeDxq6"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRegister();
            }}
            className="w-full py-3 mt-2 rounded-lg font-pirate text-lg text-white font-bold btn-crimson text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>REGISTER NOW</span>
            <span>⚓</span>
          </a>
        </div>
      )}
    </header>
  );
}
