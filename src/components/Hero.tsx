// src/components/Hero.tsx
import { Link } from "react-router-dom";
import DomeGallery from "./DomeGallery";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-[#060010]">
      {/* Background Gallery */}
      <div className="absolute inset-0 z-0">
        <DomeGallery
          fit={0.8}
          minRadius={850}
          maxVerticalRotationDeg={0}
          segments={30}
          dragDampening={2}
          grayscale={false}
          autoRotate={true}
          autoRotateSpeed={0.05}
          enlargePosition="right" // <-- Instructs the image to open on the right
        />
      </div>

      {/* Foreground Text Overlay */}
      <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-6 md:pl-16 lg:pl-32 pointer-events-none w-full max-w-5xl">
        <div className="pointer-events-auto bg-black/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl max-w-3xl">
          <p className="text-caption font-body text-sm md:text-base tracking-widest uppercase mb-4 text-white/90 animate-fade-in-up">
            Arthur V. Stoughton Professor of Religious Studies
          </p>
            <h1
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] font-thin leading-none mb-6 text-white animate-fade-in-up"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
            >
            Dr. Gastón
            <br />
            <span
              className="text-primary drop-shadow-md"
              style={{ fontFamily: "Times New Roman, Times, serif" }}
            >
              Espinosa
            </span>
            </h1>
          <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-delay-1">
            <Link
              to="/research"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors shadow-lg"
            >
              Explore Research
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-white/50 text-white font-body text-sm font-medium rounded-sm hover:bg-white hover:text-black transition-colors backdrop-blur-sm bg-black/20"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;