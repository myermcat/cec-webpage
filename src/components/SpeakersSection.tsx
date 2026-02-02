import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/context/LocaleContext';
import { Mic } from 'lucide-react';

const SpeakersSection = () => {
  const { content } = useLocale();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const u = content.ui.speakers;

  return (
    <section
      id="speakers"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-card/20" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative container mx-auto px-6">
        {/* Section header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block font-mono text-sm text-primary mb-4 tracking-wider uppercase">
            {u.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            {u.title}
            <span className="gradient-text">{u.titleHighlight}</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            {u.intro}
          </p>
        </div>

        {/* Speaker application CTA */}
        <div className={`max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 md:p-10 text-center overflow-hidden glow-border">
            {/* Soft gradient accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="w-12 h-12 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mic className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                {u.applyHeadline}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {u.applySubtext}
              </p>
              <Button
                variant="cta"
                size="xl"
                className="min-w-[200px]"
                onClick={() => window.open(content.links.speakerApplication, '_blank')}
              >
                {u.applyButton}
              </Button>
              <p className="text-sm text-muted-foreground font-mono mt-6">
                {u.applyDeadline}
              </p>
              <p className="text-xs text-muted-foreground/80 mt-2">
                {u.applyFollowUp}
              </p>
            </div>
          </div>
        </div>

        {/* Themes callout */}
        <div className={`mt-16 max-w-3xl mx-auto text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-wrap justify-center gap-3">
            {u.themes.map((theme) => (
              <span
                key={theme}
                className="px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground font-mono"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
