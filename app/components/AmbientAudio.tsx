"use client";

import { useEffect, useRef } from "react";

export default function AmbientAudio({ enabled }: { enabled: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio("/audio/background.mp3");
      audio.loop = true;
      audio.volume = 0.4;
      audioRef.current = audio;
    }

    const audio = audioRef.current;

    const startPlayback = () => {
      if (audio && enabled && audio.paused) {
        audio.play().catch(() => {});
      }
    };

    if (enabled) {
      // 1. Try immediate playback
      startPlayback();

      // 2. Attach listeners for any early user gesture (scroll, pointer, keydown, touch)
      const events = ["pointerdown", "pointermove", "scroll", "click", "keydown", "touchstart"];
      const handleUserGesture = () => {
        startPlayback();
        events.forEach((evt) => window.removeEventListener(evt, handleUserGesture));
      };

      events.forEach((evt) => window.addEventListener(evt, handleUserGesture, { passive: true }));

      return () => {
        events.forEach((evt) => window.removeEventListener(evt, handleUserGesture));
      };
    } else {
      audio.pause();
    }
  }, [enabled]);

  return (
    <audio
      ref={(el) => {
        if (el && !audioRef.current) {
          audioRef.current = el;
        }
      }}
      src="/audio/background.mp3"
      loop
      autoPlay
      style={{ display: "none" }}
    />
  );
}
