"use client";

import React from "react";

export default function FooterSection({ onOpenRegister }: { onOpenRegister: () => void }) {
  return (
    <footer className="w-full bg-[#1e120d] text-white border-t-2 border-[#d4af37] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Logo matching reference image */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-700 to-amber-950 p-0.5 shadow-md flex items-center justify-center">
            <div className="w-full h-full bg-[#2b1b17] rounded-full flex items-center justify-center border border-amber-400/40">
              <span className="font-pirate text-2xl text-amber-400">
                ☠
              </span>
            </div>
          </div>
          <span className="font-pirate text-3xl font-bold text-amber-300">
            HACKPRENEUR 2026
          </span>
        </div>

        <p className="max-w-md text-amber-100/70 font-sans text-sm mb-8">
          The premier 12-hour global cyber-pirate hackathon. Unearth golden code, deploy autonomous swarms, & conquer the digital high seas.
        </p>

        {/* CTA banner inside footer */}
        <div className="w-full max-w-2xl p-8 rounded-2xl bg-[#2b1b17] border border-[#d4af37]/60 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h4 className="font-pirate text-2xl font-bold text-amber-300">
              READY TO CLAIM YOUR BOUNTY?
            </h4>
            <p className="text-xs text-amber-200/60 font-mono mt-1">
              3,500+ BUCCANEERS ALREADY REGISTERED
            </p>
          </div>
          <a
            href="https://forms.gle/GSExBRPYAzxPeDxq6"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onOpenRegister}
            className="px-6 py-3 rounded-xl font-pirate text-lg text-white font-bold btn-crimson hover:scale-105 transition-transform shrink-0 shadow-md cursor-pointer flex items-center justify-center text-center"
          >
            REGISTER NOW ⚓
          </a>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-8 text-xs font-mono font-bold tracking-wider text-amber-200/70 mb-8 uppercase">
          <a href="#" className="hover:text-amber-400 transition-colors">HOME</a>
          <a href="#bounties" className="hover:text-amber-400 transition-colors">TRACKS</a>
          <a href="#schedule" className="hover:text-amber-400 transition-colors">SCHEDULE</a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
        </div>

        <div className="text-[11px] font-mono text-amber-400/50 border-t border-amber-900/40 pt-8 w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>© 2026 HACKPRENEUR. CRAFTED WITH PIECE OF EIGHT FONT & CYBER GOLD.</span>
          <span>BUILD • INNOVATE • CONQUER</span>
        </div>
      </div>
    </footer>
  );
}
