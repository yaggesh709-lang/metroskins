"use client";

import { useState } from "react";

export default function FlipCard({ name }: { name: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
  className="
  relative w-[420px] h-[260px]
  cursor-pointer
  transition-all duration-500
  hover:-translate-y-3
  hover:scale-[1.02]
"
  style={{ perspective: "1600px" }}
  onClick={() => setFlipped(!flipped)}
>
      <div
        className="absolute inset-0 duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Front */}
        <div
          className="
          absolute inset-0
          rounded-[42px]
          bg-gradient-to-br
          from-zinc-500
          via-zinc-700
          to-zinc-950
          border border-zinc-500
          shadow-[0_60px_180px_rgba(255,255,255,0.12)]
          flex flex-col items-center justify-center
          text-center
        "
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <p className="text-zinc-400 text-sm uppercase tracking-[0.25em]">
            MetroSkins
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {name}
          </h2>
          <div
  className="
  relative w-[420px] h-[260px]
  cursor-pointer
  transition-all duration-500
  hover:-translate-y-3
  hover:scale-[1.02]
"
  style={{ perspective: "1600px" }}
  onClick={() => setFlipped(!flipped)}
></div>
        </div>

        {/* Back */}
        <div
          className="
          absolute inset-0
          rounded-[42px]
          bg-zinc-900
          border border-zinc-700
          flex flex-col items-center justify-center
          text-center
        "
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <p className="text-zinc-500 text-sm uppercase tracking-[0.25em]">
            MetroSkins
          </p>

          <h2 className="text-3xl font-bold mt-3">
            NFC Enabled
          </h2>

          <p className="text-zinc-400 mt-3">
            Tap • Travel • Repeat
          </p>
        </div>
      </div>
    </div>
  );
}