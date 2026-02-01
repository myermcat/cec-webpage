import { useEffect, useRef, useState } from 'react';
import { Sparkles, Code, PenLine } from 'lucide-react';

const values = [
  {
    icon: Sparkles,
    title: 'Why Failure Is Necessary',
    description: 'Learn how struggling now shapes the engineer you become later.',
  },
  {
    icon: Code,
    title: 'Why You Should Write Bad Code',
    description: 'Understand why messy first attempts beat perfect paralysis every time.',
  },
  {
    icon: PenLine,
    title: 'Why Solutions Start On Paper',
    description: 'Discover why the best code begins before you ever open your IDE.',
  },
];

const AboutSection = () => {
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
            About CEC
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Where Engineering Meets{' '}
            <span className="gradient-text">Identity</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            CEC isn't your typical tech conference. Born from late-night dorm room conversations 
            and countless hours in maker spaces, we created something different—a space where 
            computer engineering students can explore not just <em>how</em> things work, 
            but <em>why</em> we build them.
          </p>
        </div>

        {/* Origin story */}
        <div className={`max-w-3xl mx-auto mb-20 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/50 glow-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We're a group of students who spend all our time learning circuits, logic, 
              assembly, architecture, but still don't really know what kind of person 
              actually uses all this stuff together. By fourth year, we know what we do 
              but not who we are. First years are asking "should I switch to CS?" 
              Fourth years are asking "what even is computer engineering?"
            </p>
            <p className="text-muted-foreground leading-relaxed">
              40-60% of engineering students drop out because of burnout and not seeing 
              where this is going. CEC is our answer to that. It's where engineers share 
              the messy reality. Where you hear about failure and leave seeing your struggles differently.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group p-8 bg-card/30 rounded-lg border border-border/50 card-hover transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
