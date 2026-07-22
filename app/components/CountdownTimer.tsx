"use client";

import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const targetDate = new Date("2026-10-24T09:00:00Z").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 24,
    hours: 5,
    minutes: 38,
    seconds: 19,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
      <div className="w-full max-w-lg mt-6">
        {/* Wood Plank Box */}
        <div
          className="relative rounded-2xl text-center overflow-hidden
                     bg-[url('/images/timer.png')] bg-cover bg-center h-full w-full min-h-30 p-3 pr-3"
        >
          {/* Content */}

          {/* Brass corner studs */}


          {/* Title Bar */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-amber-400 text-sm">⤝</span>
            <span className="font-pirate text-amber-300 text-sm sm:text-base tracking-widest font-bold uppercase drop-shadow-sm">
              THE ADVENTURE BEGINS IN
            </span>
            <span className="text-amber-400 text-sm">⤞</span>
          </div>

          {/* Counter Columns */}
          <div className="grid grid-cols-4 gap-1 sm:gap-2 divide-x divide-amber-900/40">
            {units.map((unit, idx) => (
              <div key={idx} className="flex flex-col items-center first:pl-0 pl-2">
                <span className="font-pirate text-3xl sm:text-4xl font-bold text-white tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs font-mono font-bold text-amber-200 uppercase tracking-wider mt-0.5">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

  );
}
