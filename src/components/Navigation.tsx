import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLocale } from '@/context/LocaleContext';
import { Link } from 'react-router-dom';

const sectionIds = ['about', 'speakers', 'event', 'team', 'contact'] as const;

const Navigation = () => {
  const { content, locale } = useLocale();
  const navItems = useMemo(
    () => [
      { label: content.ui.nav.about, href: '#about' },
      { label: content.ui.nav.speakers, href: '#speakers' },
      { label: content.ui.nav.event, href: '#event' },
      { label: content.ui.nav.team, href: '#team' },
      { label: content.ui.nav.contact, href: '#contact' },
    ],
    [content]
  );

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [...sectionIds].reverse();
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group"
          >
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              <span className="text-primary">CEC</span>
              <span className="text-foreground/80 font-light ml-1 hidden sm:inline">'26</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant={activeSection === item.href.replace('#', '') ? 'navActive' : 'nav'}
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className="px-4"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* CTA Button + Language switcher */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to={locale === 'fr' ? '/' : '/fr'}
              className="text-sm text-muted-foreground hover:text-foreground font-mono"
            >
              {locale === 'fr' ? 'EN' : 'FR'}
            </Link>
            <Button
              variant="cta"
              size="default"
              onClick={() => window.open(content.links.registration, '_blank')}
            >
              {content.ui.nav.attend}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant={activeSection === item.href.replace('#', '') ? 'navActive' : 'nav'}
              className="justify-start"
              onClick={() => scrollToSection(item.href)}
            >
              {item.label}
            </Button>
          ))}
          <Link
            to={locale === 'fr' ? '/' : '/fr'}
            className="text-sm text-muted-foreground hover:text-foreground font-mono mt-2"
          >
            {locale === 'fr' ? 'EN' : 'FR'}
          </Link>
          <Button
            variant="cta"
            className="mt-4"
            onClick={() => window.open(content.links.registration, '_blank')}
          >
            {content.ui.nav.attend}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
