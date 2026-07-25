"use client";

import React, { useSyncExternalStore } from "react";

const TARGET_DATE = new Date("2026-08-08T08:00:00Z").getTime();

const emptySubscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

function subscribe(callback: () => void) {
  const interval = setInterval(callback, 1000);
  return () => clearInterval(interval);
}

function getSnapshot() {
  return Math.floor(Date.now() / 1000);
}

function getServerSnapshot() {
  return 0;
}

const SERVER_FALLBACK = { days: 14, hours: 0, minutes: 0, seconds: 0 };

function getTimeLeftFromSeconds(timestampSeconds: number) {
  if (timestampSeconds === 0) return SERVER_FALLBACK;
  const nowMs = timestampSeconds * 1000;
  const difference = TARGET_DATE - nowMs;

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
}

export default function CountdownTimer() {
  const isMounted = useIsMounted();
  const timestampSeconds = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const timeLeft = isMounted
    ? getTimeLeftFromSeconds(timestampSeconds)
    : SERVER_FALLBACK;

  const units = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-xl mt-6">
      {/* Wood Plank Box */}
      <div
        className="relative rounded-2xl text-center overflow-hidden
                   bg-[url('/images/timer.png')] bg-cover bg-center h-full w-full min-h-30 px-3 sm:px-6 py-6 sm:py-8"
      >
        {/* Title Bar */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="font-pirate text-amber-300 text-xs sm:text-base tracking-widest font-bold uppercase drop-shadow-sm">
            8TH AUGUST 2026 • 12 HOURS INNOVATION VOYAGE
          </span>
        </div>

        {/* Counter Columns */}
        <div className="grid grid-cols-4 gap-1 sm:gap-2 divide-x divide-amber-900/40">
          {units.map((unit, idx) => (
            <div key={idx} className="flex flex-col items-center first:pl-0 pl-1 sm:pl-2">
              <span className="font-pirate text-2xl sm:text-4xl font-bold text-white tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
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
