"use client";

import React, { useState } from "react";
import { Search as SearchIcon, ExternalLink as ExternalIcon, X as XIcon, Trophy as TrophyIcon, Calendar as CalendarIcon, Users as UsersIcon, MapPin as MapIcon, Sparkles, Info as InfoIcon } from "lucide-react";

export interface TechEvent {
  id: string;
  title: string;
  category: "Hackathons" | "Coding & CTF" | "AI & Robotics" | "Gaming & Esports" | "Design & Web" | "Paper & Expo" | "Workshops";
  icon: string;
  tagline: string;
  description: string;
  prizePool: string;
  prizesBreakdown: { place: string; amount: string }[];
  teamSize: string;
  entryFee: string;
  date: string;
  time: string;
  venue: string;
  tags: string[];
  rules: string[];
  googleFormUrl: string;
  coordinators: { name: string; phone: string; role?: string }[];
  featured?: boolean;
  badge?: string;
}

export const TECHFEST_EVENTS: TechEvent[] = [
  {
    id: "hackpreneur-2026",
    title: "HackPreneur '26",
    category: "Hackathons",
    icon: "🏴‍☠️",
    tagline: "1’st International Innovation Hackathon | Presented by Itechroots 16.0",
    description: "Spend less time. Win big.⚡️ Seize the opportunity! The premier 12-hour hybrid hackathon hosted at IT Department, YCCE in collaboration with GDG Cloud Nagpur.",
    prizePool: "₹41,000 Total",
    prizesBreakdown: [
      { place: "🥇 1st Winner", amount: "₹21,000 Cash Prize" },
      { place: "🥈 2nd Winner", amount: "₹15,000 Cash Prize" },
      { place: "🥉 3rd Winner", amount: "₹5K Capello Vouchers" }
    ],
    teamSize: "Teams of 4 - 6",
    entryFee: "₹600 / Team",
    date: "8th August 2026",
    time: "12 Hours (08:00 AM - 08:00 PM)",
    venue: "Hybrid Mode | IT Department, YCCE",
    tags: ["Hackathon", "Innovation", "GDG Cloud", "Hybrid", "Startups"],
    rules: [
      "Spend less time. Win big.⚡️ 12 Hours duration on 8th August 2026.",
      "Teams must consist of 4 to 6 members with registration fee of ₹600/team.",
      "Hybrid mode allows both online and offline participation at IT Department, YCCE.",
      "Partner: GDG Cloud Nagpur."
    ],
    googleFormUrl: "https://forms.gle/GSExBRPYAzxPeDxq6",
    coordinators: [
      { name: "Tejasvi Jadhao", phone: "9403315952", role: "VP, CSI" },
      { name: "Ojas Satdeve", phone: "8856012282", role: "Secretary, CSI" }
    ],
    featured: true,
    badge: "FLAGSHIP HACKATHON"
  },
  {
    id: "protorush",
    title: "ProtoRush",
    category: "Paper & Expo",
    icon: "🚀",
    tagline: "Fast-Paced Hardware & Software Prototype Showcase",
    description: "Showcase your working prototypes, innovative hardware models, and functional software ideas to expert judges.",
    prizePool: "₹3,000",
    prizesBreakdown: [
      { place: "1st Prize", amount: "₹2,000" },
      { place: "2nd Prize", amount: "₹1,000" }
    ],
    teamSize: "2 - 3 Members",
    entryFee: "₹100 / person",
    date: "7 August",
    time: "10:00 AM - 02:00 PM",
    venue: "IT Department",
    tags: ["Prototype", "Hardware", "IoT", "Innovation"],
    rules: [
      "Working prototype or simulation demo required.",
      "Teams get 10 minutes for pitch presentation + 5 mins Q&A."
    ],
    googleFormUrl: "https://forms.gle/GSExBRPYAzxPeDxq6",
    coordinators: [
      { name: "Prashik", phone: "8390278346", role: "Event Lead" },
      { name: "Aniket", phone: "9373366406", role: "Co-Lead" }
    ],
    featured: true,
    badge: "EXPO SHOWCASE"
  },
  {
    id: "agent-arena",
    title: "AgentArena",
    category: "AI & Robotics",
    icon: "🤖",
    tagline: "Build AI agents to solve Real-world Challenge",
    description: "1 Round autonomous AI agents battle to build agentic workflows and tackle complex real-world challenges.",
    prizePool: "₹2,000",
    prizesBreakdown: [
      { place: "1st Prize", amount: "₹1,200" },
      { place: "2nd Prize", amount: "₹800" }
    ],
    teamSize: "3 Members (max)",
    entryFee: "₹250 / team",
    date: "6th August 2026",
    time: "11:00 AM Onwards",
    venue: "IT Department, YCCE",
    tags: ["AI Agents", "LLMs", "Automation", "Python"],
    rules: [
      "1 Round challenge.",
      "Build AI agents to solve real-world problems.",
      "Evaluated on technical innovation, autonomy, and speed."
    ],
    googleFormUrl: "https://forms.gle/GSExBRPYAzxPeDxq6",
    coordinators: [
      { name: "Sahil Choudhari", phone: "9527649440", role: "Organizer" },
      { name: "Sahil Nihate", phone: "9226031904", role: "Organizer" }
    ],
    featured: true,
    badge: "AI BATTLE"
  },
  {
    id: "code-clash",
    title: "Code Clash",
    category: "Coding & CTF",
    icon: "💻",
    tagline: "1 Round Speed Coding Challenge",
    description: "Battle it out in a competitive coding challenge testing speed algorithms, data structures, and optimized problem solving.",
    prizePool: "₹1,500",
    prizesBreakdown: [
      { place: "1st Prize", amount: "₹1,000" },
      { place: "2nd Prize", amount: "₹500" }
    ],
    teamSize: "Individual",
    entryFee: "₹80 / person",
    date: "6th August 2026",
    time: "02:00 PM - 04:30 PM",
    venue: "IT Department, YCCE",
    tags: ["Algorithms", "C++", "Python", "Java"],
    rules: [
      "1 Round coding challenge.",
      "Languages supported: C++, C, Java, Python.",
      "Plagiarism checks strictly enforced."
    ],
    googleFormUrl: "https://forms.gle/GSExBRPYAzxPeDxq6",
    coordinators: [
      { name: "Dhairya Deulkar", phone: "Organizer", role: "Lead" },
      { name: "Kunal Chaudhary", phone: "Organizer", role: "Co-Lead" }
    ],
    featured: false
  },
  {
    id: "quiz-code",
    title: "Quiz2Code",
    category: "Coding & CTF",
    icon: "⚡",
    tagline: "Technical Quiz & Coding Challenge",
    description: "2 Rounds competition testing computer science fundamentals, syntax knowledge, and programming prowess.",
    prizePool: "₹1,500",
    prizesBreakdown: [
      { place: "1st Prize", amount: "₹1,000" },
      { place: "2nd Prize", amount: "₹500" }
    ],
    teamSize: "Individual",
    entryFee: "₹75 / person",
    date: "6th August 2026",
    time: "10:30 AM - 12:30 PM",
    venue: "IT Department, YCCE",
    tags: ["Tech Quiz", "Syntax", "Debugging", "Coding"],
    rules: [
      "Round 1: Technical Quiz.",
      "Round 2: Coding Challenge."
    ],
    googleFormUrl: "https://forms.gle/GSExBRPYAzxPeDxq6",
    coordinators: [
      { name: "Tilak Rathi", phone: "8830998981", role: "Organizer" },
      { name: "Tanmay Mankar", phone: "8261011962", role: "Organizer" }
    ],
    featured: false
  },
  {
    id: "poster-design",
    title: "Poster Design",
    category: "Design & Web",
    icon: "🎨",
    tagline: "Into the unknown",
    description: "Unleash your visual creativity in a 1-round digital poster design challenge based on the theme 'Into the unknown'.",
    prizePool: "₹1,500",
    prizesBreakdown: [
      { place: "1st Prize", amount: "₹1,000" },
      { place: "2nd Prize", amount: "₹500" }
    ],
    teamSize: "Individual",
    entryFee: "₹80 / team",
    date: "7th August 2026",
    time: "01:00 PM - 03:30 PM",
    venue: "IT Department, YCCE",
    tags: ["Figma", "Photoshop", "Graphic Design", "UI/UX"],
    rules: [
      "1 Round competition.",
      "Theme: Into the unknown.",
      "Design tools allowed: Figma, Photoshop, Illustrator, Canva."
    ],
    googleFormUrl: "https://forms.gle/GSExBRPYAzxPeDxq6",
    coordinators: [
      { name: "Sahil Ingle", phone: "Organizer", role: "Lead" },
      { name: "Shreeti Gowardhan", phone: "Organizer", role: "Co-Lead" }
    ],
    featured: false
  },
  {
    id: "free-fire",
    title: "Free Fire 🔥",
    category: "Gaming & Esports",
    icon: "🔥",
    tagline: "Battle Royale Mobile Showdown",
    description: "Squad battle in Free Fire! 4 Main Players + 1 Substitute. Final matches held offline at IT Department, YCCE.",
    prizePool: "₹3,000",
    prizesBreakdown: [
      { place: "1st Prize", amount: "₹2,000" },
      { place: "2nd Prize", amount: "₹1,000" }
    ],
    teamSize: "4 Main Players + 1 Substitute",
    entryFee: "₹200 / team",
    date: "6th August 2026",
    time: "02:00 PM Onwards",
    venue: "IT Department, YCCE (Offline Finals)",
    tags: ["Free Fire", "Mobile Gaming", "Esports", "Battle Royale"],
    rules: [
      "Final Matches will be held offline so every member should be present at the time.",
      "Fill the registration form, scan QR and pay fees, upload the payment receipt.",
      "Registration requires Team Name, Captain's Full Name & Phone, and Player Details (Full Name, In-Game Name, In-Game UID) for all 4–5 members.",
      "Once registered you cannot change players.",
      "After registering, join the official WhatsApp group for match updates: https://chat.whatsapp.com/BeNL1ydtsiiF19jki7rE1A?s=cl&p=a&ilr=4"
    ],
    googleFormUrl: "https://forms.gle/GSExBRPYAzxPeDxq6",
    coordinators: [
      { name: "Esports Lead", phone: "Community", role: "Organizer" }
    ],
    featured: true,
    badge: "OFFLINE FINALS"
  },
  {
    id: "bgmi-championship",
    title: "BGMI",
    category: "Gaming & Esports",
    icon: "📱",
    tagline: "Battlegrounds Mobile India Esports",
    description: "Dominate the battlegrounds across intense mobile gaming rounds on 6th and 7th August!",
    prizePool: "₹3,000",
    prizesBreakdown: [
      { place: "1st Prize", amount: "₹2,000" },
      { place: "2nd Prize", amount: "₹1,000" }
    ],
    teamSize: "4-5 Players",
    entryFee: "₹50 / person (₹200 - ₹250 / team)",
    date: "6 & 7 Aug 2026",
    time: "11:00 AM Onwards",
    venue: "IT Department, YCCE",
    tags: ["BGMI", "Esports", "Mobile Gaming", "Tournament"],
    rules: [
      "Strict mobile-only match regulations.",
      "Squad size: 4-5 players."
    ],
    googleFormUrl: "https://forms.gle/GSExBRPYAzxPeDxq6",
    coordinators: [
      { name: "Parth Shirpurkar", phone: "9579346943", role: "Organizer" },
      { name: "Samruddha Belsare", phone: "9764955548", role: "Organizer" }
    ],
    featured: true,
    badge: "ESPORTS TOURNAMENT"
  },
  {
    id: "quiz-mania",
    title: "Quiz Mania",
    category: "Workshops",
    icon: "❓",
    tagline: "General Trivia & Tech Brain Battle",
    description: "Fun, engaging general trivia and technical quiz battle to test your awareness and quick thinking.",
    prizePool: "₹1,000",
    prizesBreakdown: [
      { place: "1st Prize", amount: "₹1,000" }
    ],
    teamSize: "Individual",
    entryFee: "₹65 / person",
    date: "7th August 2026",
    time: "02:00 PM - 04:00 PM",
    venue: "IT Department, YCCE",
    tags: ["Trivia", "Quiz", "Tech", "Fun"],
    rules: [
      "Individual participation.",
      "Buzzer round & rapid-fire final stage."
    ],
    googleFormUrl: "https://forms.gle/GSExBRPYAzxPeDxq6",
    coordinators: [
      { name: "Shreshtha Mishra", phone: "8788776587", role: "Organizer" },
      { name: "Asmita Paunikar", phone: "9326615050", role: "Organizer" }
    ],
    featured: false
  }
];

