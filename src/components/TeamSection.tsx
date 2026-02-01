import { useEffect, useRef, useState } from 'react';
import { useLocale } from '@/context/LocaleContext';

const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

const TeamSection = () => {
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
      id="team"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-card/20" />

      <div className="relative container mx-auto px-6">
        {/* Section header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block font-mono text-sm text-primary mb-4 tracking-wider uppercase">
            {content.ui.team.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            {content.ui.team.title}
            <span className="gradient-text">{content.ui.team.titleHighlight}</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            {content.ui.team.intro}
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {content.team.map((member, index) => (
            <div
              key={member.name}
              className={`group text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${100 + index * 50}ms` }}
            >
              {/* Photo */}
              <div className="relative mb-4 mx-auto w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full bg-card border-2 border-border/50 group-hover:border-primary/50 transition-colors">
                <img
                  src={member.image.startsWith('http') ? member.image : baseUrl + member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Info */}
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground font-mono">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
