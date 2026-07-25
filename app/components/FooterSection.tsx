"use client";

import React from "react";
import {
  Calendar,
  MapPin,
  Users,
  Star,
  Trophy,
  Award,
  Gift,
  Phone,
  Compass,
  Anchor,
} from "lucide-react";

export default function FooterSection({ onOpenRegister }: { onOpenRegister: () => void }) {
  return (
    <footer className="w-full bg-[#1e120d] text-white border-t-2 border-[#d4af37] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Logo matching reference image */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-700 to-amber-950 p-0.5 shadow-md flex items-center justify-center">
            <div className="w-full h-full bg-[#2b1b17] rounded-full flex items-center justify-center border border-amber-400/40">
              <Compass className="w-6 h-6 text-amber-400" />
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-pirate text-3xl font-bold text-amber-300">
              HACKPRENEUR &apos;26
            </span>
            <span className="text-[10px] font-mono text-amber-400/80">
              Itechroots 16.0 • 1’st International Innovation Hackathon
            </span>
          </div>
        </div>

        {/* Event info details with icons */}
        <div className="max-w-2xl text-amber-100/80 font-sans text-sm mb-6 flex flex-col items-center gap-2">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>8th August 2026 | 12 Hours</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Hybrid Mode | IT Department, YCCE</span>
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5">
              <Users className="w-4 h-4 text-amber-400" />
              <span>Teams of 4-6 | ₹600/team</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400" />
              <span>Partner: GDG Cloud Nagpur</span>
            </span>
          </div>
        </div>

        {/* CTA banner inside footer */}
        <div className="w-full max-w-3xl p-6 rounded-2xl bg-[#2b1b17] border border-[#d4af37]/60 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-left">
          <div>
            <h4 className="font-pirate text-2xl font-bold text-amber-300">
              SPEND LESS TIME. WIN BIG.
            </h4>
            <div className="text-xs text-amber-200/80 font-mono mt-1.5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1">
                <Trophy className="w-4 h-4 text-amber-400" /> ₹21,000
              </span>
              <span>|</span>
              <span className="inline-flex items-center gap-1">
                <Award className="w-4 h-4 text-slate-300" /> ₹15,000
              </span>
              <span>|</span>
              <span className="inline-flex items-center gap-1">
                <Gift className="w-4 h-4 text-amber-600" /> ₹5K Capello Vouchers
              </span>
            </div>
            <div className="mt-2 text-xs font-mono text-amber-300/90 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-amber-400" /> Tejasvi Jadhao: 9403315952
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-amber-400" /> Ojas Satdeve: 8856012282
              </span>
            </div>
          </div>
          <a
            href="https://forms.gle/GSExBRPYAzxPeDxq6"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onOpenRegister}
            className="px-6 py-3.5 rounded-xl font-pirate text-lg text-white font-bold btn-crimson hover:scale-105 transition-transform shrink-0 shadow-md cursor-pointer flex items-center justify-center text-center gap-2"
          >
            <span>REGISTER NOW</span>
            <Anchor className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-8 text-xs font-mono font-bold tracking-wider text-amber-200/70 mb-8 uppercase">
          <a href="#" className="hover:text-amber-400 transition-colors">HOME</a>
          <a href="#events" className="hover:text-amber-400 transition-colors">EVENTS</a>
          <a href="#about" className="hover:text-amber-400 transition-colors">ABOUT</a>
          <a href="#sponsors" className="hover:text-amber-400 transition-colors">PARTNERS</a>
          <a href="#organizers" className="hover:text-amber-400 transition-colors">CREW</a>
          <a href="#schedule" className="hover:text-amber-400 transition-colors">SCHEDULE</a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
        </div>

        <div className="text-[11px] font-mono text-amber-400/50 border-t border-amber-900/40 pt-6 w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>© 2026 HACKPRENEUR. IT DEPARTMENT, YCCE. ALL RIGHTS RESERVED.</span>
          <span>SPEND LESS TIME. WIN BIG.</span>
        </div>
      </div>
    </footer>
  );
}
