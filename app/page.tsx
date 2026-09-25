"use client";

import { useEffect, useRef } from "react";

import { Hero } from "@/components/sections/Hero";
import PhotoWall from "@/components/sections/PhotoWall";
import PersonalNote from "@/components/sections/PersonalNote";
import Book from "@/components/sections/ScrapBook";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type !== "birthday-scroll-next") return;

      heroRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="h-full w-full overflow-x-hidden overflow-y-scroll snap-y snap-mandatory bg-zinc-50 dark:bg-black select-none scroll-smooth">
      {/* PAGE 1 — AGE REVEAL */}
      <section className="h-screen w-full snap-start snap-always shrink-0 overflow-visible relative z-10">
        <iframe
          src="/avalon20.html"
          title="Birthday Reveal"
          style={{
            width: "100vw",
            height: "100vh",
            border: "none",
            display: "block",
          }}
          allow="autoplay"
        />
      </section>

      {/* PAGE 2 — HERO */}
      <section
        ref={heroRef}
        className="h-screen w-full snap-start snap-always shrink-0 overflow-visible relative z-10"
      >
        <Hero />
      </section>

      {/* PAGE 3 */}
      <section className="h-screen w-full snap-start snap-always shrink-0 overflow-visible relative z-10">
        <PhotoWall />
      </section>

      {/* PAGE 4 */}
      <section className="h-screen w-full snap-start snap-always shrink-0 overflow-visible relative z-10">
        <div className="flex h-screen overflow-hidden flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <Book />
        </div>
      </section>

      {/* PAGE 5 */}
      <section className="h-screen w-full overflow-y-scroll snap-start snap-always shrink-0 relative">
        <PersonalNote />
      </section>
    </div>
  );
}
