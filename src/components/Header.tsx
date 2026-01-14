import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-heading text-xl font-semibold text-display hover:text-primary transition-colors"
        >
          Dr. Marcus Whitfield
        </button>
        <ul className="hidden md:flex items-center gap-8 font-body text-sm">
          {[
            { label: "About", id: "about" },
            { label: "Research", id: "research" },
            { label: "Publications", id: "publications" },
            { label: "Courses", id: "courses" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-body hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
