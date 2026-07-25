"use client";

import React from "react";
import Image from "next/image";
import { Users, Megaphone, Compass, Package } from "lucide-react";
import {
  PirateScrollReveal,
  PirateInteractiveCard,
  PirateSpinWheel,
} from "./PirateMotion";

export default function SponsorsSection() {
  const organizingPartners = [
    {
      name: "Qythera",
      logo: "/sponsors/Qythera.jpg",
      role: "Organizing Partner",
    },
    {
      name: "GFG (GeeksforGeeks)",
      logo: "/sponsors/GFG.jpg",
      role: "Organizing Partner",
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col space-y-12">
        
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
            <h2 className="font-pirate text-5xl sm:text-7xl md:text-8xl font-bold tracking-wider text-[#2b1810] drop-shadow-md">
              ORGANIZING PARTNERS
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
            We are proud to be supported by our esteemed organizing partners.
          </p>
        </PirateScrollReveal>

        {/* ORGANIZING PARTNERS CONTAINER */}
        <div className="flex flex-col items-center space-y-6">
          {/* Header Ribbon */}
          <div className="bg-[#8c1d1a] text-[#fce8c3] px-8 py-2 rounded-lg font-pirate text-xl sm:text-2xl tracking-widest border border-[#d4af37]/60 shadow-md mb-2 flex items-center gap-3">
            <span>👑</span>
            <span>OFFICIAL ORGANIZING PARTNERS</span>
            <span>👑</span>
          </div>

          {/* Logo Grid for Organizing Partners */}
          <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6 px-2 sm:px-4">
            {organizingPartners.map((partner, index) => (
              <PirateInteractiveCard
                key={index}
                delay={index * 0.1}
                className="bg-white/95 backdrop-blur-xs border-2 border-[#d4af37] rounded-2xl p-6 shadow-lg hover:shadow-2xl flex flex-col items-center justify-center min-h-[170px] text-center group transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 px-3 py-0.5 bg-[#8c1d1a] text-[#fce8c3] text-[11px] font-pirate tracking-wider rounded-full shadow-xs">
                  Organizing Partner
                </div>
                <div className="relative w-full h-28 flex items-center justify-center mt-3">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={260}
                    height={130}
                    className="max-h-24 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="mt-3 text-[#2b1810] font-sans font-bold text-lg tracking-wide">
                  {partner.name}
                </span>
              </PirateInteractiveCard>
            ))}
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
