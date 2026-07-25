"use client";

import React, { useState } from "react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTrack?: string;
}

export default function RegistrationModal({ isOpen, onClose, selectedTrack }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    handle: "",
    email: "",
    github: "",
    role: "Master Gunner (Full Stack)",
    track: selectedTrack || "ai-captains",
    dietary: "Standard Pirate Rations",
  });

  const [submittedPassport, setSubmittedPassport] = useState<any>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open("https://forms.gle/GSExBRPYAzxPeDxq6", "_blank", "noopener,noreferrer");
    const passportId = "PIRATE-" + Math.floor(100000 + Math.random() * 900000);
    setSubmittedPassport({
      ...formData,
      passportId,
      issuedDate: new Date().toLocaleDateString(),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl rounded-3xl glass-card border border-amber-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(245,158,11,0.25)] max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 flex items-center justify-center hover:bg-amber-500/20 text-lg font-bold"
        >
          ✕
        </button>

        {!submittedPassport ? (
          <div>
            {/* Form Header */}
            <div className="text-center mb-6">
              <span className="font-pirate text-3xl text-amber-400">🏴‍☠️</span>
              <h3 className="font-pirate text-3xl font-bold gold-gradient-text mt-1">
                JOIN THE PIRATE CREW
              </h3>
              <p className="text-sm text-gray-300 font-sans mt-1">
                Register your hacker vessel for HACKPRENEUR 2026. Claim your official Crew Passport.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Hacker Handle */}
              <div>
                <label className="block text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider mb-1">
                  PIRATE HANDLE / HACKER ALIAS
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. CaptainBlackbeard"
                  value={formData.handle}
                  onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-amber-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-amber-400 font-mono text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider mb-1">
                  COMMUNICATION FREQUENCY (EMAIL)
                </label>
                <input
                  type="email"
                  required
                  placeholder="buccaneer@highseas.io"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-amber-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-amber-400 font-mono text-sm"
                />
              </div>

              {/* GitHub */}
              <div>
                <label className="block text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider mb-1">
                  GITHUB LOGBOOK / PORTFOLIO LINK
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://github.com/hacker"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-amber-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-amber-400 font-mono text-sm"
                />
              </div>

              {/* Crew Role */}
              <div>
                <label className="block text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider mb-1">
                  CREW ROLE / SPECIALTY
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-amber-500/30 text-gray-100 focus:outline-none focus:border-amber-400 font-mono text-sm"
                >
                  <option value="Captain (Tech Lead / Architect)">Ship Captain (Tech Lead / Architect)</option>
                  <option value="Master Gunner (Full Stack Developer)">Master Gunner (Full Stack Developer)</option>
                  <option value="Navigator (UI/UX & Graphics)">Navigator (UI/UX & Graphics)</option>
                  <option value="Quartermaster (AI & Data Engineer)">Quartermaster (AI & Data Engineer)</option>
                  <option value="Powder Monkey (Junior Hacker / Student)">Powder Monkey (Junior Hacker)</option>
                </select>
              </div>

              {/* Target Bounty Track */}
              <div>
                <label className="block text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider mb-1">
                  PRIMARY BOUNTY QUEST
                </label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-amber-500/30 text-gray-100 focus:outline-none focus:border-amber-400 font-mono text-sm"
                >
                  <option value="ai-captains">AI Captains & Autonomous Agents ($40k)</option>
                  <option value="web3-booty">Web3 & Decentralized Booty ($35k)</option>
                  <option value="cyber-defense">Cyber Defense & Zero-Day Galleons ($30k)</option>
                  <option value="open-ocean">Open Ocean Hack - Wildcard ($25k)</option>
                  <option value="virtual-realms">Virtual Realms & Spatial Computing ($20k)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-pirate text-2xl text-gray-950 font-bold bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-[1.02] transition-transform mt-4"
              >
                SWOAR FEALTY & BOARD GALLEON ⚡
              </button>
            </form>
          </div>
        ) : (
          /* PASSPORT CONFIRMATION SCREEN */
          <div className="text-center py-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono mb-4">
              <span>✓</span> PASSPORT ISSUED & SEALED
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-amber-950/60 to-slate-950 border-2 border-amber-400 text-left shadow-[0_0_30px_rgba(245,158,11,0.3)] relative">
              <div className="flex justify-between items-start border-b border-amber-500/30 pb-4 mb-4">
                <div>
                  <h4 className="font-pirate text-3xl font-bold gold-gradient-text">
                    CREW PASSPORT
                  </h4>
                  <span className="text-xs font-mono text-cyan-400">
                    ID: {submittedPassport.passportId}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center font-pirate text-2xl text-amber-300">
                  ⚓
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-gray-400 uppercase block">BUCCANEER ALIAS</span>
                  <span className="font-pirate text-xl text-amber-300">{submittedPassport.handle}</span>
                </div>
                <div>
                  <span className="text-gray-400 uppercase block">CREW ROLE</span>
                  <span className="text-gray-200 font-semibold">{submittedPassport.role}</span>
                </div>
                <div>
                  <span className="text-gray-400 uppercase block">BOUNTY QUEST</span>
                  <span className="text-cyan-300 font-semibold">{submittedPassport.track}</span>
                </div>
                <div>
                  <span className="text-gray-400 uppercase block">DATE OF BOARDING</span>
                  <span className="text-gray-200">{submittedPassport.issuedDate}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-500/20 flex justify-between items-center text-[10px] font-mono text-amber-400/80">
                <span>OFFICIAL SEAL: HACKPRENEUR '26</span>
                <span>STATUS: READY FOR LAUNCH</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-6 w-full py-3 rounded-xl font-pirate text-lg text-gray-950 font-bold bg-amber-400 hover:bg-amber-300 transition-colors"
            >
              CLOSE & RETURN TO GALLEON
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
