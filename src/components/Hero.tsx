import professorImage from "@/assets/professor-portrait.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center surface-warm">
      <div className="section-container px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <p className="text-caption font-body text-sm tracking-widest uppercase mb-4">
              Arthur V. Stoughton Professor of Religious Studies
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-display leading-tight mb-6">
              Dr. Gastón
              <br />
              <span className="text-primary">Espinosa</span>
            </h1>
            <p className="text-body font-body text-base leading-relaxed max-w-lg mb-8">
              Dr. Gastón Enrique Espinosa is the Arthur V. Stoughton Professor of Religious Studies at Claremont McKenna College.  He is a graduate of Princeton (M.Div.), Harvard (M.Ed.), and UC Santa Barbara (Ph.D.) and did postdoctoral work at the UCLA School of Film and Television.  He has held visiting fellow appointments at Dartmouth College, NHC National Institute for Advanced Studies, the University of Münster, Germany, and Princeton University.  He has directed nine major surveys on Latino religions, politics, and activism from 1998-2022.  Espinosa is the author or co-author of nine books, fifty refereed articles, book chapters, and reviews, sixty encyclopedia entries, 200 scholarly keynotes and presentations around the world, has made numerous television, radio, and media appearances, and has served as the director of eight major conferences. In 2002, he spoke at the National Hispanic Presidential Prayer Breakfast with President George Bush and Senator Joseph Lieberman and he currently is the co-director of the Columbia University Press Series in Religion and Politics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/research"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
              >
                Explore Research
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-primary text-primary font-body text-sm font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-in-delay-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-sm -rotate-3" />
              <img
                src={professorImage}
                alt="Dr. Gastón Espinosa"
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
