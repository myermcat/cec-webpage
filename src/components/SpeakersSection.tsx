import { useEffect, useRef, useState } from 'react';
import { useLocale } from '@/context/LocaleContext';

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
            {content.ui.speakers.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            {content.ui.speakers.title}
            <span className="gradient-text">{content.ui.speakers.titleHighlight}</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            {content.ui.speakers.intro}
          </p>
        </div>

        <div className={`text-center py-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-2xl md:text-3xl font-mono text-muted-foreground">{content.ui.speakers.comingSoon}</p>
        </div>

        {/* Themes callout */}
        <div className={`mt-16 max-w-3xl mx-auto text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-wrap justify-center gap-3">
            {content.ui.speakers.themes.map((theme) => (
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
