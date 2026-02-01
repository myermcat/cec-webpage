import { Button } from '@/components/ui/button';
import CircuitLines from './CircuitLines';
import heroImage from '@/assets/hero-workshop.jpg';
import { hero, links } from '@/content.ts';

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
      <CircuitLines className="opacity-30" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto stagger-children">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
            <span className="text-sm font-mono text-muted-foreground">
              {hero.tagline}
            </span>
          </div>

          {/* Main title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="block text-foreground">{hero.title.line1}</span>
            <span className="block text-foreground">{hero.title.line2}</span>
            <span className="block gradient-text">{hero.title.line3}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {hero.subtitle.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <><br className="hidden sm:block" /> </>}
              </span>
            ))}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="cta"
              size="xl"
              onClick={() => window.open(links.registration, '_blank')}
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
      </div>
    </section>
  );
};

export default HeroSection;
