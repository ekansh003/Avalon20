import { Hero } from "@/components/sections/Hero";
import PhotoWall from "@/components/sections/PhotoWall";
import Galaxy from "@/components/sections/Galaxy";
import Book from "@/components/sections/ScrapBook";

export default function Home() {
  return (
    <div className="h-full w-full overflow-x-hidden overflow-y-scroll snap-y snap-mandatory bg-zinc-50 dark:bg-black select-none scroll-smooth">
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

      <section className="h-screen w-full snap-start snap-always shrink-0 overflow-visible relative z-10">
        <Hero />
      </section>

      <section className="h-screen w-full snap-start snap-always shrink-0 overflow-visible relative z-10">
        <PhotoWall />
      </section>

      <section className="h-screen w-full snap-start snap-always shrink-0 overflow-visible relative z-10">
        <div className="flex h-screen overflow-hidden flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <Book />
        </div>
      </section>

      <section className="h-screen w-full snap-start overflow-y-scroll snap-always shrink-0 relative">
        <Galaxy />
      </section>
    </div>
  );
}
