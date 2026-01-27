const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-primary">CEC</span>
              <span className="text-foreground/80 font-light ml-1">'25</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Built by engineers, for engineers.
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} Computer Engineering Conference
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
