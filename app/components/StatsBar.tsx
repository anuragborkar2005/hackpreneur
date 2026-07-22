"use client";

import React from "react";

export default function StatsBar() {
  const stats = [
    {
      value: "$150,000+",
      label: "TOTAL TREASURE BOUNTY",
      icon: "💎",
      detail: "Cash & Web3 Grants",
    },
    {
      value: "3,500+",
      label: "BUCCANEER HACKERS",
      icon: "🏴‍☠️",
      detail: "Global Remote & Onsite",
    },
    {
      value: "48 HOURS",
      label: "NON-STOP CODING",
      icon: "⚡",
      detail: "Live Streams & Workshops",
    },
    {
      value: "12 TRACKS",
      label: "CYBER QUESTS",
      icon: "🧭",
      detail: "AI, Web3, Defense & Hardware",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <div className="rounded-3xl glass-card border border-amber-500/30 p-6 sm:p-8 relative overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.1)]">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-2xl bg-gray-950/50 border border-amber-500/10 hover:border-amber-400/40 transition-all hover:scale-[1.02] group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-slate-900 border border-amber-400/30 flex items-center justify-center text-2xl shrink-0 group-hover:rotate-6 transition-transform shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-pirate text-3xl font-bold gold-gradient-text">
                  {stat.value}
                </span>
                <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase mt-0.5">
                  {stat.label}
                </span>
                <span className="text-[11px] text-gray-400 font-sans">
                  {stat.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
