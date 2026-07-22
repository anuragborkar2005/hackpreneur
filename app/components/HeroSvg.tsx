"use client";

import React, { useState } from "react";

export default function HeroSvg() {
  const [activePart, setActivePart] = useState<string | null>(null);
  const [isCompassSpinningFast, setIsCompassSpinningFast] = useState(false);

  return (
    <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center p-2 select-none group">
      {/* Dynamic Background Glow behind SVG */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-cyan-500/10 to-amber-600/30 blur-3xl rounded-full animate-pulse-slow -z-10" />
      
      <svg
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_0_35px_rgba(245,158,11,0.25)] transition-transform duration-700 hover:scale-[1.02]"
      >
        <defs>
          {/* Radial & Linear Gradients */}
          <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#D97706" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#B45309" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="cyanGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#0284C7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#030712" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF59D" />
            <stop offset="40%" stopColor="#F59E0B" />
            <stop offset="80%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          <linearGradient id="cyberSail" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0284C7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="woodHull" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="50%" stopColor="#312e81" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="intenseGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- MAP GRID & CONSTELLATION NODES --- */}
        <g opacity="0.35">
          <circle cx="400" cy="400" r="380" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="400" cy="400" r="320" stroke="#F59E0B" strokeWidth="1" strokeDasharray="8 6" />
          <circle cx="400" cy="400" r="260" stroke="#0284C7" strokeWidth="1" />
          <line x1="400" y1="20" x2="400" y2="780" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="20" y1="400" x2="780" y2="400" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="130" y1="130" x2="670" y2="670" stroke="#F59E0B" strokeWidth="0.8" strokeDasharray="2 4" />
          <line x1="670" y1="130" x2="130" y2="670" stroke="#F59E0B" strokeWidth="0.8" strokeDasharray="2 4" />
        </g>

        {/* --- DYNAMIC CYBER OCEAN WAVES (Animated) --- */}
        <g className="animate-wave opacity-70">
          <path
            d="M 50 620 Q 200 580 400 620 T 750 620 L 780 750 L 20 750 Z"
            fill="url(#cyanGlow)"
            opacity="0.4"
          />
          <path
            d="M 20 650 Q 220 690 420 650 T 780 650"
            stroke="#38BDF8"
            strokeWidth="3"
            fill="none"
            filter="url(#glowFilter)"
          />
          <path
            d="M 60 675 Q 260 640 460 675 T 740 675"
            stroke="#F59E0B"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
        </g>

        {/* --- ROTATING CYBER COMPASS ROSE (Outer & Inner Rings) --- */}
        <g
          className={`cursor-pointer transition-transform duration-1000 ${
            isCompassSpinningFast ? "animate-[spin_10s_linear_infinite]" : "animate-spin-compass"
          }`}
          style={{ transformOrigin: "400px 400px" }}
          onClick={() => setIsCompassSpinningFast(!isCompassSpinningFast)}
          onMouseEnter={() => setActivePart("compass")}
          onMouseLeave={() => setActivePart(null)}
        >
          {/* Outer Degree Marks */}
          <circle cx="400" cy="400" r="300" stroke="url(#goldGradient)" strokeWidth="3" />
          <circle cx="400" cy="400" r="290" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 12" />

          {/* Compass Points / Degree Ticks */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 400 + Math.cos(rad) * 280;
            const y1 = 400 + Math.sin(rad) * 280;
            const x2 = 400 + Math.cos(rad) * 296;
            const y2 = 400 + Math.sin(rad) * 296;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={angle % 90 === 0 ? "#F59E0B" : "#38BDF8"}
                strokeWidth={angle % 90 === 0 ? "4" : "2"}
              />
            );
          })}

          {/* Cardinal Directions Text in Piece of Eight Style */}
          <text x="400" y="125" textAnchor="middle" fill="#FFF59D" className="font-pirate text-3xl font-bold" filter="url(#glowFilter)">N</text>
          <text x="685" y="410" textAnchor="middle" fill="#FFF59D" className="font-pirate text-3xl font-bold" filter="url(#glowFilter)">E</text>
          <text x="400" y="690" textAnchor="middle" fill="#FFF59D" className="font-pirate text-3xl font-bold" filter="url(#glowFilter)">S</text>
          <text x="115" y="410" textAnchor="middle" fill="#FFF59D" className="font-pirate text-3xl font-bold" filter="url(#glowFilter)">W</text>
        </g>

        {/* Counter-rotating Inner Ring */}
        <g
          className="animate-spin-compass-rev"
          style={{ transformOrigin: "400px 400px" }}
        >
          <circle cx="400" cy="400" r="230" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="12 18" opacity="0.7" />
          <polygon points="400,180 415,240 400,225 385,240" fill="url(#goldGradient)" />
          <polygon points="400,620 415,560 400,575 385,560" fill="#0284C7" />
          <polygon points="620,400 560,415 575,400 560,385" fill="#F59E0B" />
          <polygon points="180,400 240,415 225,400 240,385" fill="#0284C7" />
        </g>

        {/* --- CYBER GALLEON SHIP (Centerpiece) --- */}
        <g
          className="animate-float cursor-pointer"
          onMouseEnter={() => setActivePart("ship")}
          onMouseLeave={() => setActivePart(null)}
        >
          {/* Glowing Aura around Ship */}
          <ellipse cx="400" cy="420" rx="180" ry="140" fill="url(#goldGlow)" opacity="0.35" />

          {/* Ship Masts & Rigging */}
          <line x1="400" y1="210" x2="400" y2="480" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
          <line x1="300" y1="260" x2="300" y2="470" stroke="#D97706" strokeWidth="5" strokeLinecap="round" />
          <line x1="500" y1="280" x2="500" y2="470" stroke="#D97706" strokeWidth="5" strokeLinecap="round" />

          {/* Bowsprit (Front Spear) */}
          <line x1="500" y1="440" x2="630" y2="390" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" />
          {/* Cyber Laser Beam from Bowsprit */}
          <line x1="630" y1="390" x2="720" y2="360" stroke="#38BDF8" strokeWidth="3" strokeDasharray="6 4" filter="url(#glowFilter)" />

          {/* MAIN SAIL (Digital Grid & Code Motif) */}
          {/* Center Main Sail */}
          <path
            d="M 330 240 Q 400 220 470 240 Q 480 330 400 360 Q 320 330 330 240 Z"
            fill="url(#cyberSail)"
            stroke="url(#goldGradient)"
            strokeWidth="3"
            filter="url(#glowFilter)"
          />
          {/* Grid lines on main sail */}
          <path d="M 350 250 L 450 340 M 450 250 L 350 340" stroke="#38BDF8" strokeWidth="1" opacity="0.6" />
          <circle cx="400" cy="290" r="28" fill="#030712" stroke="#F59E0B" strokeWidth="2" />
          {/* Skull / Pirate Symbol inside main sail */}
          <path
            d="M 390 282 C 390 276, 410 276, 410 282 C 410 288, 404 290, 404 295 L 396 295 C 396 290, 390 288, 390 282 Z"
            fill="#F59E0B"
          />
          <circle cx="395" cy="283" r="2" fill="#030712" />
          <circle cx="405" cy="283" r="2" fill="#030712" />
          {/* Crossbones behind skull */}
          <line x1="388" y1="278" x2="412" y2="300" stroke="#FFF59D" strokeWidth="2" />
          <line x1="412" y1="278" x2="388" y2="300" stroke="#FFF59D" strokeWidth="2" />

          {/* Fore Sail (Left Mast) */}
          <path
            d="M 250 290 Q 300 275 350 290 Q 355 370 300 395 Q 245 370 250 290 Z"
            fill="url(#cyberSail)"
            stroke="#38BDF8"
            strokeWidth="2"
            opacity="0.9"
          />

          {/* Mizzen Sail (Right Mast) */}
          <path
            d="M 450 300 Q 500 288 550 300 Q 555 375 500 398 Q 445 375 450 300 Z"
            fill="url(#cyberSail)"
            stroke="#38BDF8"
            strokeWidth="2"
            opacity="0.9"
          />

          {/* Jolly Roger Flag at Main Mast Top */}
          <path d="M 400 210 L 440 200 L 430 225 L 400 220 Z" fill="#F59E0B" filter="url(#glowFilter)" />
          <circle cx="418" cy="212" r="3" fill="#030712" />

          {/* GALLEON HULL */}
          <path
            d="M 230 450 C 230 450, 260 520, 390 530 C 520 530, 580 470, 610 440 C 600 475, 540 545, 390 550 C 250 545, 210 475, 230 450 Z"
            fill="url(#woodHull)"
            stroke="url(#goldGradient)"
            strokeWidth="4"
            filter="url(#glowFilter)"
          />

          {/* Hull Portholes / Cyber Cannon Ports with Glowing Nodes */}
          {[270, 320, 370, 420, 470, 520].map((x, idx) => (
            <g key={idx}>
              <circle cx={x} cy={485 + Math.sin(idx) * 4} r="8" fill="#030712" stroke="#F59E0B" strokeWidth="2" />
              <circle
                cx={x}
                cy={485 + Math.sin(idx) * 4}
                r="4"
                fill={activePart === "ship" ? "#38BDF8" : "#F59E0B"}
                className="animate-pulse"
              />
            </g>
          ))}

          {/* GOLDEN ANCHOR Hanging from Bow */}
          <g transform="translate(560, 490) scale(0.7)">
            <circle cx="15" cy="15" r="8" fill="none" stroke="#F59E0B" strokeWidth="3" />
            <line x1="15" y1="23" x2="15" y2="60" stroke="#F59E0B" strokeWidth="4" />
            <line x1="5" y1="35" x2="25" y2="35" stroke="#F59E0B" strokeWidth="4" />
            <path d="M 0 50 C 0 70, 30 70, 30 50" fill="none" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" />
            <polygon points="-3,48 0,40 5,48" fill="#F59E0B" />
            <polygon points="25,48 30,40 33,48" fill="#F59E0B" />
          </g>
        </g>

        {/* --- FLOATING TREASURE CHEST OF CODE (Bottom Right) --- */}
        <g
          className="animate-float-slow cursor-pointer"
          onMouseEnter={() => setActivePart("chest")}
          onMouseLeave={() => setActivePart(null)}
          transform="translate(490, 490)"
        >
          {/* Glowing Aura around Chest */}
          <ellipse cx="60" cy="50" rx="70" ry="40" fill="url(#goldGlow)" opacity="0.7" />

          {/* Chest Base */}
          <rect x="10" y="35" width="100" height="55" rx="6" fill="#78350F" stroke="url(#goldGradient)" strokeWidth="3" />
          {/* Metal Bands */}
          <rect x="25" y="35" width="12" height="55" fill="#D97706" />
          <rect x="83" y="35" width="12" height="55" fill="#D97706" />

          {/* Open Chest Lid */}
          <path
            d="M 5 35 Q 60 5 115 35 L 105 20 Q 60 -10 15 20 Z"
            fill="#B45309"
            stroke="url(#goldGradient)"
            strokeWidth="3"
            filter="url(#glowFilter)"
          />

          {/* Keyhole / Glowing Emblem */}
          <circle cx="60" cy="60" r="7" fill="#030712" stroke="#FFF59D" strokeWidth="2" />
          <polygon points="60,60 57,70 63,70" fill="#FFF59D" />

          {/* FLOATING CODE PARTICLES & GOLD COINS ESCAPING THE CHEST */}
          <g className="animate-pulse">
            {/* Binary & Symbol Particles */}
            <text x="35" y="15" fill="#FFF59D" className="font-pirate text-xl font-bold" filter="url(#glowFilter)">&lt;/&gt;</text>
            <text x="65" y="-5" fill="#38BDF8" className="font-mono text-sm font-bold" filter="url(#glowFilter)">0101</text>
            <text x="15" y="-15" fill="#F59E0B" className="font-pirate text-lg font-bold" filter="url(#glowFilter)">$150K</text>
            <text x="75" y="18" fill="#FFF59D" className="font-mono text-xs font-bold">AI</text>
            <text x="45" y="-30" fill="#38BDF8" className="font-pirate text-xl font-bold">⚓</text>

            {/* Gold Coins */}
            <circle cx="20" cy="25" r="5" fill="#FFF59D" stroke="#D97706" strokeWidth="1" />
            <circle cx="95" cy="22" r="6" fill="#F59E0B" stroke="#78350F" strokeWidth="1" />
            <circle cx="55" cy="20" r="7" fill="#FFF59D" stroke="#D97706" strokeWidth="1" />
          </g>
        </g>

        {/* --- GOLDEN TREASURE "X" MARKS THE SPOT --- */}
        <g transform="translate(180, 520)" className="animate-pulse">
          <circle cx="0" cy="0" r="30" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="-18" y1="-18" x2="18" y2="18" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" filter="url(#intenseGlow)" />
          <line x1="18" y1="-18" x2="-18" y2="18" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" filter="url(#intenseGlow)" />
          <text x="0" y="45" textAnchor="middle" fill="#FFF59D" className="font-pirate text-sm tracking-wider">BOUNTY ISLE</text>
        </g>

        {/* --- INTERACTIVE TOOLTIP DIRECTIVE INSIDE SVG --- */}
        <g transform="translate(400, 750)">
          <rect x="-160" y="-18" width="320" height="32" rx="16" fill="#030712" stroke="#F59E0B" strokeWidth="1" opacity="0.9" />
          <text x="0" y="4" textAnchor="middle" fill="#38BDF8" className="font-sans text-xs tracking-widest font-semibold">
            {activePart === "compass"
              ? "⚡ CLICK COMPASS TO TOGGLE WARP SPEED"
              : activePart === "ship"
              ? "🏴‍☠️ GALLEON READY FOR 48H HACKATHON"
              : activePart === "chest"
              ? "💎 $150,000 BOUNTY CHEST UNLOCKED"
              : "✦ HOVER & INTERACT WITH THE GALLEON & COMPASS ✦"}
          </text>
        </g>
      </svg>
    </div>
  );
}
