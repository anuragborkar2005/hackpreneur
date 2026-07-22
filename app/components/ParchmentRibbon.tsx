"use client";

import React from "react";

export default function ParchmentRibbon() {
  const items = [
    {
      icon: "🧭",
      title: "INNOVATE",
      desc: "Solve real-world problems with groundbreaking ideas.",
    },
    {
      icon: "📦",
      title: "COLLABORATE",
      desc: "Team up with the brightest minds and build together.",
    },
    {
      icon: "⚔️",
      title: "CONQUER",
      desc: "Compete, learn, and win exciting prizes.",
    },
    {
      icon: "☸️",
      title: "CREATE IMPACT",
      desc: "Build solutions that shape a better tomorrow.",
    },
    {
      icon: "🍾",
      title: "UNLOCK OPPORTUNITIES",
      desc: "Get noticed by top companies and mentors.",
    },
  ];

  return (
    <div className="w-full bg-[#f4e8c1] border-y border-[#d4af37]/60 py-6 px-4 relative shadow-[inset_0_0_30px_rgba(139,69,19,0.15)] overflow-hidden">
      {/* Scroll Texture Overlay */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-amber-900/15">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start sm:items-center gap-3.5 px-3 pt-3 sm:pt-0 first:pt-0 group cursor-default"
          >
            <div className="w-11 h-11 rounded-full bg-[#e8d7a7] border border-[#b8860b]/40 flex items-center justify-center text-2xl shrink-0 shadow-inner group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <h4 className="font-pirate text-lg font-bold text-[#1e120d] tracking-wide group-hover:text-[#8b1e1b] transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-[#5c3e2e] leading-snug font-sans font-medium">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
