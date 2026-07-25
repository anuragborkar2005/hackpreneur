"use client";

import React, { useState } from "react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is HackPreneur '26 and when is it taking place?",
      a: "HackPreneur '26 is the 1’st International Innovation Hackathon presented by Itechroots 16.0. It is a 12-hour hybrid hackathon happening on 8th August 2026 at IT Department, YCCE.",
    },
    {
      q: "What is the team size and registration fee?",
      a: "Teams can have 4 to 6 members. The registration fee is ₹600 per team. You can register via the official form link.",
    },
    {
      q: "What are the prizes for HackPreneur '26?",
      a: "🥇 1st Prize: ₹21,000 | 🥈 2nd Prize: ₹15,000 | 🥉 3rd Prize: ₹5K Capello Vouchers, plus trophies, certificates, and exciting perks!",
    },
    {
      q: "Who is partnering for HackPreneur '26?",
      a: "GDG Cloud Nagpur (Google Developer Group Cloud Nagpur) is partnering with HackPreneur '26 alongside Qythera.",
    },
    {
      q: "How can I participate if I am not on campus?",
      a: "HackPreneur '26 is conducted in Hybrid Mode, allowing remote/online participation as well as in-person hackathon attendance at the IT Department, YCCE.",
    },
    {
      q: "Whom can I contact for queries?",
      a: "You can reach out directly to the organizers: Tejasvi Jadhao (VP, CSI) at 9403315952 or Ojas Satdeve (Secretary, CSI) at 8856012282.",
    },
  ];

  return (
    <section id="faq" className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20">
      <div className="text-center mb-12 w-full max-w-full">
        <div className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full border border-[#d4af37] bg-[#23160e] text-[#f4ecd8] font-pirate text-base font-bold shadow-md mb-3">
          CAPTAIN&apos;S LOG & ANSWERS
        </div>
        <h2 className="font-pirate text-3xl sm:text-5xl font-extrabold text-[#8c1d1a] drop-shadow-sm leading-tight py-1 break-words">
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
                {faq.q}
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
