"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CountdownTimer from "./components/CountdownTimer";
import ScheduleSection from "./components/ScheduleSection";
import FaqSection from "./components/FaqSection";
import AboutSection from "./components/AboutSection";
import PastEventsSection from "./components/PastEventsSection";
import OrganizersSection from "./components/OrganizersSection";
import SponsorsSection from "./components/SponsorsSection";
import FooterSection from "./components/FooterSection";
import RegistrationModal from "./components/RegistrationModal";
import AmbientAudio from "./components/AmbientAudio";
import { Anchor, Download } from "lucide-react";
import Image from "next/image";

export default function Home() {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [selectedTrack, setSelectedTrack] = useState<string>("ai-captains");
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [activeSection, setActiveSection] = useState("home");

    const handleOpenRegister = () => {
        window.open(
            "https://forms.gle/GSExBRPYAzxPeDxq6",
            "_blank",
            "noopener,noreferrer",
        );
    };

    // const handleOpenTrackModal = (track: any) => {
    //   setSelectedTrack(track.id);
    //   handleOpenRegister();
    // };

    return (
        <div className="relative min-h-screen bg-[#faf4e5] text-[#1e120d] flex flex-col font-sans overflow-x-hidden selection:bg-amber-900/30 selection:text-amber-900">
            {/* AMBIENT AUDIO SYNTH */}
            <AmbientAudio enabled={soundEnabled} />

            {/* TOP NAVIGATION BAR */}
            <Navbar
                onOpenRegister={handleOpenRegister}
                soundEnabled={soundEnabled}
                onToggleSound={() => setSoundEnabled(!soundEnabled)}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />

            <main className="flex-1 flex flex-col pt-20">
                <section
                    id="home"
                    className="relative isolate w-full min-h-screen flex flex-col justify-between overflow-hidden"
                >
                    {/* SVG / Pirate Hero Background */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10 scale-105 origin-center brightness-[1.02] contrast-[1.02]"
                        style={{ backgroundImage: "url('/hero.svg')" }}
                    >
                        {/* Subtle Gradient Overlays for text legibility */}
                        <div className="absolute inset-0 bg-linear-to-r from-[#faf4e5]/95 via-[#faf4e5]/80 to-transparent md:w-3/5 lg:w-1/2" />
                        <div className="absolute inset-0 bg-linear-to-t from-[#faf4e5] via-transparent to-transparent bottom-0" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 w-full flex-1 flex flex-col justify-center">
                        <div className="max-w-2xl">
                            {/* TOP SCROLL BADGE */}
                            <div className="relative mb-6 animate-float-subtle inline-block h-14 sm:h-16 md:h-20 w-64 sm:w-80">
                                <Image
                                    src="/images/banner.png"
                                    alt="Calling All Innovators!"
                                    fill
                                    sizes="(max-width: 768px) 256px, 320px"
                                    className="object-contain filter drop-shadow-md select-none"
                                />
                            </div>

                            {/* MAIN HEADLINE WITH PIRATE FONT */}
                            <div className="space-y-1 max-w-full">
                                <h1 className="font-pirate text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-[#1e120d] drop-shadow-sm py-1 break-words">
                                    SET SAIL.
                                </h1>
                                <h1 className="font-pirate text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-[#1e120d] drop-shadow-sm py-1 break-words">
                                    BUILD THE FUTURE.
                                </h1>
                                <h1 className="font-pirate text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-[#8b1e1b] drop-shadow-sm py-1 break-words">
                                    CONQUER LIMITS.
                                </h1>
                            </div>

                            {/* ANCHOR DIVIDER LINE */}
                            <div className="flex items-center gap-3 my-5 max-w-md">
                                <div className="h-px flex-1 bg-linear-to-r from-[#8b1e1b]/40 to-transparent" />
                                <span className="text-[#8b1e1b] text-lg font-pirate">
                                    ⚓
                                </span>
                                <div className="h-px flex-1 bg-linear-to-l from-[#8b1e1b]/40 to-transparent" />
                            </div>

                            {/* TAGLINE */}
                            <p className="text-[#3d271d] font-sans font-medium text-base sm:text-lg max-w-lg leading-relaxed">
                                Join{" "}
                                <strong className="text-[#1e120d] font-semibold">
                                    Hackpreneur
                                </strong>{" "}
                                – the ultimate hackathon where creativity meets
                                code and ideas become impact.
                            </p>

                            {/* ACTION BUTTONS */}
                            <div className="mt-7 flex flex-wrap items-center gap-4">
                                <a
                                    href="https://forms.gle/GSExBRPYAzxPeDxq6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleOpenRegister}
                                    className="px-6 py-3.5 rounded-xl font-pirate text-lg sm:text-xl text-white font-bold btn-crimson flex items-center gap-3 tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                                >
                                    <Anchor className="w-5 h-5 text-white" />
                                    <span>REGISTER NOW</span>
                                </a>

                                <a
                                    href="/HackPreneur'26 Broucher_b.pdf"
                                    download="Hackpreneur_Brochure.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3.5 rounded-xl font-pirate text-base sm:text-lg text-[#1e120d] font-bold bg-[#e6d8b8] hover:bg-[#f3e5ab] border border-[#c8a355] shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                                >
                                    <Download className="w-5 h-5 text-[#8b1e1b]" />
                                    <span>DOWNLOAD BROCHURE</span>
                                </a>
                            </div>

                            {/* WOOD PLANK COUNTDOWN TIMER BOX */}
                            <div className="mt-6">
                                <CountdownTimer />
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM PARCHMENT FEATURE RIBBON */}
                    {/*<ParchmentRibbon />*/}
                </section>

                {/* ========================================== */}
                {/* TECHFEST EVENTS ARENA SECTION               */}
                {/* ========================================== */}
                {/*<TechFestEventsSection />*/}

                {/*<BlurSeparator />*/}

                {/* ========================================== */}
                {/* ABOUT SECTION                              */}
                {/* ========================================== */}
                <AboutSection onOpenRegister={handleOpenRegister} />

                {/*<BlurSeparator />*/}

                {/* ========================================== */}
                {/* PAST EVENTS & ACHIEVEMENTS SECTION          */}
                {/* ========================================== */}
                <PastEventsSection />

                {/*<BlurSeparator />*/}

                {/* ========================================== */}
                {/* SCHEDULE SECTION                           */}
                {/* ========================================== */}
                <ScheduleSection />

                {/* ========================================== */}
                {/* SPONSORS SECTION                           */}
                {/* ========================================== */}
                <SponsorsSection />

                {/* ========================================== */}
                {/* ORGANIZERS SECTION                         */}
                {/* ========================================== */}
                <OrganizersSection />

                {/*<BlurSeparator />*/}

                {/* ========================================== */}
                {/* FAQ SECTION                                */}
                {/* ========================================== */}
                <section
                    id="faq"
                    className="relative isolate w-full min-h-screen flex flex-col justify-center overflow-hidden py-16 sm:py-24 scroll-mt-20"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20 brightness-[1.02] contrast-[1.02]"
                        style={{ backgroundImage: "url('/about_bg.svg')" }}
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-[#faf4e5]/90 via-[#faf4e5]/80 via-50% to-[#faf4e5]/70 -z-10" />
                        <div className="absolute inset-0 bg-linear-to-b from-[#faf4e5] via-transparent to-[#faf4e5] -z-10" />
                    </div>
                    <FaqSection />
                </section>
            </main>

            {/* FOOTER SECTION */}
            <FooterSection onOpenRegister={handleOpenRegister} />

            {/* REGISTRATION MODAL */}
            <RegistrationModal
                isOpen={isRegisterOpen}
                onClose={() => setIsRegisterOpen(false)}
                selectedTrack={selectedTrack}
            />
        </div>
    );
}
