"use client";

export default function PersonalNote() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#140b12] px-6 py-20">
      <div className="relative z-10 w-full max-w-4xl">
        <p className="mb-4 text-center font-mono text-sm uppercase tracking-[0.3em] text-[#c9a15b]">
          A little something for you
        </p>

        <h1 className="mb-10 text-center font-serif text-5xl font-semibold text-white md:text-7xl">
          For You, Always.
        </h1>

        <div className="space-y-6 text-lg leading-8 text-white/80 md:text-xl md:leading-9">
          <p>{/* Your personalized text starts here */}</p>

          <p>{/* Another paragraph */}</p>

          <p>{/* Another paragraph */}</p>

          <p>{/* And so on... */}</p>
        </div>

        <div className="mt-12 text-center font-serif text-2xl italic text-[#e5c98a]">
          With love,
          <br />
          Ekansh ❤️
        </div>
      </div>
    </section>
  );
}
