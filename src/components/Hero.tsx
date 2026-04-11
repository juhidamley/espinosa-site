// src/components/Hero.tsx
import professorPortrait from "@/assets/hero_png.svg";

const Hero = () => {
  const handleExploreClick = () => {
    const next = document.getElementById("wordcloud");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex h-screen w-full overflow-hidden bg-background"
    >
      {/* Right: Professor portrait (transparent SVG) */}
      <div className="hidden md:block absolute right-[5%] bottom-0 h-full w-[52%] lg:w-[55%]">
        <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <img
          src={professorPortrait}
          alt="Dr. Gastón Espinosa"
          className="absolute inset-0 w-full h-full object-contain object-right-bottom"
        />
      </div>

      {/* Left: Text content */}
      <div className="relative z-10 flex flex-col justify-center pl-20 md:pl-32 lg:pl-48 pr-8 w-full md:w-1/2 lg:w-[50%]">
        <h1 className="font-heading text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.95] text-foreground font-normal mb-4">
          Discover
        </h1>
        <h1 className="font-heading text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.95] text-primary font-normal mb-8">
          Dr. Gastón
          <br />
          Espinosa
        </h1>
        <p className="font-body text-xs md:text-sm tracking-widest uppercase text-foreground/70 leading-relaxed max-w-xs">
          Arthur V. Stoughton Professor of Religious Studies
          <br />
          at Claremont McKenna College
        </p>

        <button
          onClick={handleExploreClick}
          className="mt-16 self-start font-heading text-primary text-lg md:text-xl hover:opacity-70 transition-opacity cursor-pointer"
        >
          Explore ↴
        </button>
      </div>
    </section>
  );
};

export default Hero;
