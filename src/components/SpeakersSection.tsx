import { useEffect, useRef, useState } from 'react';
import { useLocale } from '@/context/LocaleContext';

const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

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

        {/* Speaker cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content.speakers.map((speaker, index) => {
            const card = (
              <>
                {/* Photo */}
                <div className="relative mb-4 mx-auto w-28 h-28 md:w-32 md:h-32 overflow-hidden rounded-full bg-card border-2 border-border/50 group-hover:border-primary/50 transition-colors">
                  <img
                    src={speaker.image.startsWith('http') ? speaker.image : baseUrl + speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Info */}
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {speaker.name}
                </h3>
                <p className="text-sm text-primary font-mono mb-3">
                  {speaker.focus}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {speaker.bio}
                </p>
              </>
            );

            const cardClass = `group rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 text-center overflow-hidden transition-all duration-700 ${
              speaker.linkedin ? 'hover:border-primary/30 cursor-pointer' : ''
            } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

            const cardWrapper = speaker.id ? { id: `speaker-${speaker.id}` } : {};

            return speaker.linkedin ? (
              <a
                key={speaker.name}
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
                style={{ transitionDelay: `${100 + index * 75}ms` }}
                {...cardWrapper}
              >
                {card}
              </a>
            ) : (
              <div
                key={speaker.name}
                className={cardClass}
                style={{ transitionDelay: `${100 + index * 75}ms` }}
                {...cardWrapper}
              >
                {card}
              </div>
            );
          })}
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
