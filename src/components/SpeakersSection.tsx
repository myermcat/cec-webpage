import { useEffect, useRef, useState } from 'react';
import { speakers } from '@/content.ts';

const SpeakersSection = () => {
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
            Speakers
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Voices That{' '}
            <span className="gradient-text">Resonate</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our speakers are engineers, researchers, and builders who have been exactly where you are. People who have questioned their path, survived burnout, and figured out what actually matters. Their stories will show you that what you're going through right now isn't a problem. It's where your story begins.
          </p>
        </div>

        {/* Speakers grid - commented out for now, show "Coming Soon!" instead */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={speaker.name}
              className={`group relative overflow-hidden rounded-lg bg-card/50 border border-border/50 card-hover transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block font-mono text-xs text-primary mb-2 tracking-wider uppercase">
                  {speaker.focus}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {speaker.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div> */}
        <div className={`text-center py-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-2xl md:text-3xl font-mono text-muted-foreground">Coming Soon!</p>
        </div>

        {/* Themes callout */}
        <div className={`mt-16 max-w-3xl mx-auto text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-wrap justify-center gap-3">
            {['Systems Thinking', 'Career Paths', 'Open Source', 'Hardware', 'Ethics', 'Community'].map((theme) => (
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
