"use client";

import React from "react";

export default function BlurSeparator() {
  return (
    <div className="relative w-full h-16 sm:h-20 -my-8 z-20 pointer-events-none overflow-hidden bg-[#faf4e5]">
      {/* Base parchment color */}
      <div className="absolute inset-0 bg-[#faf4e5] -z-10" />

      {/* Blurred overlay separator */}
      <div
        className="absolute inset-0 backdrop-linear-[8px]"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 35%, black 65%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 35%, black 65%, transparent)",
        }}
      />

      {/* Soft feathered gradient edges */}
      <div className="absolute inset-0 bg-linear-to-b from-[#faf4e5]/70 via-transparent to-[#faf4e5]/70" />
    </div>
  );
}
