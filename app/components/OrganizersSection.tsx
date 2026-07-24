"use client";

import React from "react";
import Image from "next/image";
import {
  UserCheck,
  Lightbulb,
  Compass,
  Package,
  Shield,
  Code,
  Award,
} from "lucide-react";
import {
  PirateScrollReveal,
  PirateSpinWheel,
  PirateShipFloat,
} from "./PirateMotion";

export default function OrganizersSection() {
  return (
    <section
      id="organizers"
      className="relative isolate w-full min-h-screen flex flex-col justify-center overflow-hidden py-16 sm:py-24 scroll-mt-20"
    >
      {/* Pirate Island & Ocean Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20 brightness-[1.02] contrast-[1.02]"
        style={{ backgroundImage: "url('/about_bg.svg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#faf4e5]/95 via-[#faf4e5]/85 via-50% to-[#faf4e5]/80 -z-10" />
        <div className="absolute inset-0 bg-linear-to-b from-[#faf4e5] via-transparent to-[#faf4e5] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col space-y-12">
        {/* SECTION HEADER */}
        <PirateScrollReveal className="text-center space-y-3">
          <h2 className="font-pirate text-6xl sm:text-7xl md:text-8xl font-bold tracking-wider text-[#2b1810] drop-shadow-md">
            ORGANIZERS
          </h2>

          {/* Anchor & Line Divider */}
          <div className="flex items-center justify-center gap-3 max-w-sm mx-auto">
            <div className="h-0.5 flex-1 bg-linear-to-r from-transparent via-[#8c1d1a]/60 to-[#8c1d1a]" />
            <PirateSpinWheel className="text-[#8c1d1a] text-2xl font-pirate cursor-pointer">⚓</PirateSpinWheel>
            <div className="h-0.5 flex-1 bg-linear-to-l from-transparent via-[#8c1d1a]/60 to-[#8c1d1a]" />
          </div>

          {/* Crimson Ribbon Badge */}
          <div className="inline-flex items-center justify-center px-8 py-2.5 rounded-md bg-[#8c1d1a] text-[#fce8c3] font-pirate text-xl sm:text-2xl tracking-widest shadow-lg border border-[#d4af37]/50 relative">
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-[#8c1d1a]" />
            <span>◆ THE CREW BEHIND THE VOYAGE ◆</span>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-[#8c1d1a]" />
          </div>

          {/* Subtitle */}
          <p className="text-[#3d271d] font-sans font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed pt-1">
            A passionate crew of dreamers, builders, and innovators steering Hackpreneur towards greatness.
          </p>
        </PirateScrollReveal>

        {/* CREW GRID: PARCHMENT CARDS FOR LEADERSHIP & ORGANIZERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">

          {/* 1. PRESIDENT CSI (Col 12 on lg) */}
          <div className="lg:col-span-12 bg-[#f6ebd4] border-2 border-[#b89562] rounded-2xl p-6 shadow-xl relative flex flex-col justify-between overflow-hidden max-w-2xl mx-auto w-full">
            {/* Header Banner */}
            <div className="w-full bg-[#3a2012] text-[#fce8c3] py-2 px-3 rounded-lg text-center font-pirate text-xl tracking-wider font-bold mb-6 flex items-center justify-center gap-2 border border-[#8c5a2b]">
              <span>👑</span>
              <span>PRESIDENT CSI</span>
              <span>👑</span>
            </div>

            {/* Member */}
            <div className="flex flex-col items-center text-center mb-4">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-b from-[#d4af37] via-[#8c5a2b] to-[#3a2012] shadow-lg mb-3">
                <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-[#f6ebd4]">
                  <Image
                    src="/organisers/Advait_Kadoo.jpg"
                    alt="Advait Kadoo"
                    fill
                    sizes="128px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <h4 className="font-serif font-bold text-xl text-[#2b1810] leading-tight">
                Advait Kadoo
              </h4>
              <span className="inline-block mt-2 px-4 py-1 bg-[#8c1d1a] text-[#fce8c3] text-sm font-pirate tracking-wider rounded-full shadow-sm">
                President • Computer Society of India
              </span>
            </div>

            {/* Accent Divider */}
            <div className="flex justify-center text-[#8c1d1a] text-sm pt-2">
              <span>⚓</span>
            </div>
          </div>

          {/* 2. ORGANISERS (Col 6 on lg) */}
          <div className="lg:col-span-6 bg-[#f6ebd4] border-2 border-[#b89562] rounded-2xl p-5 shadow-xl relative flex flex-col justify-between overflow-hidden">
            {/* Header Banner */}
            <div className="w-full bg-[#3a2012] text-[#fce8c3] py-2 px-3 rounded-lg text-center font-pirate text-lg tracking-wider font-bold mb-6 flex items-center justify-center gap-2 border border-[#8c5a2b]">
              <span>⚔</span>
              <span>ORGANISERS</span>
            </div>

            {/* Members */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Ojas Satdeve */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-linear-to-b from-[#d4af37] via-[#8c5a2b] to-[#3a2012] shadow-md mb-2">
                  <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-[#f6ebd4]">
                    <Image
                      src="/organisers/Ojas_Satdeve.jpeg"
                      alt="Ojas Satdeve"
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h4 className="font-serif font-bold text-base text-[#2b1810] leading-tight">
                  Ojas Satdeve
                </h4>
                <p className="text-xs text-[#8c1d1a] font-sans font-semibold mt-0.5">
                  Organiser & Event Lead
                </p>
              </div>

              {/* Tejasvini Jadhao */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-b from-[#d4af37] via-[#8c5a2b] to-[#3a2012] shadow-md mb-2">
                  <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-[#f6ebd4]">
                    <Image
                      src="/organisers/Tejasvi.jpg"
                      alt="Tejasvini Jadhao"
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h4 className="font-serif font-bold text-base text-[#2b1810] leading-tight">
                  Tejasvi Jadhao
                </h4>
                <p className="text-xs text-[#8c1d1a] font-sans font-semibold mt-0.5">
                  Organiser & Event Lead
                </p>
              </div>
            </div>

            {/* Accent Divider */}
            <div className="flex justify-center text-[#8c1d1a] text-xs pt-2">
              <span>☸</span>
            </div>
          </div>

          {/* 4. TECHNICAL HEADS (Col 6 on lg) */}
          <div className="lg:col-span-6 bg-[#f6ebd4] border-2 border-[#b89562] rounded-2xl p-5 shadow-xl relative flex flex-col justify-between overflow-hidden">
            {/* Header Banner */}
            <div className="w-full bg-[#3a2012] text-[#fce8c3] py-2 px-3 rounded-lg text-center font-pirate text-lg tracking-wider font-bold mb-6 flex items-center justify-center gap-2 border border-[#8c5a2b]">
              <span>&lt;/&gt;</span>
              <span>TECHNICAL HEADS</span>
            </div>

            {/* Members */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Anurag Borkar */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-b from-[#d4af37] via-[#8c5a2b] to-[#3a2012] shadow-md mb-2">
                  <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-[#f6ebd4]">
                    <Image
                      src="/organisers/AnuragBorkar.jpg"
                      alt="Anurag Borkar"
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h4 className="font-serif font-bold text-base text-[#2b1810] leading-tight">
                  Anurag Borkar
                </h4>
                <p className="text-xs text-[#8c1d1a] font-sans font-semibold mt-0.5">
                  Technical Head
                </p>
              </div>

              {/* Khushal Sharma */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-b from-[#d4af37] via-[#8c5a2b] to-[#3a2012] shadow-md mb-2">
                  <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-[#f6ebd4]">
                    <Image
                      src="/organisers/Khushal_Sharma.jpeg"
                      alt="Khushal Sharma"
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h4 className="font-serif font-bold text-base text-[#2b1810] leading-tight">
                  Khushal Sharma
                </h4>
                <p className="text-xs text-[#8c1d1a] font-sans font-semibold mt-0.5">
                  Technical Head
                </p>
              </div>
            </div>

            {/* Accent Divider */}
            <div className="flex justify-center text-[#8c1d1a] text-sm pt-2">
              <span>⚓</span>
            </div>
          </div>

          {/* 5. DEVELOPED BY (Col 12 - Full Width Special Parchment Card) */}
          <div className="lg:col-span-12 bg-linear-to-b from-[#281810] via-[#1f120b] to-[#281810] border-2 border-[#d4af37]/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-[#fce8c3]">
            {/* Glow accent */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#8c1d1a]/20 rounded-full blur-3xl" />

            {/* Header Banner */}
            <div className="text-center mb-6 relative">
              <div className="inline-flex items-center justify-center px-6 py-2 rounded-xl bg-[#3a2012] border border-[#d4af37]/60 text-[#ffd700] font-pirate text-2xl tracking-widest shadow-md gap-3">
                <Code className="w-6 h-6 text-[#ffd700]" />
                <span>DEVELOPED BY</span>
                <Code className="w-6 h-6 text-[#ffd700]" />
              </div>
              <p className="text-xs text-amber-200/70 font-sans mt-2">
                The Architects & Engineers Behind the Hackpreneur Digital Experience
              </p>
            </div>

            {/* 3 Developers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Anurag Borkar */}
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#352015]/80 border border-[#d4af37]/30 hover:border-[#d4af37] transition-colors shadow-inner">
                <div className="relative w-22 h-22 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-b from-[#ffd700] via-[#d4af37] to-[#8c5a2b] shadow-lg mb-3">
                  <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-[#281810]">
                    <Image
                      src="/organisers/AnuragBorkar.jpg"
                      alt="Anurag Borkar"
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h4 className="font-serif font-bold text-lg text-[#ffd700] leading-tight">
                  Anurag Borkar
                </h4>
              </div>

              {/* Khushal Sharma */}
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#352015]/80 border border-[#d4af37]/30 hover:border-[#d4af37] transition-colors shadow-inner">
                <div className="relative w-22 h-22 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-b from-[#ffd700] via-[#d4af37] to-[#8c5a2b] shadow-lg mb-3">
                  <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-[#281810]">
                    <Image
                      src="/organisers/Khushal_Sharma.jpeg"
                      alt="Khushal Sharma"
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h4 className="font-serif font-bold text-lg text-[#ffd700] leading-tight">
                  Khushal Sharma
                </h4>
              </div>

              {/* Dhairya Deulkar */}
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#352015]/80 border border-[#d4af37]/30 hover:border-[#d4af37] transition-colors shadow-inner">
                <div className="relative w-22 h-22 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-b from-[#ffd700] via-[#d4af37] to-[#8c5a2b] shadow-lg mb-3">
                  <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-[#281810]">
                    <Image
                      src="/organisers/Dhairya_Deulkar.jpeg"
                      alt="Dhairya Deulkar"
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h4 className="font-serif font-bold text-lg text-[#ffd700] leading-tight">
                  Dhairya Deulkar
                </h4>
                <span className="text-xs text-amber-100/90 font-mono mt-1 font-semibold">
                  Frontend & UI Engineer
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: ADVISORY BOARD & IN COLLABORATION WITH */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* ADVISORY BOARD (Dark Wood Plank Card) */}
          <div className="lg:col-span-5 bg-[#23150d] border-2 border-[#d4af37]/70 rounded-2xl p-6 shadow-2xl relative flex flex-col justify-between text-[#fce8c3] overflow-hidden">
            {/* Header Banner */}
            <div className="text-center font-pirate text-2xl tracking-widest text-[#ffd700] mb-6 flex items-center justify-center gap-2 drop-shadow-sm">
              <span>★</span>
              <span>ADVISORY BOARD</span>
              <span>★</span>
            </div>

            {/* 4 Feature Items */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-[#3a2313] border border-[#d4af37]/40 flex items-center justify-center text-[#ffd700] mb-2 shadow-inner">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h5 className="font-pirate text-sm text-[#ffd700] font-bold leading-tight">
                  Industry Experts
                </h5>
                <p className="text-[11px] text-amber-100/70 font-sans mt-1 leading-snug">
                  Guiding with real-world insights
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-[#3a2313] border border-[#d4af37]/40 flex items-center justify-center text-[#ffd700] mb-2 shadow-inner">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h5 className="font-pirate text-sm text-[#ffd700] font-bold leading-tight">
                  Innovation Mentors
                </h5>
                <p className="text-[11px] text-amber-100/70 font-sans mt-1 leading-snug">
                  Fueling ideas and creativity
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-[#3a2313] border border-[#d4af37]/40 flex items-center justify-center text-[#ffd700] mb-2 shadow-inner">
                  <Compass className="w-6 h-6" />
                </div>
                <h5 className="font-pirate text-sm text-[#ffd700] font-bold leading-tight">
                  Domain Specialists
                </h5>
                <p className="text-[11px] text-amber-100/70 font-sans mt-1 leading-snug">
                  Ensuring impact and relevance
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-[#3a2313] border border-[#d4af37]/40 flex items-center justify-center text-[#ffd700] mb-2 shadow-inner">
                  <Package className="w-6 h-6" />
                </div>
                <h5 className="font-pirate text-sm text-[#ffd700] font-bold leading-tight">
                  Growth Partners
                </h5>
                <p className="text-[11px] text-amber-100/70 font-sans mt-1 leading-snug">
                  Supporting the vision and mission
                </p>
              </div>
            </div>
          </div>

          {/* IN COLLABORATION WITH (Parchment Card) */}
          <div className="lg:col-span-7 bg-[#f6ebd4] border-2 border-[#b89562] rounded-2xl p-6 shadow-xl relative flex flex-col justify-between overflow-hidden">
            {/* Header Ribbon */}
            <div className="w-full bg-[#3a2012] text-[#fce8c3] py-2 px-4 rounded-lg text-center font-pirate text-xl tracking-wider font-bold mb-6 flex items-center justify-center gap-2 border border-[#8c5a2b]">
              <span>☠</span>
              <span>IN COLLABORATION WITH</span>
              <span>☠</span>
            </div>

            {/* 5 Collaborator Logos/Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 items-center text-center">
              {/* Computer Society */}
              <div className="flex flex-col items-center p-2 rounded-xl bg-[#ede2c8]/60 border border-[#d8c098]">
                <div className="w-10 h-10 rounded-lg bg-[#3a2012] text-[#3b82f6] flex items-center justify-center mb-1.5 shadow-sm">
                  <Shield className="w-5 h-5" />
                </div>
                <h6 className="font-sans font-bold text-xs text-[#2b1810] leading-tight">
                  Computer Society
                </h6>
                <span className="text-[10px] text-[#7c5634] font-medium">IT Department</span>
              </div>

              {/* Coding Club */}
              <div className="flex flex-col items-center p-2 rounded-xl bg-[#ede2c8]/60 border border-[#d8c098]">
                <div className="w-10 h-10 rounded-lg bg-[#3a2012] text-[#10b981] flex items-center justify-center mb-1.5 shadow-sm font-mono font-bold text-base">
                  {"{ / }"}
                </div>
                <h6 className="font-sans font-bold text-xs text-[#2b1810] leading-tight">
                  Coding Club
                </h6>
                <span className="text-[10px] text-[#7c5634] font-medium">YCCE</span>
              </div>

              {/* Developer Student Clubs */}
              <div className="flex flex-col items-center p-2 rounded-xl bg-[#ede2c8]/60 border border-[#d8c098]">
                <div className="w-10 h-10 rounded-lg bg-[#3a2012] flex items-center justify-center mb-1.5 shadow-sm gap-0.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <h6 className="font-sans font-bold text-xs text-[#2b1810] leading-tight">
                  Developer Student Clubs
                </h6>
                <span className="text-[10px] text-[#7c5634] font-medium">GDSC</span>
              </div>

              {/* Institution's Innovation Council */}
              <div className="flex flex-col items-center p-2 rounded-xl bg-[#ede2c8]/60 border border-[#d8c098]">
                <div className="w-10 h-10 rounded-lg bg-[#3a2012] text-[#f59e0b] flex items-center justify-center mb-1.5 shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <h6 className="font-sans font-bold text-xs text-[#2b1810] leading-tight">
                  Institution's Innovation Council
                </h6>
                <span className="text-[10px] text-[#7c5634] font-medium">IIC</span>
              </div>

              {/* Student Branch IEEE */}
              <div className="flex flex-col items-center p-2 rounded-xl bg-[#ede2c8]/60 border border-[#d8c098] col-span-2 sm:col-span-1">
                <div className="w-10 h-10 rounded-lg bg-[#3a2012] text-[#0284c7] flex items-center justify-center mb-1.5 shadow-sm font-bold text-xs font-serif">
                  IEEE
                </div>
                <h6 className="font-sans font-bold text-xs text-[#2b1810] leading-tight">
                  Student Branch
                </h6>
                <span className="text-[10px] text-[#7c5634] font-medium">IEEE YCCE</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM QUOTE SCROLL BANNER & BOTTLE */}
        <PirateShipFloat className="relative pt-4">
          <div className="bg-[#ede1c7] border-2 border-[#b89562] rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto text-center sm:text-left">
            <div className="flex items-center gap-4">
              <PirateSpinWheel className="w-12 h-12 rounded-full bg-[#3a2012] text-[#ffd700] flex items-center justify-center font-pirate text-2xl shrink-0 shadow-md cursor-pointer">
                ☸
              </PirateSpinWheel>
              <div>
                <p className="font-serif italic font-semibold text-lg text-[#2b1810]">
                  “Alone we can do so little; together we can do so much.”
                </p>
                <span className="font-sans text-xs font-bold text-[#8c1d1a] uppercase tracking-wider block mt-1">
                  — Helen Keller —
                </span>
              </div>
            </div>

            {/* Bottle note on bottom right */}
            <div className="px-4 py-2 rounded-xl bg-[#3a2012] border border-[#d4af37]/60 text-[#fce8c3] font-pirate text-xs tracking-wider shrink-0 shadow-lg flex items-center gap-2">
              <span>🍾</span>
              <span>THANK YOU TO OUR INCREDIBLE CREW!</span>
            </div>
          </div>
        </PirateShipFloat>

      </div>
    </section>
  );
}
