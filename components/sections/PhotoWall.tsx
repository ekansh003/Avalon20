"use client";

import { Caveat } from "next/font/google";
import { DraggableCardBody, DraggableCardContainer } from "../effects/DraggableCards";

const handwriting = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const memories = [
  {
    image: "girl3.jpg",
    caption: "Cutie 🥹",
    sticker: "❤️",
    position: "top-[8%] left-[8%] rotate-[-8deg]",
  },
  {
    image: "girl4.jpg",
    caption: "Baddie 😎",
    sticker: "✨",
    position: "top-[15%] left-[35%] rotate-[6deg]",
  },
  {
    image: "girl5.jpg",
    caption: "Pretty ✨",
    sticker: "🌸",
    position: "top-[10%] right-[10%] rotate-[-5deg]",
  },
  {
    image: "girl6.jpg",
    caption: "Sunshine ☀️",
    sticker: "☀️",
    position: "top-[45%] left-[12%] rotate-[7deg]",
  },
  {
    image: "girl7.jpg",
    caption: "Angel 🪽",
    sticker: "🪽",
    position: "top-[50%] left-[40%] rotate-[-6deg]",
  },
  {
    image: "girl8.jpg",
    caption: "Beautiful 🌸",
    sticker: "🌷",
    position: "top-[40%] right-[12%] rotate-[10deg]",
  },
  {
    image: "girl9.jpg",
    caption: "Queen 👑",
    sticker: "👑",
    position: "bottom-[10%] left-[18%] rotate-[-10deg]",
  },
  {
    image: "girl10.jpg",
    caption: "Gorgeous 💕",
    sticker: "💕",
    position: "bottom-[12%] left-[45%] rotate-[5deg]",
  },
  {
    image: "girl11.jpg",
    caption: "Little Star ⭐",
    sticker: "⭐",
    position: "bottom-[8%] right-[15%] rotate-[-7deg]",
  },
];

export default function LoveGallery() {
  return (
    <DraggableCardContainer
      className="
        relative
        min-h-screen
        overflow-visible
        bg-[#d9d3c7]

        before:absolute
        before:inset-0
        before:pointer-events-none
        before:bg-[linear-gradient(rgba(120,110,90,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(120,110,90,0.12)_1px,transparent_1px)]
        before:bg-[size:40px_40px]

        after:absolute
        after:inset-0
        after:pointer-events-none
        after:bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.08))]
      "
    >
      {memories.map((memory) => (
        <DraggableCardBody
          key={memory.image}
          className={`
            absolute
            ${memory.position}
            bg-white
            rounded-xl
            shadow-2xl
            p-3
            overflow-visible
            cursor-grab
            active:cursor-grabbing
            touch-none
            select-none
            z-10
            hover:scale-[1.03]
          `}
        >
          <div className="relative overflow-visible">
            <img
              src={`/ref/${memory.image}`}
              alt={memory.caption}
              draggable={false}
              className="
                h-56
                w-56
                rounded-lg
                object-cover
                pointer-events-none
                select-none
              "
            />

            <div
              className="
                absolute
                -top-7
                -right-7
                text-5xl
                z-50
                pointer-events-none
                drop-shadow-md
              "
            >
              {memory.sticker}
            </div>

            <p
              className={`
                mt-3
                text-center
                text-neutral-700
                text-3xl
                font-semibold
                ${handwriting.className}
                pointer-events-none
              `}
            >
              {memory.caption}
            </p>
          </div>
        </DraggableCardBody>
      ))}

      <div className="absolute top-20 left-20 text-5xl opacity-30 pointer-events-none">
        ✿
      </div>

      <div className="absolute bottom-20 right-20 text-5xl opacity-30 pointer-events-none">
        ♡
      </div>

      <div className="absolute top-[45%] right-[5%] text-4xl opacity-30 pointer-events-none">
        ✨
      </div>

      <div className="absolute top-12 right-24 text-5xl opacity-20 pointer-events-none">
        ☁️
      </div>

      <div className="absolute bottom-32 left-10 text-4xl opacity-20 pointer-events-none">
        📸
      </div>
    </DraggableCardContainer>
  );
}
