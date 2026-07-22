"use client";

import React from "react";

interface Track {
  id: string;
  title: string;
  bounty: string;
  pirateTitle: string;
  icon: string;
  description: string;
  tags: string[];
}

export default function BountyTracks({ onSelectTrack }: { onSelectTrack: (track: Track) => void }) {
  const tracks: Track[] = [
    {
      id: "ai-captains",
      title: "AI Captains & Autonomous Swarms",
      pirateTitle: "The Automated Armada",
      bounty: "$40,000 BOUNTY",
      icon: "🤖",
      description: "Build self-steering LLM agents, multi-agent swarms, and autonomous code bots capable of navigating complex tasks and automated debugging.",
      tags: ["LLMs", "LangChain", "Autonomous Swarms", "PyTorch"],
    },
    {
      id: "web3-booty",
      title: "Web3 & Decentralized Booty",
      pirateTitle: "Treasury of the Chains",
      bounty: "$35,000 BOUNTY",
      icon: "🪙",
      description: "Deploy trustless smart contracts, cross-chain bridge liquidity protocols, or decentralized identity galleons for the next generation of web3.",
      tags: ["Solidity", "Ethereum", "Solana", "Zero Knowledge"],
    },
    {
      id: "cyber-defense",
      title: "Cyber Defense & Zero-Day Galleons",
      pirateTitle: "Fortress of the High Seas",
      bounty: "$30,000 BOUNTY",
      icon: "🛡️",
      description: "Forge unbreachable security systems, vulnerability scanners, cryptographic shields, and defensive firewall bots to protect pirate treasures.",
      tags: ["Rust", "Cryptography", "Network Security", "eBPF"],
    },
    {
      id: "open-ocean",
      title: "Open Ocean Hack (Wildcard)",
      pirateTitle: "Uncharted Waters",
      bounty: "$25,000 BOUNTY",
      icon: "🌊",
      description: "No boundaries, no limits! Build any software or hardware project that solves real-world developer problems or disrupts legacy industries.",
      tags: ["Full Stack", "Mobile Apps", "APIs", "DevTools"],
    },
    {
      id: "virtual-realms",
      title: "Virtual Realms & Spatial Tech",
      pirateTitle: "The Illusionist's Isle",
      bounty: "$20,000 BOUNTY",
      icon: "🎮",
      description: "Craft immersive 3D web experiences, Apple Vision Pro AR spatial maps, or WebGL nautical simulators built for modern browsers.",
      tags: ["Three.js", "WebGPU", "VisionOS", "Unreal Engine"],
    },
  ];

  return (
    <section id="bounties" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-300 font-mono text-xs uppercase tracking-widest mb-4">
          <span>🏴‍☠️</span> FIVE HIGH-SEAS CHALLENGES
        </div>
        <h2 className="font-pirate text-4xl sm:text-5xl md:text-6xl font-bold text-amber-300 drop-shadow-md">
          TREASURE BOUNTY TRACKS
        </h2>
        <p className="mt-3 text-amber-100/80 font-sans text-base sm:text-lg">
          Pick your quest, recruit your crew, and claim your share of the $150,000 golden chest.
        </p>
      </div>

      {/* Grid of Track Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="group relative rounded-2xl bg-[#1e120d] border border-[#d4af37]/40 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-400 transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-500/40 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {track.icon}
                </span>
                <span className="px-3.5 py-1 rounded-full font-pirate text-sm font-bold text-amber-300 bg-amber-950 border border-amber-500/40 shadow-sm">
                  {track.bounty}
                </span>
              </div>

              <span className="text-xs font-mono font-semibold text-amber-400/80 uppercase tracking-widest">
                {track.pirateTitle}
              </span>
              <h3 className="font-pirate text-2xl font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                {track.title}
              </h3>
              <p className="mt-3 text-amber-100/70 text-sm leading-relaxed font-sans">
                {track.description}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-amber-900/40">
              <div className="flex flex-wrap gap-1.5 mb-5">
                {track.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-[#2d1c15] border border-amber-900/30 text-amber-200/70 text-[11px] font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onSelectTrack(track)}
                className="w-full py-2.5 rounded-xl font-pirate text-base tracking-wider text-amber-300 border border-amber-500/40 bg-amber-950/60 hover:bg-[#8b1e1b] hover:text-white hover:border-amber-400 transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>CLAIM THIS QUEST</span>
                <span className="group-hover/btn:translate-x-1 transition-transform">➔</span>
              </button>
            </div>
          </div>
        ))}

        {/* SPONSOR CARD */}
        <div className="rounded-2xl bg-gradient-to-br from-[#3d2314] to-[#1e120d] border-2 border-dashed border-[#d4af37]/60 p-7 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-3xl mb-4 animate-bounce">
            🏴‍☠️
          </div>
          <h3 className="font-pirate text-2xl font-bold text-amber-300">
            PROPOSE A CUSTOM BOUNTY
          </h3>
          <p className="mt-2 text-sm text-amber-100/70 font-sans">
            Representing a tech sponsor or protocol? Sponsor your own custom track with dedicated prizes!
          </p>
          <a
            href="mailto:sponsors@hackpreneur.io"
            className="mt-6 px-6 py-2.5 rounded-xl font-pirate text-base text-[#1e120d] font-bold bg-amber-400 hover:bg-amber-300 transition-all shadow-md"
          >
            BECOME A SHIP SPONSOR
          </a>
        </div>
      </div>
    </section>
  );
}
