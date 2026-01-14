import professorImage from "@/assets/professor-portrait.jpg";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center surface-warm">
      <div className="section-container py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <p className="text-caption font-body text-sm tracking-widest uppercase mb-4">
              Professor of Religious Studies
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-display leading-tight mb-6">
              Dr. Marcus
              <br />
              <span className="text-primary">Whitfield</span>
            </h1>
            <p className="text-body font-body text-lg leading-relaxed max-w-lg mb-8">
              Exploring the intersections of faith, philosophy, and culture. 
              Twenty-five years dedicated to understanding how religious traditions 
              shape human experience and societal transformation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#research"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
              >
                Explore Research
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-primary text-primary font-body text-sm font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-in-delay-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-sm -rotate-3" />
              <img
                src={professorImage}
                alt="Dr. Marcus Whitfield"
                className="relative w-full max-w-md mx-auto lg:max-w-none rounded-sm shadow-lg object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
