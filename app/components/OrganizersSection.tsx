"use client";

import React from "react";
import Image from "next/image";
import {
  UserCheck,
  Lightbulb,
  Compass,
  Package,
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
          <h2 className="font-pirate text-4xl sm:text-7xl md:text-8xl font-bold tracking-wider text-[#2b1810] drop-shadow-md leading-tight py-1 break-words">
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

          {/* 1. PRESIDENT SPIRIT (Col 4 on lg) */}
          <div className="lg:col-span-4 bg-[#f6ebd4] border-2 border-[#b89562] rounded-2xl p-6 shadow-xl relative flex flex-col justify-between overflow-hidden w-full">
            {/* Header Banner */}
            <div className="w-full bg-[#3a2012] text-[#fce8c3] py-2 px-3 rounded-lg text-center font-pirate text-lg sm:text-xl tracking-wider font-bold mb-6 flex items-center justify-center gap-2 border border-[#8c5a2b]">
              <span>PRESIDENT SPIRIT</span>
            </div>

            {/* Member */}
            <div className="flex flex-col items-center text-center my-auto">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-b from-[#d4af37] via-[#8c5a2b] to-[#3a2012] shadow-lg mb-3">
                <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-[#f6ebd4]">
                  <Image
                    src="/organisers/Aditya_Gaour.png"
                    alt="Aditya Gaour"
                    fill
                    sizes="128px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <h4 className="font-serif font-bold text-xl text-[#2b1810] leading-tight">
                Aditya Gaour
              </h4>
              <span className="inline-block mt-2 px-4 py-1 bg-[#8c1d1a] text-[#fce8c3] text-xs sm:text-sm font-pirate tracking-wider rounded-full shadow-sm">
                President • Spirit
              </span>
            </div>
          </div>

          {/* 2. PRESIDENT CSI (Col 4 on lg - CENTER) */}
          <div className="lg:col-span-4 bg-[#f6ebd4] border-2 border-[#b89562] rounded-2xl p-6 shadow-xl relative flex flex-col justify-between overflow-hidden w-full">
            {/* Header Banner */}
            <div className="w-full bg-[#3a2012] text-[#fce8c3] py-2 px-3 rounded-lg text-center font-pirate text-lg sm:text-xl tracking-wider font-bold mb-6 flex items-center justify-center gap-2 border border-[#8c5a2b]">
              <span>PRESIDENT CSI</span>
            </div>

            {/* Member */}
            <div className="flex flex-col items-center text-center my-auto">
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
              <span className="inline-block mt-2 px-4 py-1 bg-[#8c1d1a] text-[#fce8c3] text-xs sm:text-sm font-pirate tracking-wider rounded-full shadow-sm">
                President • CSI
              </span>
            </div>
          </div>

          {/* 3. PRESIDENT AURA (Col 4 on lg) */}
          <div className="lg:col-span-4 bg-[#f6ebd4] border-2 border-[#b89562] rounded-2xl p-6 shadow-xl relative flex flex-col justify-between overflow-hidden w-full">
            {/* Header Banner */}
            <div className="w-full bg-[#3a2012] text-[#fce8c3] py-2 px-3 rounded-lg text-center font-pirate text-lg sm:text-xl tracking-wider font-bold mb-6 flex items-center justify-center gap-2 border border-[#8c5a2b]">
              <span>PRESIDENT AURA</span>
            </div>

            {/* Member */}
            <div className="flex flex-col items-center text-center my-auto">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-b from-[#d4af37] via-[#8c5a2b] to-[#3a2012] shadow-lg mb-3">
                <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-[#f6ebd4]">
                  <Image
                    src="/organisers/Tanushree_Meshram.png"
                    alt="Tanushree Meshram"
                    fill
                    sizes="128px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <h4 className="font-serif font-bold text-xl text-[#2b1810] leading-tight">
                Tanushree Meshram
              </h4>
              <span className="inline-block mt-2 px-4 py-1 bg-[#8c1d1a] text-[#fce8c3] text-xs sm:text-sm font-pirate tracking-wider rounded-full shadow-sm">
                President • Aura
              </span>
            </div>
          </div>

          {/* 2. ORGANIZERS & HELPLINE (Col 6 on lg) */}
          <div className="lg:col-span-6 bg-[#f6ebd4] border-2 border-[#b89562] rounded-2xl p-5 shadow-xl relative flex flex-col justify-between overflow-hidden">
            {/* Header Banner */}
            <div className="w-full bg-[#3a2012] text-[#fce8c3] py-2 px-3 rounded-lg text-center font-pirate text-lg tracking-wider font-bold mb-6 flex items-center justify-center gap-2 border border-[#8c5a2b]">
              <span>ORGANIZERS & HELPLINE</span>
            </div>

            {/* Members */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Tejasvi Jadhao */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-b from-[#d4af37] via-[#8c5a2b] to-[#3a2012] shadow-md mb-2">
                  <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-[#f6ebd4]">
                    <Image
                      src="/organisers/Tejasvi.jpg"
                      alt="Tejasvi Jadhao"
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h4 className="font-serif font-bold text-base text-[#2b1810] leading-tight">
                  Tejasvi Jadhao
                </h4>
                <p className="text-xs text-[#8c1d1a] font-sans font-bold mt-0.5">
                  VP, CSI
                </p>
                <a
                  href="tel:9403315952"
                  className="mt-2 px-3 py-1 bg-[#8c1d1a] text-[#fce8c3] text-xs font-mono font-bold rounded-lg shadow-xs hover:bg-[#a81c19] transition-colors flex items-center gap-1"
                >
                  9403315952
                </a>
              </div>

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
                <p className="text-xs text-[#8c1d1a] font-sans font-bold mt-0.5">
                  Secretary, CSI
                </p>
                <a
                  href="tel:8856012282"
                  className="mt-2 px-3 py-1 bg-[#8c1d1a] text-[#fce8c3] text-xs font-mono font-bold rounded-lg shadow-xs hover:bg-[#a81c19] transition-colors flex items-center gap-1"
                >
                  8856012282
                </a>
              </div>
            </div>
          </div>

          {/* 4. TECHNICAL TEAM (Col 6 on lg) */}
          <div className="lg:col-span-6 bg-[#f6ebd4] border-2 border-[#b89562] rounded-2xl p-5 shadow-xl relative flex flex-col justify-between overflow-hidden">
            {/* Header Banner */}
            <div className="w-full bg-[#3a2012] text-[#fce8c3] py-2 px-3 rounded-lg text-center font-pirate text-lg tracking-wider font-bold mb-6 flex items-center justify-center gap-2 border border-[#8c5a2b]">
              <span>&lt;/&gt;</span>
              <span>TECHNICAL TEAM</span>
            </div>

            {/* Members */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
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
                  Technical Team
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
                  Technical Team
                </p>
              </div>

              {/* Dhairya Deulkar */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-b from-[#d4af37] via-[#8c5a2b] to-[#3a2012] shadow-md mb-2">
                  <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-[#f6ebd4]">
                    <Image
                      src="/organisers/Dhairya_Deulkar.jpeg"
                      alt="Dhairya Deulkar"
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h4 className="font-serif font-bold text-base text-[#2b1810] leading-tight">
                  Dhairya Deulkar
                </h4>
                <p className="text-xs text-[#8c1d1a] font-sans font-semibold mt-0.5">
                  Technical Team
                </p>
              </div>
            </div>
          </div>



        </div>

        {/* BOTTOM ROW: ADVISORY BOARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* ADVISORY BOARD (Dark Wood Plank Card) */}
          <div className="lg:col-span-12 bg-[#23150d] border-2 border-[#d4af37]/70 rounded-2xl p-6 shadow-2xl relative flex flex-col justify-between text-[#fce8c3] overflow-hidden">
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
