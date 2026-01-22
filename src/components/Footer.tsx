const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading text-xl font-semibold mb-1">
              Dr. Gastón Espinosa
            </p>
            <p className="text-primary-foreground/70 font-body text-sm">
              Arthur V. Stoughton Professor of Religious Studies · Claremont McKenna College
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground font-body text-sm transition-colors"
            >
              Academia.edu
            </a>
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground font-body text-sm transition-colors"
            >
              Google Scholar
            </a>
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground font-body text-sm transition-colors"
            >
              ORCID
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 font-body text-sm">
            © {new Date().getFullYear()} Dr. Gastón Espinosa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
