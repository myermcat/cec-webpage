import { Button } from '@/components/ui/button';
import CircuitLines from './CircuitLines';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-workshop.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Circuit traces */}
      <CircuitLines className="opacity-40" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto stagger-children">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
            <span className="text-sm font-mono text-muted-foreground">
              Spring 2026 • Registration Open
            </span>
          </div>

          {/* Main title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="block text-foreground">Computer</span>
            <span className="block text-foreground">Engineering</span>
            <span className="block gradient-text">Conference</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            A student-driven gathering where identity meets systems.
            <br className="hidden sm:block" />
            Real engineering. Real stories. Real impact.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="cta"
              size="xl"
              onClick={() => window.open('https://example.com/register', '_blank')}
              className="min-w-[200px]"
            >
              Register Now
            </Button>
            <Button
              variant="glass"
              size="xl"
              onClick={scrollToAbout}
              className="min-w-[200px]"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-float"
          onClick={scrollToAbout}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-mono tracking-wider uppercase">Scroll</span>
            <ArrowDown size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
