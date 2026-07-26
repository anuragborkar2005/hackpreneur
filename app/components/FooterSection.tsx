"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  Download,
  Calendar,
  MapPin,
  Users,
  Star,
  Trophy,
  Award,
  Gift,
  Phone,
  Anchor,
  Zap,
} from "lucide-react";

interface PosterSlide {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  badge: string;
}

const posterSlides: PosterSlide[] = [
  {
    id: "agent-arena",
    src: "/images/agent_arena_poster.jpg",
    title: "AGENT ARENA — ITECHROOTS 16.0",
    subtitle: "Make AI Agents & RAG Systems | 6th August 2026 | Prize Pool ₹2,000",
    badge: "AI & RAG HACKATHON",
  },
  {
    id: "protorush",
    src: "/images/protorush_poster.jpg",
    title: "PROTORUSH — ITECHROOTS 16.0",
    subtitle: "Prototype & Build Challenge | 7th August 2026 | Prize Pool ₹3,000",
    badge: "PROTOTYPING ARENA",
  },
  {
    id: "freefire",
    src: "/images/freefire_poster.jpg",
    title: "FREE FIRE ESPORTS — ITECHROOTS 16.0",
    subtitle: "High Stakes Battle Royale Tournament | 6th August 2026 | Prize Pool ₹3,000",
    badge: "ESPORTS CHAMPIONSHIP",
  },
  {
    id: "quiz-mania",
    src: "/images/quiz_mania_poster.jpg",
    title: "QUIZ MANIA — ITECHROOTS 16.0",
    subtitle: "Ultimate Tech & Trivia Showdown | 7th August 2026 | Prize Pool ₹1,000",
    badge: "TRIVIA BATTLE",
  },
  {
    id: "code-clash",
    src: "/images/code_clash_poster.jpg",
    title: "CODE CLASH — ITECHROOTS 16.0",
    subtitle: "Competitive Speed Coding Contest | 6th August 2026 | Prize Pool ₹1,500",
    badge: "SPEED CODING",
  },
  {
    id: "quiz2code",
    src: "/images/quiz2code_poster.jpg",
    title: "QUIZ 2 CODE — ITECHROOTS 16.0",
    subtitle: "Decode Trivia & Build Code Solutions | 6th August 2026 | Prize Pool ₹1,500",
    badge: "HYBRID CHALLENGE",
  },
  {
    id: "poster-designing",
    src: "/images/poster_designing_poster.jpg",
    title: "POSTER DESIGNING — ITECHROOTS 16.0",
    subtitle: "Creative Graphic & Poster Design Challenge | 7th August 2026 | Prize Pool ₹1,500",
    badge: "CREATIVE DESIGN",
  },
];

