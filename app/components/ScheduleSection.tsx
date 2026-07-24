"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TimelineStep {
  id: string;
  num: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  image: string;
  color: string;
  titleColor: string;
  offsetY: string;
}

export default function ScheduleSection() {
  const [activeStep, setActiveStep] = useState<string>("01");

  const steps: TimelineStep[] = [
    {
      id: "01",
      num: "01",
      title: "REGISTRATIONS OPEN",
      description: "Drop anchor and register your crew.",
      date: "26 JULY 2026",
      image: "/images/timeline_step1.jpg",
      color: "bg-[#8b1e1b]",
      titleColor: "text-[#8b1e1b]",
      offsetY: "lg:translate-y-6",
    },
    {
      id: "02",
      num: "02",
      title: "PROBLEM STATEMENT RELEASE",
      description: "Discover the challenges. Plan your strategy.",
      date: "4 AUG 2026",
      image: "/images/timeline_step3.jpg",
      color: "bg-[#5c3e1e]",
      titleColor: "text-[#5c3e1e]",
      offsetY: "lg:translate-y-4",
      },
    {
      id: "03",
      num: "03",
      title: "HACKATHON BEGINS - WITH ROUND 1",
      description: "The voyage begins! Build. Code. Innovate.",
      date: "7 AUG 2026",
      time: "08:00 AM (IST)",
      image: "/images/timeline_step4.jpg",
      color: "bg-[#1c4d29]",
      titleColor: "text-[#1c4d29]",
      offsetY: "lg:-translate-y-4",
      },
    {
        id: "04",
        num: "04",
        title: "HACKATHON - ROUND 2",
        description: "Start with Round 2",
        date: "7 AUG 2026",
        image: "/images/timeline_step2.jpg",
        color: "bg-[#1b2a4a]",
        titleColor: "text-[#1b2a4a]",
        offsetY: "lg:-translate-y-3",
    },
    {
      id: "05",
      num: "05",
      title: "HACKATHON ENDS",
      description: "Time to wrap up and submit your treasure.",
      date: "7 AUG 2026",
      time: "08:00 PM (IST)",
      image: "/images/timeline_step5.jpg",
      color: "bg-[#4a1b42]",
      titleColor: "text-[#4a1b42]",
      offsetY: "lg:translate-y-3",
    },
    {
      id: "06",
      num: "06",
      title: "RESULTS & AWARDS",
      description: "Heroes will be announced. Glory is yours!",
      date: "7 AUG 2026",
      image: "/images/timeline_step6.jpg",
      color: "bg-[#7a5214]",
      titleColor: "text-[#7a5214]",
      offsetY: "lg:translate-y-0",
    },
  ];

  return (
    <section
      id="schedule"
      className="relative isolate w-full min-h-screen flex flex-col justify-center overflow-hidden py-16 sm:py-20 scroll-mt-20"
    >
      {/* timeline.svg covering full section as background */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat -z-20"
        style={{ backgroundImage: "url('/timeline.svg')" }}
      >
        {/* Soft warmth gradient overlays for continuous section blending */}
        {/*<div className="absolute inset-0 bg-linear-to-r from-[#faf4e5]/20  to-[#faf4e5]/20 -z-10" />*/}
        <div className="absolute inset-0 bg-linear-to-b from-[#faf4e5] via-transparent to-[#faf4e5] -z-10" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between min-h-[85vh]">
        {/* SECTION HEADER MATCHING TIMELINE.PNG */}
        <div className="text-center max-w-3xl mx-auto pt-4">
          <h2 className="font-pirate text-5xl mt-15 sm:text-6xl md:text-7xl font-extrabold tracking-wider text-[#1e120d] drop-shadow-sm leading-none">
            TIMELINE
          </h2>

          {/* Skull divider */}
          <div className="flex items-center justify-center gap-3 my-2 max-w-xs mx-auto">
            <div className="h-0.5 flex-1 bg-linear-to-r from-transparent to-[#1e120d]/40" />
            <span className="text-xl font-pirate text-[#1e120d]">☠</span>
            <div className="h-0.5 flex-1 bg-linear-to-l from-transparent to-[#1e120d]/40" />
          </div>

          <p className="text-[#3d271d] font-sans font-semibold text-sm sm:text-base tracking-wide">
            Chart your course. Gear up. And set sail for innovation!
          </p>
        </div>

        {/* TIMELINE NODES (6 STEPS FLOW WITH SMOOTH SVG CURVED PATH) */}
        <div className="relative my-8 sm:my-14">
          {/* Smooth SVG Curved Wavy Dotted Path (Desktop & Tablet) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none -z-10">
            <svg
              viewBox="0 0 1200 240"
              className="w-full h-full"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Curved bezier path passing EXACTLY through all 6 circle badge centers */}
              <path
                d="M 20,100 C 60,100 70,100 100,100 C 180,100 220,64 300,64 C 380,64 420,92 500,92 C 580,92 620,60 700,60 C 780,60 820,88 900,88 C 980,88 1020,76 1100,76 L 1165,76"
                stroke="#5c381e"
                strokeWidth="3.5"
                strokeDasharray="9 7"
                strokeLinecap="round"
              />
              {/* Start point dot */}
              <circle cx="20" cy="100" r="5" fill="#5c381e" />
              {/* End arrow head */}
              <polygon points="1165,70 1182,76 1165,82" fill="#5c381e" />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-6 lg:gap-3 items-start">
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`group cursor-pointer flex flex-col items-center text-center transition-all duration-300 ${step.offsetY} ${
                    isActive
                      ? "scale-105"
                      : "hover:scale-102 opacity-95 hover:opacity-100"
                  }`}
                >
                  {/* FLAG BADGE */}
                  <div className="relative mb-2">
                    <div className="px-3.5 py-1 bg-[#1e120d] text-white font-pirate text-xs font-bold rounded-t-md shadow-md border-b-2 border-[#d4af37] flex items-center justify-center gap-1">
                      <span>{step.num}</span>
                    </div>
                  </div>

                  {/* CIRCULAR IMAGE BADGE */}
                  <div
                    className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-4 border-[#d4af37] shadow-xl relative overflow-hidden group-hover:rotate-6 group-hover:scale-105 transition-all duration-300 bg-[#3a2012]"
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="88px"
                      className="object-cover rounded-full"
                    />
                    {/* Golden Ring Highlight Overlay */}
                    <div className="absolute inset-0 rounded-full border border-amber-300/40 pointer-events-none" />
                  </div>

                  {/* TITLE */}
                  <h3
                    className={`font-pirate text-base sm:text-lg font-bold ${step.titleColor} mt-3 leading-tight tracking-wide`}
                  >
                    {step.title}
                  </h3>

                  {/* ORNAMENT */}
                  <span className="text-[#8b5a2b] text-xs my-0.5">❖</span>

                  {/* DESCRIPTION */}
                  <p className="text-xs sm:text-sm text-[#4a3224] font-sans font-medium leading-relaxed max-w-[170px]">
                    {step.description}
                  </p>

                  {/* DATE CARD */}
                  <div className="mt-3 px-3 py-1.5 rounded-xl bg-[#e6d8b8] border border-[#c8a355] shadow-xs text-[11px] sm:text-xs font-mono font-bold text-[#2b1810] flex flex-col items-center gap-0.5">
                    <div className="flex items-center gap-1">
                      <span>📅</span>
                      <span>{step.date}</span>
                    </div>
                    {step.time && (
                      <span className="text-[10px] text-[#8b1e1b] font-semibold">
                        {step.time}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM FOOTER RIBBONS & BADGES */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-4">
          {/* Wooden Sign Plank Bottom Left */}
          <div
            className="px-10 py-6 rounded-xl  bg-contain bg-no-repeat text-[#f4ecd8] font-pirate text-sm sm:text-base  rotate-[-1.5deg] flex items-center gap-2"
            style={{
              backgroundImage: "url('/images/long_flag.png')",
            }}
          >
            <span className=" text-xl">
              Every step brings you closer to glory!
            </span>
          </div>

          {/* Center Parchment Scroll Ribbon */}
          <div className="px-8 py-3 rounded-2xl bg-gradient-to-r from-[#ebdcb9] via-[#f5eacc] to-[#ebdcb9] border-2 border-[#c8a355] text-center shadow-lg max-w-xl">
            <div className="font-pirate text-base sm:text-lg font-bold text-[#1e120d] uppercase tracking-wider flex items-center justify-center gap-2">
              <span className="text-xl">🏴‍☠️</span> GATHER YOUR CREW. TRUST YOUR
              COMPASS.
            </div>
            <div className="text-xs font-mono font-bold text-[#8b1e1b] tracking-widest mt-0.5 uppercase">
              ✶ THE{" "}
              <span className="text-[#8b1e1b] font-black underline">
                TREASURE
              </span>{" "}
              OF INNOVATION AWAITS! ✶
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
