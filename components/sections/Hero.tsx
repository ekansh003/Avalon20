"use client";

import PhotoReel from "./PhotoReel";

const path =
  "M1 209.434C58.5872 255.935 387.926 325.938 482.583 209.434C600.905 63.8051 525.516 -43.2211 427.332 19.9613C329.149 83.1436 352.902 242.723 515.041 267.302C644.752 286.966 943.56 181.94 995 156.5";

// Images served from public/ref
const imgs = [
  { src: "/ref/girl10.jpg" },
  { src: "/ref/girl11.jpg" },
  { src: "/ref/girl12.jpg" },
  { src: "/ref/girl13.jpg" },
  { src: "/ref/girl14.jpg" },
  { src: "/ref/girl15.jpg" },
  { src: "/ref/girl16.jpg" },
  { src: "/ref/girl17.jpg" },
  { src: "/ref/girl18.jpg" },
  { src: "/ref/girl19.jpg" },
  { src: "/ref/girl20.jpg" },
  { src: "/ref/girl21.jpg" },
  { src: "/ref/girl22.jpg" },
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden flex min-h-screen w-full flex-col overflow-x-hidden bg-[#FAFAF7]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=Work+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap");

        .hero-display {
          font-family: "Bricolage Grotesque", sans-serif;
        }
        .hero-body {
          font-family: "Work Sans", sans-serif;
        }
        .hero-mono {
          font-family: "JetBrains Mono", monospace;
        }
      `}</style>

      {/* Top row: quiet date stamp, nothing else competing for attention */}
      <div className="hero-mono flex items-center justify-between px-8 pt-8 text-[11px] uppercase tracking-[0.25em] text-[#8A8A80] sm:px-14">
        <span>Sep 29</span>
        <span>level 20</span>
      </div>

      {/* Headline — centered in the upper half, generous but not stretched to fill the screen */}
      <div className="px-8 pt-16 sm:px-14 sm:pt-20">
        <h1 className="hero-display text-[11vw] leading-[0.86] tracking-tight text-[#14140F] sm:text-6xl lg:text-7xl">
          <span className="font-light">Happy</span>
          <br />
          <span className="relative top-2 font-bold">Birthday</span>
          <br />
          <span className="font-semibold text-amber-500">cheesecake🧀</span>
        </h1>

        <div className="mt-6 h-px w-16 bg-[#9C7A3F]" />

        <p className="hero-body mt-6 max-w-sm text-base leading-relaxed text-[#4A4A42]">
          May this year bring you closer to everything you're chasing.
        </p>
      </div>

      {/* The trail — moved up under the headline, full-bleed edge to edge, tilted */}
      <div className=" absolute top-40 left-1/2 mt-0 w-screen -rotate-10 -translate-x-1/2 ">
        <PhotoReel
          path={path}
          viewBox="0 0 996 330"
          width="100%"
          height="300"
          baseVelocity={5}
          slowdownOnHover={true}
          draggable={true}
          repeat={2}
          dragSensitivity={0.08}
          dragVelocityDecay={0.98}
          slowDownFactor={0.05}
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          className="w-full h-full"
          responsive
          grabCursor
        >
          {imgs.map((img, i) => (
            <div
              key={i}
              className="h-14 w-14 overflow-hidden border border-[#14140F]/15 bg-[#14140F]/5 transition-transform duration-300 ease-out hover:scale-105"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={`Memory ${i + 1}`}
                className="h-full w-full object-cover grayscale transition-[filter] duration-300 ease-out hover:grayscale-0"
                draggable={false}
              />
            </div>
          ))}
        </PhotoReel>
      </div>

      {/* Remaining space stays quiet on purpose — a hairline and a small mark, nothing more */}
      <div className="mt-auto flex items-center justify-between px-8 pb-8 sm:px-14">
        <div className="h-px flex-1 bg-[#14140F]/10" />
        <span className="hero-mono px-4 text-[10px] uppercase tracking-[0.25em] text-[#8A8A80]">
          Made with ❤️ by broo
        </span>
      </div>
    </section>
  );
};
