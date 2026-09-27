"use client";

import { useEffect, useRef } from "react";
import { PageFlip } from "page-flip";
import Image from "next/image";

const pages = [
  {
    src: "/pages/front.png",
    alt: "Scrapbook front cover",
    cover: true,
  },
  {
    src: "/pages/page1.png",
    alt: "Scrapbook page 1",
  },
  {
    src: "/pages/page2.png",
    alt: "Scrapbook page 2",
  },
  {
    src: "/pages/page3.png",
    alt: "Scrapbook page 3",
  },
  {
    src: "/pages/page4.png",
    alt: "Scrapbook page 4",
  },
  {
    src: "/pages/page5.png",
    alt: "Scrapbook page 5",
  },
  {
    src: "/pages/page6.png",
    alt: "Scrapbook page 6",
  },
  {
    src: "/pages/back.png",
    alt: "Scrapbook back cover",
    cover: true,
  },
];

export default function Book() {
  const bookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bookRef.current) return;

    const pageFlip = new PageFlip(bookRef.current, {
      width: 400,
      height: 500,

      autoSize: false,

      // Keeps front/back covers as hard covers
      showCover: true,

      // Same shadow behavior as your current scrapbook
      drawShadow: true,
      maxShadowOpacity: 0.5,

      // Landscape/open-book behavior
      usePortrait: false,

      startPage: 0,
    });

    const bookPages = Array.from(
      bookRef.current.querySelectorAll<HTMLElement>(".book-page"),
    );

    pageFlip.loadFromHTML(bookPages);

    return () => {
      pageFlip.destroy();
    };
  }, []);

  return (
    <div className="scale-[1.25] origin-center">
      <div ref={bookRef} className="relative">
        {pages.map((page, index) => (
          <div
            key={page.src}
            className="book-page relative overflow-hidden bg-white"
            data-density={page.cover ? "hard" : "soft"}
            style={{
              width: 400,
              height: 500,
            }}
          >
            <Image
              src={page.src}
              alt={page.alt}
              fill
              priority={index < 3}
              draggable={false}
              sizes="400px"
              className="object-cover pointer-events-none select-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
