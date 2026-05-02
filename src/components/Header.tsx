// src/components/Header.tsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Research", path: "/research" },
    { label: "Publications", path: "/publications" },
    { label: "Appearances", path: "/appearances" },
    { label: "Leadership", path: "/leadership" },
    { label: "Courses", path: "/courses" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  
  // Check if we are on the home page and haven't scrolled down yet
  const isTransparentOnHome = location.pathname === "/" && !scrolled;

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
          className={`font-heading text-xl font-semibold transition-colors hover:text-primary ${
            isTransparentOnHome ? "text-primary" : "text-display"
          }`}
        >
          Dr. Gastón Espinosa
        </Link>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded border transition-colors ${
            isTransparentOnHome
              ? "border-border text-display hover:bg-muted"
              : "border-border text-display hover:bg-muted"
          }`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm">
          {navItems.map((item) => (
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

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-sm shadow-sm">
          <ul className="section-container py-4 flex flex-col gap-3 font-body text-sm">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block rounded px-2 py-2 transition-colors ${
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-body hover:text-primary hover:bg-muted"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
