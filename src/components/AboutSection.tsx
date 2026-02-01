import { useEffect, useRef, useState } from 'react';
import { Sparkles, Code, PenLine } from 'lucide-react';
import { useLocale } from '@/context/LocaleContext';

const valueIcons = [Sparkles, Code, PenLine];

const AboutSection = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative container mx-auto px-6">
        {/* Section header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block font-mono text-sm text-primary mb-4 tracking-wider uppercase">
            {content.ui.about.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            {content.ui.about.title}
            <span className="gradient-text">{content.ui.about.titleHighlight}</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            {content.ui.about.intro}
          </p>
        </div>

        {/* Origin story */}
        <div className={`max-w-3xl mx-auto mb-20 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/50 glow-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">{content.ui.about.ourStory}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {content.ui.about.storyP1}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {content.ui.about.storyP2}
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {content.ui.about.values.map((value, index) => {
            const Icon = valueIcons[index];
            return (
              <div
                key={value.title}
                className={`group p-8 bg-card/30 rounded-lg border border-border/50 card-hover transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