export default function FooterSection({ onOpenRegister }: { onOpenRegister: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % posterSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + posterSlides.length) % posterSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused || isFullscreen) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, isFullscreen, nextSlide]);

  return (
    <footer className="w-full bg-[#1e120d] text-white border-t-2 border-[#d4af37] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Logo matching reference image */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-700 to-amber-950 p-0.5 shadow-md flex items-center justify-center">
            <div className="w-full h-full bg-[#2b1b17] rounded-full flex items-center justify-center border border-amber-400/40">
              <span className="font-pirate text-2xl text-amber-400">
                ☠
              </span>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-pirate text-3xl font-bold text-amber-300">
              HACKPRENEUR &apos;26
            </span>
            <span className="text-[10px] font-mono text-amber-400/80">
              Itechroots 16.0 • 1’st International Innovation Hackathon
            </span>
          </div>
        </div>

        {/* Event info details with icons */}
        <div className="max-w-2xl text-amber-100/80 font-sans text-sm mb-6 flex flex-col items-center gap-2">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>8th August 2026 | 12 Hours</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Hybrid Mode | IT Department, YCCE</span>
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5">
              <Users className="w-4 h-4 text-amber-400" />
              <span>Teams of 4-6 | ₹600/team</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400" />
              <span>Partner: GDG Cloud Nagpur</span>
            </span>
          </div>
        </div>

        {/* ========================================== */}
        {/* SLIDING POSTER VIEW SECTION                */}
        {/* ========================================== */}
        <div className="w-full max-w-5xl my-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-300 font-mono text-xs uppercase tracking-widest mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>ITECHROOTS 16.0 EVENT POSTERS ({currentSlide + 1}/{posterSlides.length})</span>
          </div>

          <div
            className="relative w-full rounded-2xl bg-[#140b07] border-2 border-[#d4af37]/70 shadow-[0_0_35px_rgba(212,175,55,0.2)] overflow-hidden group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Poster Slide Display with Sliding Horizontal Track */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-black/80 overflow-hidden">
              <div
                className="w-full h-full flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {posterSlides.map((slide) => (
                  <div
                    key={slide.id}
                    className="w-full h-full shrink-0 relative flex items-center justify-center"
                  >
                    <Image
                      src={slide.src}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 1024px"
                      className="object-contain w-full h-full"
                      priority
                    />

                    {/* Gradient Overlay for Title Banner */}
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-5 flex flex-col items-start text-left pointer-events-none">
                      <span className="px-2.5 py-0.5 rounded-md bg-amber-500/30 border border-amber-400/50 text-amber-300 font-mono text-[10px] uppercase font-bold mb-1">
                        {slide.badge}
                      </span>
                      <h3 className="font-pirate text-xl sm:text-2xl font-bold text-amber-300 drop-shadow-md">
                        {slide.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-amber-100/90 font-sans line-clamp-1">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Expand Fullscreen Button */}
              <button
                onClick={() => setIsFullscreen(true)}
                className="absolute top-3 right-3 z-20 p-2 sm:p-2.5 rounded-xl bg-black/70 border border-amber-400/60 text-amber-300 hover:bg-amber-500 hover:text-black transition-all cursor-pointer shadow-lg hover:scale-105"
                title="View Poster Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Prev Button */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/70 border border-amber-400/60 text-amber-300 hover:bg-amber-500 hover:text-black transition-all cursor-pointer shadow-lg hover:scale-110 active:scale-95"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/70 border border-amber-400/60 text-amber-300 hover:bg-amber-500 hover:text-black transition-all cursor-pointer shadow-lg hover:scale-110 active:scale-95"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Pagination Indicators */}
            <div className="py-2.5 bg-[#1b0e09] border-t border-amber-900/40 flex items-center justify-center gap-2">
              {posterSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentSlide
                      ? "w-8 bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                      : "w-2 bg-amber-900/60 hover:bg-amber-500/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA banner inside footer */}
        <div className="w-full max-w-3xl p-6 rounded-2xl bg-[#2b1b17] border border-[#d4af37]/60 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-left">
          <div>
            <h4 className="font-pirate text-2xl font-bold text-amber-300 flex items-center gap-2">
              <span>SPEND LESS TIME. WIN BIG.</span>
              <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
            </h4>
            <div className="text-xs text-amber-200/80 font-mono mt-1.5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1">
                <Trophy className="w-4 h-4 text-amber-400" /> ₹21,000
              </span>
              <span>|</span>
              <span className="inline-flex items-center gap-1">
                <Award className="w-4 h-4 text-slate-300" /> ₹15,000
              </span>
              <span>|</span>
              <span className="inline-flex items-center gap-1">
                <Gift className="w-4 h-4 text-amber-600" /> ₹5K Capello Vouchers
              </span>
            </div>
            <div className="mt-2 text-xs font-mono text-amber-300/90 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-amber-400" /> Tejasvi Jadhao: 9403315952
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-amber-400" /> Ojas Satdeve: 8856012282
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://forms.gle/GSExBRPYAzxPeDxq6"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onOpenRegister}
              className="px-6 py-3.5 rounded-xl font-pirate text-lg text-white font-bold btn-crimson hover:scale-105 transition-transform shadow-md cursor-pointer flex items-center justify-center text-center gap-2"
            >
              <span>REGISTER NOW</span>
              <Anchor className="w-4 h-4 text-white" />
            </a>
            <a
              href="/brochure.pdf"
              download="Hackpreneur_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl font-pirate text-base text-amber-300 font-bold bg-[#140b07] hover:bg-amber-500 hover:text-black border border-[#d4af37]/60 hover:scale-105 transition-all shadow-md cursor-pointer flex items-center justify-center text-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>BROCHURE</span>
            </a>
          </div>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-8 text-xs font-mono font-bold tracking-wider text-amber-200/70 mb-8 uppercase">
          <a href="#" className="hover:text-amber-400 transition-colors">HOME</a>
          <a href="#events" className="hover:text-amber-400 transition-colors">EVENTS</a>
          <a href="#about" className="hover:text-amber-400 transition-colors">ABOUT</a>
          <a href="#sponsors" className="hover:text-amber-400 transition-colors">PARTNERS</a>
          <a href="#organizers" className="hover:text-amber-400 transition-colors">CREW</a>
          <a href="#schedule" className="hover:text-amber-400 transition-colors">SCHEDULE</a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
        </div>

        <div className="text-[11px] font-mono text-amber-400/50 border-t border-amber-900/40 pt-6 w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>© 2026 HACKPRENEUR. IT DEPARTMENT, YCCE. ALL RIGHTS RESERVED.</span>
          <span className="flex items-center gap-1.5">
            <span>SPEND LESS TIME. WIN BIG.</span>
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          </span>
        </div>
      </div>

      {/* FULLSCREEN POSTER MODAL */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center bg-[#140b07] border-2 border-amber-400 rounded-2xl p-4 shadow-2xl">
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 border border-amber-400/50 text-amber-300 hover:bg-amber-500 hover:text-black transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full flex items-center justify-center my-auto py-2">
              <Image
                src={posterSlides[currentSlide].src}
                alt={posterSlides[currentSlide].title}
                width={1600}
                height={900}
                className="w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>

            <div className="mt-3 text-center">
              <h3 className="font-pirate text-2xl font-bold text-amber-300">
                {posterSlides[currentSlide].title}
              </h3>
              <p className="text-xs text-amber-100/80 font-sans">
                {posterSlides[currentSlide].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