export default function TechFestEventsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Events");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalEvent, setActiveModalEvent] = useState<TechEvent | null>(null);

  const categories = [
    "All Events",
    "Hackathons",
    "Coding & CTF",
    "AI & Robotics",
    "Gaming & Esports",
    "Design & Web",
    "Paper & Expo",
    "Workshops"
  ];

  const filteredEvents = TECHFEST_EVENTS.filter((evt) => {
    const matchesCategory = selectedCategory === "All Events" || evt.category === selectedCategory;
    const matchesSearch =
      evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleRegisterDirect = (url: string, eventTitle: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="events" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20">
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#2b1b17] text-[#ffd700] font-mono text-xs uppercase tracking-widest mb-4 shadow-md">
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
          <span>ITECHROOTS &apos;16 • ALL EVENTS & COMPETITIONS</span>
        </div>

        <h2 className="font-pirate text-4xl sm:text-5xl md:text-6xl font-bold text-[#1e120d] drop-shadow-sm">
          ITECHROOTS &apos;16 EVENTS ARENA
        </h2>

        {/* Skull Divider Line */}
        <div className="flex items-center justify-center gap-3 my-3 max-w-xs mx-auto">
          <div className="h-0.5 flex-1 bg-linear-to-r from-transparent to-[#8b1e1b]/40" />
          <span className="text-xl font-pirate text-[#8b1e1b]">🏴‍☠️</span>
          <div className="h-0.5 flex-1 bg-linear-to-l from-transparent to-[#8b1e1b]/40" />
        </div>

        <p className="text-[#3d271d] font-sans font-medium text-base sm:text-lg leading-relaxed">
          Explore all competitions, hackathons, esports, workshops, and exhibitions. Click{" "}
          <strong className="text-[#8b1e1b] underline decoration-amber-500">"Register via Google Form"</strong> on any event to submit your entry instantly!
        </p>
      </div>

      {/* FILTER TABS & SEARCH BAR */}
      <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between bg-[#1e120d] p-4 sm:p-5 rounded-2xl border border-[#d4af37]/40 shadow-xl">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl font-pirate text-sm font-bold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? "bg-linear-to-r from-[#d4af37] via-[#b8860b] to-[#8b5a2b] text-[#1e120d] shadow-md scale-105"
                  : "bg-[#2b1b17] text-[#d8c8b0] hover:text-white hover:bg-[#3d271d] border border-[#5c3a1e]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400/70" />
          <input
            type="text"
            placeholder="Search events, tags, rules..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#2b1b17] border border-[#d4af37]/40 text-[#f4ecd8] placeholder-[#9c8975] focus:outline-none focus:border-amber-400 font-sans text-sm shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-400/80 hover:text-white"
            >
              <XIcon className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* EVENTS GRID */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredEvents.map((evt) => {
            const getCategoryAccent = (category: string) => {
              switch (category) {
                case "Hackathons":
                  return {
                    pill: "bg-[#4a1210] border-[#8b1e1b] text-rose-200",
                    badge: "bg-[#8b1e1b] text-white border-[#d4af37]",
                    accentColor: "text-amber-300",
                    hoverGlow: "group-hover:border-amber-400 hover:shadow-[0_8px_30px_rgba(212,175,55,0.25)]"
                  };
                case "Coding & CTF":
                  return {
                    pill: "bg-[#0f2e22] border-[#10b981]/60 text-emerald-200",
                    badge: "bg-[#065f46] text-emerald-100 border-emerald-400/60",
                    accentColor: "text-emerald-300",
                    hoverGlow: "group-hover:border-emerald-400 hover:shadow-[0_8px_30px_rgba(16,185,129,0.25)]"
                  };
                case "AI & Robotics":
                  return {
                    pill: "bg-[#28123d] border-[#a855f7]/60 text-purple-200",
                    badge: "bg-[#6b21a8] text-purple-100 border-purple-400/60",
                    accentColor: "text-purple-300",
                    hoverGlow: "group-hover:border-purple-400 hover:shadow-[0_8px_30px_rgba(168,85,247,0.25)]"
                  };
                case "Gaming & Esports":
                  return {
                    pill: "bg-[#381609] border-[#f97316]/60 text-orange-200",
                    badge: "bg-[#c2410c] text-orange-100 border-orange-400/60",
                    accentColor: "text-orange-300",
                    hoverGlow: "group-hover:border-orange-400 hover:shadow-[0_8px_30px_rgba(249,115,22,0.25)]"
                  };
                case "Design & Web":
                  return {
                    pill: "bg-[#330f24] border-[#ec4899]/60 text-pink-200",
                    badge: "bg-[#be185d] text-pink-100 border-pink-400/60",
                    accentColor: "text-pink-300",
                    hoverGlow: "group-hover:border-pink-400 hover:shadow-[0_8px_30px_rgba(236,72,153,0.25)]"
                  };
                case "Paper & Expo":
                  return {
                    pill: "bg-[#0e2136] border-[#0284c7]/60 text-sky-200",
                    badge: "bg-[#0369a1] text-sky-100 border-sky-400/60",
                    accentColor: "text-sky-300",
                    hoverGlow: "group-hover:border-sky-400 hover:shadow-[0_8px_30px_rgba(2,132,199,0.25)]"
                  };
                case "Workshops":
                default:
                  return {
                    pill: "bg-[#0e2825] border-[#14b8a6]/60 text-teal-200",
                    badge: "bg-[#0f766e] text-teal-100 border-teal-400/60",
                    accentColor: "text-teal-300",
                    hoverGlow: "group-hover:border-teal-400 hover:shadow-[0_8px_30px_rgba(20,184,166,0.25)]"
                  };
              }
            };

            const accent = getCategoryAccent(evt.category);

            return (
              <div
                key={evt.id}
                onClick={() => setActiveModalEvent(evt)}
                className={`group relative rounded-2xl bg-gradient-to-br from-[#2c1c14] via-[#20130d] to-[#160c08] border border-[#d4af37]/35 ${accent.hoverGlow} p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-2xl cursor-pointer overflow-hidden`}
              >
                {/* Top Highlight Badge */}
                {evt.badge && (
                  <div className={`absolute top-0 right-0 ${accent.badge} text-[10px] font-mono font-bold tracking-widest px-3 py-1 rounded-bl-xl shadow-md border-b border-l`}>
                    {evt.badge}
                  </div>
                )}

                <div>
                  {/* Header Icon + Category */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 rounded-xl bg-[#150a06] border border-[#d4af37]/30 flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform shadow-inner">
                      {evt.icon}
                    </span>
                    <div>
                      <span className={`px-2.5 py-0.5 rounded-full ${accent.pill} border text-[11px] font-mono font-bold uppercase tracking-wider`}>
                        {evt.category}
                      </span>
                      <h4 className="text-xs font-mono text-[#d4af37]/80 mt-1 font-semibold">
                        {evt.tagline}
                      </h4>
                    </div>
                  </div>

                  {/* Event Title */}
                  <h3 className="font-pirate text-2xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors leading-tight">
                    {evt.title}
                  </h3>

                  {/* Prize Pool & Team Size */}
                  <div className="my-4 p-3 rounded-xl bg-[#140b06] border border-[#5c3a1e] flex items-center justify-between text-xs font-mono shadow-inner">
                    <div className="flex items-center gap-1.5">
                      <TrophyIcon className="w-4 h-4 text-amber-400" />
                      <span className={`font-bold text-sm ${accent.accentColor}`}>{evt.prizePool}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#d8c8b0]">
                      <UsersIcon className="w-4 h-4 text-cyan-400" />
                      <span>{evt.teamSize}</span>
                    </div>
                  </div>

                  {/* Brief Description */}
                  <p className="text-[#c4b396] text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                    {evt.description}
                  </p>

                  {/* Meta details list */}
                  <div className="mt-4 space-y-1.5 text-xs text-[#a8967e] font-sans border-t border-[#3d271d] pt-3">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{evt.date} • {evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{evt.venue}</span>
                    </div>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="mt-6 pt-4 border-t border-[#3d271d] flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalEvent(evt);
                    }}
                    className="flex-1 py-2.5 px-3 rounded-xl font-pirate text-xs tracking-wider text-[#f3e5ab] border border-[#d4af37]/40 bg-[#2b1b17] hover:bg-[#3d271d] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <InfoIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>DETAILS</span>
                  </button>

                  <button
                    onClick={(e) => handleRegisterDirect(evt.googleFormUrl, evt.title, e)}
                    className="flex-1 py-2.5 px-3 rounded-xl font-pirate text-xs tracking-wider text-white font-bold bg-linear-to-r from-[#8b1e1b] via-[#a81c19] to-[#8b1e1b] hover:from-[#a81c19] hover:to-[#8b1e1b] shadow-lg border border-amber-500/40 hover:scale-102 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>REGISTER (FORM)</span>
                    <ExternalIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#1e120d] rounded-2xl border border-[#5c3a1e] p-8">
          <span className="text-4xl">🔍</span>
          <h3 className="font-pirate text-2xl font-bold text-amber-300 mt-2">
            NO EVENTS FOUND
          </h3>
          <p className="text-sm text-[#c4b396] font-sans mt-1">
            Try adjusting your search filter or category selection.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All Events");
              setSearchQuery("");
            }}
            className="mt-4 px-6 py-2 rounded-xl font-pirate text-sm text-[#1e120d] bg-amber-400 font-bold"
          >
            RESET FILTERS
          </button>
        </div>
      )}

      {/* EVENT DETAILS & GOOGLE FORM MODAL */}
      {activeModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#1e120d] border-2 border-[#d4af37] rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.3)] max-h-[90vh] overflow-y-auto text-[#f4ecd8]">
            {/* Close Modal Button */}
            <button
              onClick={() => setActiveModalEvent(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#2b1b17] border border-[#d4af37]/40 text-amber-400 flex items-center justify-center hover:bg-[#3d271d] transition-all cursor-pointer"
            >
              <XIcon className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 border-b border-[#5c3a1e] pb-5 mb-6">
              <span className="w-16 h-16 rounded-2xl bg-[#2b1b17] border border-[#d4af37] flex items-center justify-center text-4xl shadow-inner">
                {activeModalEvent.icon}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#8b1e1b] text-white text-[10px] font-mono font-bold uppercase">
                    {activeModalEvent.category}
                  </span>
                  <span className="text-xs font-mono text-cyan-300 font-bold">
                    Team: {activeModalEvent.teamSize}
                  </span>
                </div>
                <h3 className="font-pirate text-3xl font-bold text-amber-300 mt-1 leading-none">
                  {activeModalEvent.title}
                </h3>
                <p className="text-xs font-mono text-amber-200/70 mt-1">
                  {activeModalEvent.tagline}
                </p>
              </div>
            </div>

            {/* Key Event Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 font-mono text-xs">
              <div className="p-3 rounded-xl bg-[#2b1b17] border border-[#5c3a1e]">
                <span className="text-[#a8967e] block text-[10px] uppercase">PRIZE POOL</span>
                <span className="font-bold text-amber-400 text-sm">{activeModalEvent.prizePool}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#2b1b17] border border-[#5c3a1e]">
                <span className="text-[#a8967e] block text-[10px] uppercase">ENTRY FEE</span>
                <span className="font-bold text-emerald-400 text-sm">{activeModalEvent.entryFee}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#2b1b17] border border-[#5c3a1e]">
                <span className="text-[#a8967e] block text-[10px] uppercase">DATE</span>
                <span className="font-bold text-cyan-300 text-xs">{activeModalEvent.date}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#2b1b17] border border-[#5c3a1e]">
                <span className="text-[#a8967e] block text-[10px] uppercase">VENUE</span>
                <span className="font-bold text-white text-xs truncate block">{activeModalEvent.venue}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="font-pirate text-lg text-amber-300 mb-1 flex items-center gap-2">
                <span>📜</span> EVENT OVERVIEW
              </h4>
              <p className="text-sm text-[#d8c8b0] leading-relaxed font-sans">
                {activeModalEvent.description}
              </p>
            </div>

            {/* Prizes Breakdown */}
            {activeModalEvent.prizesBreakdown.length > 0 && (
              <div className="mb-6">
                <h4 className="font-pirate text-lg text-amber-300 mb-2 flex items-center gap-2">
                  <TrophyIcon className="w-4 h-4 text-amber-400" /> REWARDS & PRIZES
                </h4>
                <div className="space-y-2 font-mono text-xs">
                  {activeModalEvent.prizesBreakdown.map((p, i) => (
                    <div key={i} className="flex justify-between items-center px-3 py-2 rounded-lg bg-[#2b1b17] border border-[#5c3a1e]">
                      <span className="text-amber-200 font-semibold">{p.place}</span>
                      <span className="text-amber-400 font-bold">{p.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Event Rules */}
            <div className="mb-6">
              <h4 className="font-pirate text-lg text-amber-300 mb-2 flex items-center gap-2">
                <span>⚖️</span> RULES & GUIDELINES
              </h4>
              <ul className="space-y-1.5 text-xs text-[#c4b396] font-sans list-disc list-inside">
                {activeModalEvent.rules.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>

            {/* Event Coordinators */}
            <div className="mb-6 p-4 rounded-xl bg-[#25150c] border border-[#5c3a1e]">
              <h4 className="font-pirate text-sm text-amber-400 mb-2">EVENT COORDINATORS</h4>
              <div className="flex flex-wrap gap-4 text-xs font-mono">
                {activeModalEvent.coordinators.map((c, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-amber-300">👤 {c.name} ({c.role}):</span>
                    <a href={`tel:${c.phone}`} className="text-cyan-400 hover:underline">
                      {c.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* MODAL BOTTOM REGISTER VIA GOOGLE FORM BUTTON */}
            <div className="pt-4 border-t border-[#5c3a1e] flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setActiveModalEvent(null)}
                className="py-3 px-6 rounded-xl font-pirate text-sm text-[#d8c8b0] bg-[#2b1b17] hover:bg-[#3d271d] border border-[#5c3a1e] transition-colors cursor-pointer"
              >
                CLOSE
              </button>

              <a
                href={activeModalEvent.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 rounded-xl font-pirate text-base tracking-wider text-white font-bold bg-linear-to-r from-[#8b1e1b] via-[#a81c19] to-[#8b1e1b] hover:from-[#a81c19] hover:to-[#8b1e1b] shadow-xl border border-amber-400/60 flex items-center justify-center gap-2 hover:scale-102 transition-transform cursor-pointer text-center"
              >
                <span>REGISTER ON GOOGLE FORM</span>
                <ExternalIcon className="w-4 h-4 text-amber-300" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
