import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-heading text-xl font-semibold text-display hover:text-primary transition-colors"
        >
          Dr. Gastón Espinosa
        </Link>
        <ul className="hidden md:flex items-center gap-8 font-body text-sm">
          {[
            { label: "About", path: "/about" },
            { label: "Research", path: "/research" },
            { label: "Publications", path: "/publications" },
            { label: "Courses", path: "/courses" },
            { label: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`transition-colors relative group ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-body hover:text-primary"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
