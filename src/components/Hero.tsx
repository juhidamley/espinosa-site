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
      className="relative flex h-screen w-full overflow-hidden bg-background flex-col md:flex-row"
    >
      {/* Right: Professor portrait (transparent SVG) */}
      <div className="hidden md:block absolute right-[0%] bottom-[-5%] h-full w-[100%] lg:w-[100%]">
        <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <img
          src={professorPortrait}
          alt="Gastón Espinosa, Ph. D."
          className="absolute inset-0 w-full h-full object-contain object-right-bottom"
        />
      </div>

      {/* Left: Text content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:pl-44 md:pr-8 w-full md:w-1/2 lg:w-[50%] items-center md:items-start text-center md:text-left">
        <h1 className="font-heading text-[clamp(4.5rem,8vw,10rem)] leading-[0.95] text-foreground font-normal mb-4">
          Discover
        </h1>
        <h1 className="font-heading text-[clamp(4.5rem,8vw,10rem)] leading-[0.95] text-primary font-semibold mb-8">
          Gastón Espinosa,{"\u00A0"}
          <span className="block sm:inline">Ph.D.</span>
        </h1>
        <p className="font-body text-xs md:text-sm tracking-widest uppercase text-foreground/70 leading-relaxed max-w-xs">
          Arthur V. Stoughton Professor of Religious Studies
          <br />
          at Claremont McKenna College
        </p>

        <button
          onClick={handleExploreClick}
          className="mt-16 self-center md:self-start font-heading text-primary text-lg md:text-xl hover:opacity-70 transition-opacity cursor-pointer"
        >
          Explore ↴
        </button>
      </div>

    </section>
  );
};

export default Hero;
