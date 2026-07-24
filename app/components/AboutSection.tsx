"use client";

import React from "react";
import {
  Users,
  Compass,
  ScrollText,
  Gift,
  GraduationCap,
  Lightbulb,
  Handshake,
  Anchor,
  Briefcase,
  Trophy,
} from "lucide-react";

export default function AboutSection({
  onOpenRegister,
}: {
  onOpenRegister: () => void;
}) {
  return (
    <section
      id="about"
      className="relative isolate w-full min-h-screen flex flex-col justify-center overflow-hidden py-16 sm:py-20 scroll-mt-20"
    >
      {/* about_bg.svg covering full section */}
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat -z-20 brightness-[1.02] contrast-[1.02]"
        style={{ backgroundImage: "url('/about_bg.svg')" }}
      >
        {/* Soft warmth gradient overlays for continuous section blending */}
        <div className="absolute inset-0 bg-linear-to-r from-[#faf4e5]/95 via-[#faf4e5]/85 via-50% to-transparent -z-10" />
        <div className="absolute inset-0 bg-linear-to-b from-[#faf4e5] via-transparent to-[#faf4e5] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between min-h-[85vh] space-y-12">
        {/* TOP ABOUT HEADLINE & VOYAGE INTRO */}
        <div className="max-w-2xl pt-4">
          {/* Title */}
          <div className="space-y-0.5">
            <h2 className="font-pirate text-5xl sm:text-7xl font-bold tracking-tight text-[#2b1810] drop-shadow-sm leading-none">
              ABOUT
            </h2>
            <h2 className="font-pirate text-5xl sm:text-8xl font-extrabold tracking-wide text-[#8c1d1a] drop-shadow-md leading-none">
              HACKPRENEUR
            </h2>
          </div>

          {/* Skull & Bones Divider Line */}
          <div className="flex items-center gap-3 my-4 max-w-sm">
            <div className="h-0.5 flex-1 bg-linear-to-r from-transparent via-[#8c1d1a]/60 to-[#8c1d1a]" />
            <span className="text-[#8c1d1a] text-2xl font-pirate animate-pulse">
              ☠
            </span>
            <div className="h-0.5 flex-1 bg-linear-to-l from-transparent via-[#8c1d1a]/60 to-[#8c1d1a]" />
          </div>

          {/* Subtitle */}
          <h3 className="font-sans font-black text-xs sm:text-sm uppercase tracking-[0.25em] text-[#2b1810] mb-3">
            MORE THAN A HACKATHON. IT’S A{" "}
            <span className="text-[#8c1d1a] font-extrabold underline decoration-2 underline-offset-4">
              VOYAGE.
            </span>
          </h3>

          {/* Description Paragraph */}
          <p className="text-[#3a2216] font-sans font-medium text-sm sm:text-base leading-relaxed bg-[#faf4e5]/80 backdrop-blur-xs p-5 rounded-2xl border border-[#c8a355]/40 shadow-inner max-w-xl">
            Hackpreneur is a platform for dreamers, builders, and problem
            solvers to come together, collaborate, and create impactful
            solutions. Inspired by the spirit of adventure, we challenge you to
            think beyond boundaries and build a future worth conquering.
          </p>
        </div>

        {/* BOTTOM CONTENT GRID MATCHING ABOUT.PNG */}
        <div className="space-y-8">
          {/* ROW 1: OUR MISSION & HACKPRENEUR AT A GLANCE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* OUR MISSION (Left Column, 5 cols) */}
            <div className="lg:col-span-5 flex flex-col relative">
              {/* Dark Scroll Ribbon Title */}
              <div className="self-start px-10 py-6 rounded-t-xl bg-[url('/images/long_flag.png')] bg-contain bg-no-repeat text-[#f4ecd8] font-pirate text-lg font-bold flex items-center gap-2 z-10">
                <Compass className="w-5 h-5 text-amber-400" /> OUR MISSION
              </div>

              {/* Parchment Box with Dashed Border */}
              <div className="flex-1 parchment-card rounded-2xl p-6 sm:p-7 bg-[url('/parchment_paper_landscape.png')] bg-cover border-2 border-dashed border-[#c8a355] relative flex flex-col justify-between shadow-xl">
                <p className="text-[#3a2216] font-sans font-medium text-xs sm:text-sm leading-relaxed max-w-md">
                  To empower innovators to solve real-world problems through
                  technology and creativity. We believe in learning by building,
                  growing together, and making an impact that lasts beyond the
                  weekend.
                </p>

                {/* Right Beach Chest Graphic Sketch */}
                <div className="mt-4 flex items-end justify-between">
                  {/* Red X Mark */}
                  <span className="text-[#a81c19] text-2xl font-black font-pirate">
                    ❌
                  </span>

                  {/* Treasure Chest Sketch Badge */}
                  <div className="p-3 rounded-xl bg-[#e6d8b8]/60 border border-[#c8a355]/40 flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-[#8c1d1a]" />
                    <span className="text-[11px] font-mono font-bold text-[#5c381e] uppercase tracking-wider">
                      UNEARTH REAL IMPACT
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* HACKPRENEUR AT A GLANCE (Right Column, 7 cols) */}
            <div className="lg:col-span-7 flex flex-col relative">
              {/* 5 Stat Cards Container */}
              <div className="flex-1 rounded-2xl p-4 sm:p-6 flex justify-center items-center">
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 w-full">
                    {/* Stat 1 */}
                    <div className="p-3 rounded-xl bg-[#faf4e6] border border-[#c8a355]/40
                                    flex flex-col items-center justify-center gap-1
                                    shadow-xs hover:border-[#8c1d1a] transition-all">
                      <Users className="w-6 h-6 text-[#8c1d1a]" />
                      <span className="font-inter text-xl font-black text-[#8c1d1a] leading-none">
                        1000+
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#3a2216] uppercase tracking-wider leading-none">
                        PARTICIPANTS
                      </span>
                    </div>

                    {/* Stat 2 */}
                    <div className="p-3 rounded-xl bg-[#faf4e6] border border-[#c8a355]/40
                                    flex flex-col items-center justify-center gap-1
                                    shadow-xs hover:border-[#8c1d1a] transition-all">
                      <Compass className="w-6 h-6 text-[#8c1d1a]" />
                      <span className="font-inter text-xl font-black text-[#8c1d1a] leading-none">
                        200+
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#3a2216] uppercase tracking-wider leading-none">
                        TEAMS
                      </span>
                    </div>

                    {/* Stat 3 */}
                    <div className="p-3 rounded-xl bg-[#faf4e6] border border-[#c8a355]/40
                                    flex flex-col items-center justify-center gap-1
                                    shadow-xs hover:border-[#8c1d1a] transition-all">
                      <ScrollText className="w-6 h-6 text-[#8c1d1a]" />
                      <span className="font-inter text-xl font-black text-[#8c1d1a] leading-none">
                        30+
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#3a2216] uppercase tracking-wider leading-none">
                        TRACKS
                      </span>
                    </div>

                    {/* Stat 4 */}
                    <div className="p-3 rounded-xl bg-[#faf4e6] border border-[#c8a355]/40
                                    flex flex-col items-center justify-center gap-1
                                    shadow-xs hover:border-[#8c1d1a] transition-all">
                      <Gift className="w-6 h-6 text-[#8c1d1a]" />
                      <span className="font-inter text-xl font-black text-[#8c1d1a] leading-none">
                        EXCITING
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#3a2216] uppercase tracking-wider leading-none">
                        PRIZES
                      </span>
                    </div>

                    {/* Stat 5 */}
                    <div className="p-3 rounded-xl bg-[#faf4e6] border border-[#c8a355]/40
                                    flex flex-col items-center justify-center gap-1
                                    shadow-xs hover:border-[#8c1d1a] transition-all col-span-2 sm:col-span-1">
                      <GraduationCap className="w-6 h-6 text-[#8c1d1a]" />
                      <span className="font-inter text-lg font-black text-[#8c1d1a] leading-none">
                        UNLIMITED
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#3a2216] uppercase tracking-wider leading-none">
                        OPPORTUNITIES
                      </span>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          {/* ROW 2: WHY JOIN US? & PIRATE QUOTE FLAG */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* WHY JOIN US? (Left Column, 8 cols) */}
            <div className="lg:col-span-8 flex flex-col relative">
              {/* Dark Scroll Ribbon Title */}
              <div className="self-start px-10 py-6 rounded-t-xl bg-[url('/images/long_flag.png')] bg-contain bg-no-repeat text-[#f4ecd8] font-pirate text-lg font-bold flex items-center gap-2 z-10">
                <span>☠</span> WHY JOIN US?
              </div>

              {/* 5 Column Cards Container */}
              <div className="flex-1 parchment-card rounded-2xl p-5 sm:p-6 border-2 border-[#c8a355] shadow-xl flex items-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full">
                  {/* 1. INNOVATE */}
                  <div className="p-3 rounded-xl bg-[#faf4e6]/80 border border-[#c8a355]/30 flex flex-col items-center text-center">
                    <Lightbulb className="w-6 h-6 text-amber-600 mb-1" />
                    <h4 className="font-pirate text-base font-bold text-[#8c1d1a] uppercase">
                      INNOVATE
                    </h4>
                    <p className="text-[11px] font-sans font-medium text-[#4a3224] mt-1 leading-snug">
                      Solve real-world problems and bring your ideas to life.
                    </p>
                  </div>

                  {/* 2. COLLABORATE */}
                  <div className="p-3 rounded-xl bg-[#faf4e6]/80 border border-[#c8a355]/30 flex flex-col items-center text-center">
                    <Handshake className="w-6 h-6 text-amber-600 mb-1" />
                    <h4 className="font-pirate text-base font-bold text-[#8c1d1a] uppercase">
                      COLLABORATE
                    </h4>
                    <p className="text-[11px] font-sans font-medium text-[#4a3224] mt-1 leading-snug">
                      Team up with bright minds and learn from the best.
                    </p>
                  </div>

                  {/* 3. GROW */}
                  <div className="p-3 rounded-xl bg-[#faf4e6]/80 border border-[#c8a355]/30 flex flex-col items-center text-center">
                    <Compass className="w-6 h-6 text-amber-600 mb-1" />
                    <h4 className="font-pirate text-base font-bold text-[#8c1d1a] uppercase">
                      GROW
                    </h4>
                    <p className="text-[11px] font-sans font-medium text-[#4a3224] mt-1 leading-snug">
                      Enhance your skills, get mentored, and level up.
                    </p>
                  </div>

                  {/* 4. WIN */}
                  <div className="p-3 rounded-xl bg-[#faf4e6]/80 border border-[#c8a355]/30 flex flex-col items-center text-center">
                    <Trophy className="w-6 h-6 text-amber-600 mb-1" />
                    <h4 className="font-pirate text-base font-bold text-[#8c1d1a] uppercase">
                      WIN
                    </h4>
                    <p className="text-[11px] font-sans font-medium text-[#4a3224] mt-1 leading-snug">
                      Compete for exciting prizes and exclusive goodies.
                    </p>
                  </div>

                  {/* 5. MAKE IMPACT */}
                  <div className="p-3 rounded-xl bg-[#faf4e6]/80 border border-[#c8a355]/30 flex flex-col items-center text-center">
                    <Anchor className="w-6 h-6 text-amber-600 mb-1" />
                    <h4 className="font-pirate text-base font-bold text-[#8c1d1a] uppercase">
                      MAKE IMPACT
                    </h4>
                    <p className="text-[11px] font-sans font-medium text-[#4a3224] mt-1 leading-snug">
                      Build solutions that create a better tomorrow.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PIRATE FLAG & ANCHOR QUOTE BANNER IMAGE (Right Column, 4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-end mb-0">
              <div className="w-full h-full min-h-50 flex flex-col justify-end gap-2">
                <span className="font-bold text-4xl text-[#4a3224] font-rocker">
                  &quot;Chart Your Course
                </span>
                <span className="font-bold text-4xl font-cinzel">
                  Build the future
                </span>
                <span className="font-bold text-4xl text-amber-700 font-script">
                  Become Legends
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
