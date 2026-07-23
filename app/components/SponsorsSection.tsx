"use client";

import React from "react";
import { Users, Megaphone, Compass, Package } from "lucide-react";
import {
  PirateScrollReveal,
  PirateInteractiveCard,
  PirateSpinWheel,
  PirateShipFloat,
} from "./PirateMotion";

export default function SponsorsSection() {
  const platinumSponsors = [
    {
      name: "Google",
      logo: (
        <div className="flex items-center gap-1 font-sans font-bold text-2xl tracking-tight">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </div>
      ),
    },
    {
      name: "Microsoft",
      logo: (
        <div className="flex items-center gap-2 font-sans font-semibold text-xl text-[#5e5e5e]">
          <div className="grid grid-cols-2 gap-0.5 w-5 h-5 shrink-0">
            <div className="bg-[#f25022] w-full h-full" />
            <div className="bg-[#7fba00] w-full h-full" />
            <div className="bg-[#00a4ef] w-full h-full" />
            <div className="bg-[#ffb900] w-full h-full" />
          </div>
          <span>Microsoft</span>
        </div>
      ),
    },
    {
      name: "AWS",
      logo: (
        <div className="flex flex-col items-center leading-none">
          <span className="font-sans font-black text-2xl text-[#232f3e] tracking-tighter">
            aws
          </span>
          <div className="w-10 h-2 border-b-2 border-r-2 border-[#ff9900] rounded-full transform -rotate-12 -mt-1" />
        </div>
      ),
    },
    {
      name: "Devfolio",
      logo: (
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-[#3770FF]">
          <div className="w-6 h-6 bg-[#3770FF] rounded-sm transform rotate-45 flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-white rounded-xs" />
          </div>
          <span className="text-[#273240] tracking-tight">Devfolio</span>
        </div>
      ),
    },
    {
      name: "MLH",
      logo: (
        <div className="flex flex-col items-center leading-none">
          <span className="font-sans font-extrabold text-2xl tracking-tighter bg-gradient-to-r from-[#D92C27] via-[#0089C3] to-[#F1B522] bg-clip-text text-transparent">
            MLH
          </span>
          <span className="text-[7px] font-mono font-bold tracking-widest text-[#231f20] mt-0.5 uppercase">
            MAJOR LEAGUE HACKING
          </span>
        </div>
      ),
    },
  ];

  const goldSponsors = [
    {
      name: "GitHub",
      logo: (
        <div className="flex items-center gap-2 font-sans font-bold text-lg text-[#24292e]">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span>GitHub</span>
        </div>
      ),
    },
    {
      name: "Intel",
      logo: (
        <div className="font-sans font-bold text-2xl text-[#0068B5] tracking-tight flex items-center">
          <span>intel</span>
          <span className="w-1.5 h-1.5 bg-[#0068B5] rounded-full self-start mt-1 ml-0.5" />
        </div>
      ),
    },
    {
      name: "Docker",
      logo: (
        <div className="flex items-center gap-2 font-sans font-extrabold text-lg text-[#1D63ED] tracking-wider uppercase">
          <div className="w-6 h-5 bg-[#1D63ED] rounded-xs relative flex items-center justify-center">
            <div className="w-1.5 h-1 bg-white absolute top-1 left-1" />
          </div>
          <span>DOCKER</span>
        </div>
      ),
    },
    {
      name: "Postman",
      logo: (
        <div className="flex items-center gap-2 font-sans font-bold text-base text-[#FF6C37] tracking-wider uppercase">
          <div className="w-6 h-6 rounded-full bg-[#FF6C37] text-white flex items-center justify-center font-black text-xs">
            🚀
          </div>
          <span className="text-[#1C2733]">POSTMAN</span>
        </div>
      ),
    },
    {
      name: "MongoDB",
      logo: (
        <div className="flex items-center gap-1.5 font-sans font-bold text-lg text-[#001E2B]">
          <span className="text-[#00ED64] text-xl font-serif">🍃</span>
          <span>MongoDB</span>
        </div>
      ),
    },
    {
      name: "Replit",
      logo: (
        <div className="flex items-center gap-2 font-sans font-extrabold text-lg text-[#F26207] tracking-wider uppercase">
          <div className="w-5 h-5 bg-[#F26207] rounded-xs flex items-center justify-center text-white text-xs font-mono font-bold">
            R
          </div>
          <span className="text-[#0D1525]">REPLIT</span>
        </div>
      ),
    },
  ];

  const silverSponsors = [
    {
      name: "HackerRank",
      logo: (
        <div className="flex items-center gap-2 font-sans font-bold text-base text-[#2EC866]">
          <div className="w-5 h-5 bg-[#2EC866] text-white flex items-center justify-center rounded-xs font-black text-xs">
            H
          </div>
          <span className="text-[#0E141E]">HackerRank</span>
        </div>
      ),
    },
    {
      name: "DigitalOcean",
      logo: (
        <div className="flex items-center gap-2 font-sans font-semibold text-base text-[#0080FF]">
          <div className="w-5 h-5 bg-[#0080FF] rounded-full flex items-center justify-center text-white text-[10px] font-bold">
            DO
          </div>
          <span>DigitalOcean</span>
        </div>
      ),
    },
    {
      name: "Canva",
      logo: (
        <div className="font-serif italic font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#00C4CC] to-[#7D2AE8]">
          Canva
        </div>
      ),
    },
    {
      name: "AWS Educate",
      logo: (
        <div className="flex items-center gap-1 font-sans font-bold text-sm text-[#232f3e]">
          <span>aws</span>
          <span className="text-[#ff9900] font-normal">educate</span>
        </div>
      ),
    },
    {
      name: "JetBrains",
      logo: (
        <div className="flex items-center gap-1 font-sans font-extrabold text-sm text-[#000000] tracking-wider">
          <div className="w-4 h-4 bg-black text-white flex items-center justify-center text-[10px]">
            _
          </div>
          <span>JETBRAINS</span>
        </div>
      ),
    },
    {
      name: "Notion",
      logo: (
        <div className="flex items-center gap-2 font-sans font-bold text-base text-[#000000]">
          <div className="w-5 h-5 border-2 border-black rounded-sm flex items-center justify-center font-mono text-xs font-black">
            N
          </div>
          <span>Notion</span>
        </div>
      ),
    },
  ];

  return (
    <section
      id="sponsors"
      className="relative isolate w-full min-h-screen flex flex-col justify-center overflow-hidden py-16 sm:py-24 scroll-mt-20"
    >
      {/* Pirate Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20 brightness-[1.02] contrast-[1.02]"
        style={{ backgroundImage: "url('/about_bg.svg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#faf4e5]/95 via-[#faf4e5]/85 via-50% to-[#faf4e5]/80 -z-10" />
        <div className="absolute inset-0 bg-linear-to-b from-[#faf4e5] via-transparent to-[#faf4e5] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col space-y-10">
        
        {/* HEADER SECTION */}
        <PirateScrollReveal className="text-center space-y-3">
          {/* Top Skull Emblem & Badge */}
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-[#8c1d1a] text-[#fce8c3] font-pirate text-lg sm:text-xl tracking-widest shadow-lg border border-[#d4af37]/50 relative">
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-6 border-y-transparent border-r-6 border-r-[#8c1d1a]" />
            <span>★ THANK YOU TO OUR TREASURE CHESTS! ★</span>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-6 border-y-transparent border-l-6 border-l-[#8c1d1a]" />
          </div>

          {/* Main Title */}
          <div className="flex items-center justify-center gap-4">
            <PirateSpinWheel className="text-[#8c1d1a] text-3xl font-pirate hidden sm:inline cursor-pointer">
              ☸
            </PirateSpinWheel>
            <h2 className="font-pirate text-6xl sm:text-7xl md:text-8xl font-bold tracking-wider text-[#2b1810] drop-shadow-md">
              OUR SPONSORS
            </h2>
            <PirateSpinWheel className="text-[#8c1d1a] text-3xl font-pirate hidden sm:inline cursor-pointer">
              ☸
            </PirateSpinWheel>
          </div>

          {/* Anchor & Line Divider */}
          <div className="flex items-center justify-center gap-3 max-w-sm mx-auto">
            <div className="h-0.5 flex-1 bg-linear-to-r from-transparent via-[#8c1d1a]/60 to-[#8c1d1a]" />
            <span className="text-[#8c1d1a] text-2xl font-pirate">⚓</span>
            <div className="h-0.5 flex-1 bg-linear-to-l from-transparent via-[#8c1d1a]/60 to-[#8c1d1a]" />
          </div>

          {/* Subtitle */}
          <p className="text-[#3d271d] font-sans font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Behind every great voyage is a crew that believes in the mission.
            We are proud to be supported by amazing partners and sponsors.
          </p>
        </PirateScrollReveal>

        {/* SPONSORS TIERS CONTAINER */}
        <div className="space-y-8">
          
          {/* 1. PLATINUM SPONSORS */}
          <div className="flex flex-col items-center">
            {/* Tier Header Ribbon */}
            <div className="bg-[#8c1d1a] text-[#fce8c3] px-8 py-2 rounded-lg font-pirate text-xl sm:text-2xl tracking-widest border border-[#d4af37]/60 shadow-md mb-4 flex items-center gap-3">
              <span>✦</span>
              <span>PLATINUM SPONSORS</span>
              <span>✦</span>
            </div>

            {/* Logo Grid */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {platinumSponsors.map((sponsor, index) => (
                <PirateInteractiveCard
                  key={index}
                  delay={index * 0.08}
                  className="bg-white/90 backdrop-blur-xs border-2 border-[#b89562] rounded-2xl p-6 shadow-md hover:shadow-xl flex items-center justify-center min-h-[90px] text-center"
                >
                  {sponsor.logo}
                </PirateInteractiveCard>
              ))}
            </div>
          </div>

          {/* 2. GOLD SPONSORS */}
          <div className="flex flex-col items-center">
            {/* Tier Header Ribbon */}
            <div className="bg-[#1b2a47] text-[#ffd700] px-8 py-2 rounded-lg font-pirate text-xl sm:text-2xl tracking-widest border border-[#d4af37]/60 shadow-md mb-4 flex items-center gap-3">
              <span>✦</span>
              <span>GOLD SPONSORS</span>
              <span>✦</span>
            </div>

            {/* Logo Grid */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {goldSponsors.map((sponsor, index) => (
                <PirateInteractiveCard
                  key={index}
                  delay={index * 0.06}
                  className="bg-white/90 backdrop-blur-xs border-2 border-[#b89562] rounded-2xl p-5 shadow-md hover:shadow-xl flex items-center justify-center min-h-[85px] text-center"
                >
                  {sponsor.logo}
                </PirateInteractiveCard>
              ))}
            </div>
          </div>

          {/* 3. SILVER SPONSORS */}
          <div className="flex flex-col items-center">
            {/* Tier Header Ribbon */}
            <div className="bg-[#3a2012] text-[#fce8c3] px-8 py-2 rounded-lg font-pirate text-xl sm:text-2xl tracking-widest border border-[#8c5a2b] shadow-md mb-4 flex items-center gap-3">
              <PirateSpinWheel>☸</PirateSpinWheel>
              <span>SILVER SPONSORS</span>
              <PirateSpinWheel>☸</PirateSpinWheel>
            </div>

            {/* Logo Grid */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {silverSponsors.map((sponsor, index) => (
                <PirateInteractiveCard
                  key={index}
                  delay={index * 0.05}
                  className="bg-white/90 backdrop-blur-xs border-2 border-[#b89562] rounded-2xl p-5 shadow-md hover:shadow-xl flex items-center justify-center min-h-[80px] text-center"
                >
                  {sponsor.logo}
                </PirateInteractiveCard>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: WHY PARTNER WITH HACKPRENEUR? & TOGETHER BANNER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-4">
          
          {/* WHY PARTNER WITH HACKPRENEUR? (Parchment Scroll Banner) */}
          <div className="lg:col-span-9 bg-[#f6ebd4] border-2 border-[#b89562] rounded-2xl p-6 shadow-xl relative flex flex-col justify-between overflow-hidden">
            {/* Header Banner */}
            <div className="w-full bg-[#3a2012] text-[#fce8c3] py-2.5 px-4 rounded-lg text-center font-pirate text-xl tracking-wider font-bold mb-6 flex items-center justify-center gap-2 border border-[#8c5a2b]">
              <span>☠</span>
              <span>WHY PARTNER WITH HACKPRENEUR?</span>
              <span>☠</span>
            </div>

            {/* 4 Feature Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center p-3 rounded-xl bg-[#ede2c8]/60 border border-[#d8c098]">
                <div className="w-12 h-12 rounded-full bg-[#3a2012] text-[#ffd700] flex items-center justify-center mb-2 shadow-md">
                  <Users className="w-6 h-6" />
                </div>
                <p className="font-sans font-bold text-sm text-[#2b1810] leading-snug">
                  Connect with 1000+ talented innovators
                </p>
              </div>

              <div className="flex flex-col items-center p-3 rounded-xl bg-[#ede2c8]/60 border border-[#d8c098]">
                <div className="w-12 h-12 rounded-full bg-[#3a2012] text-[#ffd700] flex items-center justify-center mb-2 shadow-md">
                  <Megaphone className="w-6 h-6" />
                </div>
                <p className="font-sans font-bold text-sm text-[#2b1810] leading-snug">
                  Boost brand visibility among tech enthusiasts
                </p>
              </div>

              <div className="flex flex-col items-center p-3 rounded-xl bg-[#ede2c8]/60 border border-[#d8c098]">
                <div className="w-12 h-12 rounded-full bg-[#3a2012] text-[#ffd700] flex items-center justify-center mb-2 shadow-md">
                  <Compass className="w-6 h-6" />
                </div>
                <p className="font-sans font-bold text-sm text-[#2b1810] leading-snug">
                  Be part of a mission driving innovation and impact
                </p>
              </div>

              <div className="flex flex-col items-center p-3 rounded-xl bg-[#ede2c8]/60 border border-[#d8c098]">
                <div className="w-12 h-12 rounded-full bg-[#3a2012] text-[#ffd700] flex items-center justify-center mb-2 shadow-md">
                  <Package className="w-6 h-6" />
                </div>
                <p className="font-sans font-bold text-sm text-[#2b1810] leading-snug">
                  Build lasting relationships & future collaborations
                </p>
              </div>
            </div>
          </div>

          {/* TOGETHER WE BUILD PARCHMENT NOTE (Right side) */}
          <div className="lg:col-span-3 bg-[#ede1c7] border-2 border-[#b89562] rounded-2xl p-6 shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="w-full flex justify-center text-[#8c1d1a] text-3xl font-pirate mb-2">
              ⚓
            </div>
            <h4 className="font-pirate text-xl sm:text-2xl font-extrabold text-[#8c1d1a] leading-tight tracking-wider uppercase">
              TOGETHER,
            </h4>
            <h4 className="font-pirate text-xl sm:text-2xl font-extrabold text-[#8c1d1a] leading-tight tracking-wider uppercase">
              WE BUILD.
            </h4>
            <h4 className="font-pirate text-xl sm:text-2xl font-extrabold text-[#8c1d1a] leading-tight tracking-wider uppercase">
              WE INNOVATE.
            </h4>
            <h4 className="font-pirate text-xl sm:text-2xl font-extrabold text-[#8c1d1a] leading-tight tracking-wider uppercase">
              WE CONQUER.
            </h4>

            <div className="mt-4 text-[#3a2012] text-xl font-pirate">
              ⛵
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
