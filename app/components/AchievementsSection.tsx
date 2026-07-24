"use client";

import React from "react";
import {
  Users,
  Swords,
  Compass,
  Trophy,
  Handshake,
  Globe,
  Star,
  Building2,
  Video,
  Heart,
  Award,
  Anchor,
} from "lucide-react";

interface MainStat {
  number: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

interface SecondaryStat {
  icon: React.ReactNode;
  number: string;
  label: string;
  description: string;
}

export default function AchievementsSection() {
  const mainStats: MainStat[] = [
    {
      icon: <Users className="w-8 h-8 text-[#8c1d1a]" />,
      number: "3,500+",
      label: "PARTICIPANTS",
      description: "Brilliant minds that sailed with us",
    },
    {
      icon: <Swords className="w-8 h-8 text-[#8c1d1a]" />,
      number: "50+",
      label: "TEAMS",
      description: "Teams that collaborated & conquered",
    },
    {
      icon: <Compass className="w-8 h-8 text-[#8c1d1a]" />,
      number: "50+",
      label: "PROJECTS",
      description: "Innovative solutions built with purpose",
    },
    {
      icon: <Trophy className="w-8 h-8 text-[#8c1d1a]" />,
      number: "₹40K+",
      label: "PRIZE POOL",
      description: "Bounties for top hacker teams",
    },
    {
      icon: <Globe className="w-8 h-8 text-[#8c1d1a]" />,
      number: "12+",
      label: "HOURS",
      description: "Non-stop coding & innovation voyage",
    },
  ];

  const secondaryStats: SecondaryStat[] = [
    {
      icon: <Star className="w-5 h-5 text-amber-700 fill-amber-700" />,
      number: "5+",
      label: "YEARS",
      description: "Of organizing impactful hackathons",
    },
    {
      icon: <Video className="w-5 h-5 text-amber-800" />,
      number: "50+",
      label: "MEDIA FEATURES",
      description: "Featured in leading media platforms",
    },
    {
      icon: <Heart className="w-5 h-5 text-[#8c1d1a] fill-[#8c1d1a]" />,
      number: "100%",
      label: "DEDICATION",
      description: "To empowering student innovators",
    },
    {
      icon: <Building2 className="w-5 h-5 text-amber-800" />,
      number: "5+",
      label: "PARTNERS",
      description: "Collaborating for maximum impact",
    },
  ];

  return (
    <section
      id="achievements"
      className="relative isolate w-full min-h-screen flex flex-col justify-center overflow-hidden py-16 sm:py-24 scroll-mt-20"
    >
      {/* achivements-bg.svg covering full section as background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
        style={{ backgroundImage: "url('/achievements-bg.svg')" }}
      >
        {/* Soft warmth gradient overlays for continuous section blending */}
        <div className="absolute inset-0 bg-linear-to-r from-[#faf4e5]/20  to-[#faf4e5]/20 -z-10" />
        <div className="absolute inset-0 bg-linear-to-b from-[#faf4e5] via-transparent to-[#faf4e5] -z-10" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between min-h-[85vh] space-y-10">

        {/* SECTION HEADER MATCHING ACHIEVEMENTS.PNG */}
        <div className="text-center max-w-3xl mx-auto pt-2">
          {/* Top Crimson Banner Ribbon */}
          <div className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full border border-[#d4af37] bg-[#8c1d1a] text-white font-pirate text-base sm:text-lg font-bold shadow-md mb-3">
            <Swords className="w-4 h-4 text-amber-300" />
            <span>OUR ACHIEVEMENTS</span>
            <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
          </div>

          {/* Headline */}
          <div className="space-y-0.5">
            <h2 className="font-pirate text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wider text-[#2b1810] drop-shadow-sm leading-none">
              OUR VOYAGE.
            </h2>
            <h2 className="font-pirate text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wider text-[#8c1d1a] drop-shadow-md leading-none">
              OUR ACHIEVEMENTS.
            </h2>
          </div>

          {/* Anchor Divider */}
          <div className="flex items-center justify-center gap-3 my-3 max-w-xs mx-auto">
            <div className="h-0.5 flex-1 bg-linear-to-r from-transparent to-[#8c1d1a]/50" />
            <Anchor className="w-5 h-5 text-[#8c1d1a]" />
            <div className="h-0.5 flex-1 bg-linear-to-l from-transparent to-[#8c1d1a]/50" />
          </div>

          {/* Subtitle */}
          <p className="text-[#3d271d] font-sans font-semibold text-sm sm:text-base tracking-wide max-w-xl mx-auto">
            Every number tells a story of passion, collaboration, and the relentless pursuit of innovation.
          </p>
        </div>

        {/* ROW 1: 6 MAIN PARCHMENT STAT CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 items-stretch">
          {mainStats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-between text-center group hover:-translate-y-1 transition-all duration-300 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/card.png')" }}
            >
              {/* Top Icon */}
              <div className="mb-2 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>

              {/* Stat Number */}
              <span className="font-inter text-3xl sm:text-4xl font-extrabold text-[#8c1d1a] leading-none my-1 drop-shadow-xs">
                {stat.number}
              </span>

              {/* Label */}
              <span className="font-mono text-xs font-bold text-[#2b1810] uppercase tracking-wider">
                {stat.label}
              </span>

              {/* Star separator */}
              <Star className="w-3 h-3 text-[#c8a355] fill-[#c8a355] my-1" />

              {/* Description */}
              <p className="text-[11px] font-sans font-medium text-[#4a3224] leading-snug">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* ROW 2: WOODEN PLANK & SECONDARY LAUREL WREATH STATS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Bottom Left: Wood Plank Sign (4 cols) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-gradient-to-br from-[#26170e] via-[#1a0e08] to-[#120804] border-2 border-[#5c381e] text-white shadow-2xl relative flex flex-col justify-between overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-pirate text-2xl font-extrabold text-amber-300 tracking-wider mb-2 drop-shadow-sm flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-400" />
                <span>A LEGACY OF IMPACT</span>
              </h3>
              <p className="text-xs sm:text-sm font-sans font-medium text-amber-100/80 leading-relaxed">
                Building more than projects.<br />
                Building a better future.
              </p>
            </div>

            {/* Skull Watermark */}
            <span className="absolute right-3 bottom-2 text-5xl text-amber-500/10 pointer-events-none font-pirate">
              ☠
            </span>
          </div>

          {/* Bottom Right: 4 Laurel Wreath Secondary Stats Container (8 cols) */}
          <div
            className="lg:col-span-8 rounded-2xl p-5 sm:p-8 flex items-center bg-cover bg-center bg-no-repeat"
            // style={{ backgroundImage: "url('/parchment_paper_landscape.png')" }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {secondaryStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-3 rounded-xl bg-cover bg-center bg-no-repeat transition-colors"
                  style={{ backgroundImage: "url('/card.png')" }}
                >
                  {/* Badge Icon */}
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-[#c8a355] flex items-center justify-center mb-1.5 shadow-xs">
                    {stat.icon}
                  </div>

                  {/* Stat Number & Label */}
                  <div className="flex items-center gap-1 font-inter text-xl font-bold text-[#8c1d1a] leading-none">
                    <span>{stat.number}</span>
                    <span className="text-xs font-inter font-bold  text-[#8c1d1a] uppercase">{stat.label}</span>
                  </div>

                  {/* Description */}
                  <p className="text-[10px] font-inter font-medium text-[#4a3224] mt-1 leading-tight">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM RIBBON BANNER */}
        <div className="flex justify-center pt-2">
          <div className="px-8 py-3 rounded-2xl bg-gradient-to-r from-[#ebdcb9] via-[#f5eacc] to-[#ebdcb9] border-2 border-[#c8a355] text-center shadow-lg max-w-xl w-full">
            <div className="font-pirate text-base sm:text-lg font-bold text-[#1e120d] uppercase tracking-wider flex items-center justify-center gap-2">
              <Compass className="w-5 h-5 text-[#8c1d1a]" />
              <span>Different journeys. One destination.</span>
            </div>
            <div className="text-xs font-mono font-bold text-[#8c1d1a] tracking-widest mt-0.5 uppercase">
              INNOVATE • COLLABORATE • CONQUER
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
