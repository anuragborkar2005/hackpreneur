"use client";

import { useEffect, useRef } from "react";

export default function AmbientAudio({ enabled }: { enabled: boolean }) {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    if (!enabled) {
      if (audioCtxRef.current && isPlayingRef.current) {
        audioCtxRef.current.suspend();
        isPlayingRef.current = false;
      }
      return;
    }

    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContextClass) return;
        audioCtxRef.current = new AudioContextClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      isPlayingRef.current = true;

      // Create subtle ocean wave synth (pink noise + LFO filter)
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.015; // Very low ambient volume
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(250, ctx.currentTime);

      // LFO for wave swelling
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.1, ctx.currentTime); // 10s wave cycle
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(150, ctx.currentTime);

      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      const mainGain = ctx.createGain();
      mainGain.gain.setValueAtTime(0.08, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(mainGain);
      mainGain.connect(ctx.destination);

      whiteNoise.start();
      lfo.start();
    } catch (e) {
      console.warn("Web Audio ambient initialization skipped:", e);
    }
  }, [enabled]);

  return null;
}
