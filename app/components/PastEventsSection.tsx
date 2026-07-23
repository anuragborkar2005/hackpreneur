"use client";

import React, { useState } from "react";
import {
  Users,
  Lightbulb,
  Trophy,
  Anchor,
  Handshake,
  Pin,
  Play,
  Quote,
  Sparkles,
  Ship,
  Compass,
  X,
  Flag,
} from "lucide-react";
import Image from "next/image";

interface PhotoCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export default function PastEventsSection() {
  const [activeMediaModal, setActiveMediaModal] = useState(false);

  const photoCards: PhotoCard[] = [
    {
      id: "1",
      title: "EPIC GATHERINGS",
      description: "Bringing together curious minds from across the globe.",
      icon: <Users className="w-5 h-5 text-[#8c1d1a]" />,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "2",
      title: "INNOVATIVE BUILDS",
      description: "Ideas turned into impactful solutions.",
      icon: <Lightbulb className="w-5 h-5 text-[#8c1d1a]" />,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "3",
      title: "WELL EARNED VICTORIES",
      description: "Celebrating hard work, creativity and perseverance.",
      icon: <Trophy className="w-5 h-5 text-[#8c1d1a]" />,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "4",
      title: "MENTOR SESSIONS",
      description: "Learning from the best. Growing together.",
      icon: <Anchor className="w-5 h-5 text-[#8c1d1a]" />,
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "5",
      title: "CONNECTIONS MADE",
      description: "Friendships, collaborations and networks that last.",
      icon: <Handshake className="w-5 h-5 text-[#8c1d1a]" />,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const filmstripImages = [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600&auto=format&fit=crop",
  ];

  return (
    <section
      id="past-events"
      className="relative isolate w-full min-h-screen flex flex-col justify-center overflow-hidden py-16 sm:py-24 scroll-mt-20"
    >
      {/* about_bg.svg covering full section as background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20 brightness-[1.02] contrast-[1.02]"
        style={{ backgroundImage: "url('/about_bg.svg')" }}
      >
        {/* Soft warmth gradient overlays for continuous section blending */}
        <div className="absolute inset-0 bg-linear-to-r from-[#faf4e5]/90 via-[#faf4e5]/80 via-50% to-[#faf4e5]/70 -z-10" />
        <div className="absolute inset-0 bg-linear-to-b from-[#faf4e5] via-transparent to-[#faf4e5] -z-10" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between min-h-[85vh] space-y-10">

        {/* TOP HEADER & SIDE CARDS GRID MATCHING PAST_EVENTS.PNG */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">

          {/* TOP LEFT: PINNED PARCHMENT NOTE */}
          <div className="lg:col-span-3 hidden lg:flex flex-col justify-start">
            <div
              className="rounded-2xl p-3 sm:p-6 relative  max-w-xs bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/card.png')" }}
            >
                          {/* Thumbtack Brass Pin */}
                <div className="flex flex-col justify-center pl-10 -rotate-2">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-;inear-to-br from-amber-400 to-amber-700 border-2 border-amber-900 shadow-md flex items-center justify-center text-amber-950">
                    <Pin className="w-3.5 h-3.5 fill-amber-950" />
                    </div>

                    <div className="flex items-center gap-2 mb-3 border-b border-[#c8a355]/30 pb-2">
                    <Flag className="w-4 h-4 text-[#8c1d1a]" />
                    <span className="font-pirate text-sm font-bold text-[#8c1d1a]">OUR CREW CREED</span>
                    </div>

                    <p className="font-script text-lg text-[#3d271d] leading-relaxed space-y-1">
                    <span>Different teams.</span><br />
                    <span>One mission.</span><br />
                    <span>Countless ideas.</span><br />
                    <span className="text-[#8c1d1a] font-bold">Limitless impact.</span>
                    </p>
                </div>
                </div>
          </div>

          {/* TOP CENTER: SECTION TITLE & SUBTITLE */}
          <div className="lg:col-span-6 text-center">
            {/* Dark Wooden Scroll Ribbon */}
            <div className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full border border-[#d4af37] bg-[#23160e] text-[#f4ecd8] font-pirate text-base sm:text-lg font-bold shadow-md mb-3">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>VOYAGES OF INNOVATION</span>
              <Compass className="w-4 h-4 text-amber-400" />
            </div>

            {/* Headline */}
            <div className="space-y-0.5">
              <h2 className="font-pirate text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wider text-[#2b1810] drop-shadow-sm leading-none">
                PAST EVENT
              </h2>
              <h2 className="font-pirate text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wider text-[#8c1d1a] drop-shadow-md leading-none">
                HIGHLIGHTS
              </h2>
            </div>

            {/* Anchor Divider */}
            <div className="flex items-center justify-center gap-3 my-3 max-w-xs mx-auto">
              <div className="h-0.5 flex-1 bg-linear-to-r from-transparent to-[#8c1d1a]/50" />
              <Anchor className="w-5 h-5 text-[#8c1d1a]" />
              <div className="h-0.5 flex-1 bg-linear-to-l from-transparent to-[#8c1d1a]/50" />
            </div>

            {/* Subtitle */}
            <p className="text-[#3d271d] font-sans font-semibold text-xs sm:text-sm tracking-wide max-w-lg mx-auto leading-relaxed">
              Relive the adventure! Here&apo;s a glimpse of the epic journeys, groundbreaking ideas and unforgettable moments from our previous hackathons.
            </p>
          </div>

          {/* TOP RIGHT: OUR LEGACY IN NUMBERS (WOODEN BOARD) */}
          <div className="lg:col-span-3 flex justify-end">
            <div className="w-full p-4 rounded-2xl bg-linear-to-br from-[#26170e] via-[#1a0e08] to-[#120804] border-2 border-[#5c381e] text-white shadow-2xl relative">
              <div className="text-center border-b border-amber-900/50 pb-2 mb-3">
                <span className="text-[11px] font-mono font-bold text-amber-300 uppercase tracking-wider flex items-center justify-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>OUR LEGACY IN NUMBERS</span>
                  <Sparkles className="w-3 h-3 text-amber-400" />
                </span>
              </div>

              <div className="grid grid-cols-4 gap-1 text-center">
                <div className="flex flex-col items-center">
                  <Users className="w-4 h-4 text-amber-400 mb-0.5" />
                  <span className="font-pirate text-base text-center font-bold text-amber-300 block">2500+</span>
                  <span className="text-[9px] font-mono text-amber-100/70 block uppercase">PARTICIPANTS</span>
                </div>
                <div className="flex flex-col items-center">
                  <Compass className="w-4 h-4 text-amber-400 mb-0.5" />
                  <span className="font-pirate text-base text-center font-bold text-amber-300 block">500+</span>
                  <span className="text-[9px] font-mono text-amber-100/70 block uppercase">TEAMS</span>
                </div>
                <div className="flex flex-col items-center">
                  <Lightbulb className="w-4 h-4 text-amber-400 mb-0.5" />
                  <span className="font-pirate text-base text-center font-bold text-amber-300 block">150+</span>
                  <span className="text-[9px] font-mono text-amber-100/70 block uppercase">PROJECTS</span>
                </div>
                <div className="flex flex-col items-center">
                  <Trophy className="w-4 h-4 text-amber-400 mb-0.5" />
                  <span className="font-pirate text-base text-center font-bold text-amber-300 block">25+</span>
                  <span className="text-[9px] font-mono text-amber-100/70 block uppercase">SPONSORS</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* MIDDLE ROW: 5 PINNED PARCHMENT PHOTO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-stretch">
          {photoCards.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl p-5 bg-full -rotate-4 sm:p-5 flex flex-col justify-between relative group hover:-translate-y-1.5 transition-all duration-300 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/card.png')" }}
            >
              {/* Thumbtack Brass Pin */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-linear-to-br from-amber-300 to-amber-700 border-2 border-amber-900 shadow-md flex items-center justify-center text-amber-950 z-10">
                <Pin className="w-3 h-3 fill-amber-950" />
              </div>

              {/* Photo Frame */}
              <div className="w-full h-36 rounded-xl overflow-hidden border border-[#c8a355]/40 mb-3 bg-[#1e120d] relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60" />
              </div>

              {/* Title & Icon */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  {card.icon}
                  <h3 className="font-pirate text-base font-bold text-[#8c1d1a] leading-tight">
                    {card.title}
                  </h3>
                </div>

                <p className="text-xs font-sans font-medium text-[#4a3224] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW: VIDEO FILMSTRIP & PARCHMENT QUOTE BANNER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* Left / Center: Video Filmstrip Container (8 cols) */}
          <div className="lg:col-span-8 p-4 rounded-2xl bg-[#1b1009] border-2 border-[#5c3a1e] shadow-2xl flex flex-col sm:flex-row items-center gap-4">

            {/* Watch Action Box */}
            <div className="p-4 rounded-xl bg-[#26170e] border border-[#d4af37]/40 text-center sm:text-left flex flex-col justify-between shrink-0 min-w-[200px]">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-[#8c1d1a] text-white flex items-center justify-center text-xs font-bold shadow-md">
                  <Play className="w-4 h-4 fill-white text-white translate-x-px" />
                </div>
                <span className="font-pirate text-sm font-bold text-amber-300">
                  WATCH THE JOURNEY
                </span>
              </div>
              <p className="text-[11px] font-sans text-amber-100/70 mb-3">
                Moments that defined the adventure.
              </p>
              <button
                onClick={() => setActiveMediaModal(true)}
                className="px-4 py-2 rounded-lg font-pirate text-xs text-white font-bold btn-crimson hover:scale-105 transition-transform shadow-md flex items-center justify-center gap-1.5"
              >
                <span>WATCH HIGHLIGHTS</span>
                <Play className="w-3 h-3 fill-white text-white" />
              </button>
            </div>

            {/* Filmstrip Frame Thumbnails */}
            <div className="flex-1 grid grid-cols-3 sm:grid-cols-5 gap-2 overflow-hidden">
              {filmstripImages.map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveMediaModal(true)}
                  className="h-20 rounded-lg overflow-hidden border border-[#c8a355]/40 relative group cursor-pointer"
                >
                  <Image
                    src={imgUrl}
                    alt={`Filmstrip frame ${idx + 1}`}
                    fill
                    sizes="120px"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors flex items-center justify-center">
                    <Play className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity fill-white" />
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Parchment Scroll Quote Banner (4 cols) */}
          <div
            className="lg:col-span-4 px-8 py-5 rounded-2xl overflow relative flex items-center gap-3 bg-cover bg-full  bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/parchment_paper_landscape.png')" }}
          >
            <Quote className="w-8 h-8 text-[#8c1d1a] shrink-0 rotate-180" />
            <div className="text-left font-sans text-xs font-semibold text-[#3d271d] leading-relaxed">
              <p>Every idea was a spark.</p>
              <p>Every team, a crew. Every hackathon, a <span className="font-script text-base text-[#8c1d1a] font-bold underline">legend in the making.</span></p>
            </div>
            <Ship className="w-7 h-7 text-[#8c1d1a] ml-auto shrink-0" />
          </div>

        </div>

      </div>

      {/* VIDEO HIGHLIGHTS MODAL */}
      {activeMediaModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-3xl w-full parchment-card rounded-2xl p-6 border-2 border-[#d4af37] shadow-2xl relative">
            <button
              onClick={() => setActiveMediaModal(false)}
              className="absolute top-4 right-4 text-2xl font-bold text-[#8c1d1a] hover:scale-110 transition-transform"
            >
              <X className="w-6 h-6 text-[#8c1d1a]" />
            </button>
            <h3 className="font-pirate text-2xl font-bold text-[#8c1d1a] mb-4 flex items-center gap-2">
              <Flag className="w-6 h-6 text-[#8c1d1a]" />
              <span>PAST EVENT HIGHLIGHTS REEL</span>
            </h3>
            <div className="w-full aspect-video rounded-xl overflow-hidden bg-black flex items-center justify-center border border-[#c8a355]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Hackpreneur Past Event Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
