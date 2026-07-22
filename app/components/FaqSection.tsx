"use client";

import React, { useState } from "react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who can board the HACKPRENEUR galleon?",
      a: "Developers, designers, AI researchers, Web3 engineers, and students of all experience levels are welcome! Whether you are a seasoned ship captain or a solo powder monkey, you can join.",
    },
    {
      q: "What is the team size limit for the hackathon?",
      a: "Teams can range from 1 to 4 buccaneers. If you don't have a team before the hackathon, our Discord matchmaking channel and Day 1 speed-networking event will help you find crew members.",
    },
    {
      q: "How are projects judged and bounties awarded?",
      a: "Projects are evaluated by industry judges based on Technical Depth, Originality/Innovation, UI/UX polish, and Practical Utility. Cash prizes and crypto bounty grants are disbursed post-event.",
    },
    {
      q: "Is there a registration fee or cost to enter?",
      a: "Zero golden coins! HACKPRENEUR 2026 is 100% free for all accepted participants, including free cloud computing credits, API keys, and swag packs.",
    },
    {
      q: "Can I build on a project I started before the event?",
      a: "All hackathon code must be written during the 48-hour event window. You may bring ideas, wireframes, and open-source libraries, but main development begins at Anchors Weigh on Day 1.",
    },
  ];

  return (
    <section id="faq" className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full border border-[#d4af37] bg-[#23160e] text-[#f4ecd8] font-pirate text-base font-bold shadow-md mb-3">
          <span>⚓</span> CAPTAIN&apos;S LOG & ANSWERS <span>⚓</span>
        </div>
        <h2 className="font-pirate text-4xl sm:text-5xl font-extrabold text-[#8c1d1a] drop-shadow-sm">
          FREQUENTLY ASKED QUESTIONS
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="parchment-card rounded-xl border border-[#d4af37] overflow-hidden transition-all shadow-sm"
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-pirate text-xl text-[#1e120d] font-bold hover:text-[#8b1e1b] transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="text-[#8b1e1b] text-base">⚓</span> {faq.q}
              </span>
              <span className="font-mono text-[#8b1e1b] text-2xl font-bold">
                {openIdx === idx ? "−" : "+"}
              </span>
            </button>

            {openIdx === idx && (
              <div className="px-6 pb-5 pt-1 text-[#4a3224] font-sans text-sm sm:text-base border-t border-[#d4af37]/30 leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
