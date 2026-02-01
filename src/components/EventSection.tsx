import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocale } from '@/context/LocaleContext';

const eventDetailIcons = [
  { icon: Calendar, key: 'date' as const },
  { icon: Clock, key: 'time' as const },
  { icon: MapPin, key: 'venue' as const },
];

const EventSection = () => {
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

  const labels = content.ui.event.detailLabels;

  return (
    <section
      id="event"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative container mx-auto px-6">
        {/* Section header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block font-mono text-sm text-primary mb-4 tracking-wider uppercase">
            {content.ui.event.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            {content.ui.event.title}
            <span className="gradient-text">{content.ui.event.titleHighlight}</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            {content.ui.event.intro}
          </p>
        </div>

        {/* Event details grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {eventDetailIcons.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="flex items-center gap-4 p-6 bg-card/50 rounded-lg border border-border/50"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground font-mono">{labels[key]}</span>
                <p className="text-foreground font-medium">{content.event[key]}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What to expect */}
        <div className={`max-w-3xl mx-auto mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/50 glow-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">{content.ui.event.whatYouExperience}</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>{content.ui.event.scheduleP1}</p>
              <p>{content.ui.event.scheduleP2}</p>
              <p>{content.ui.event.scheduleP3}</p>
              <p>{content.ui.event.scheduleP4}</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className={`max-w-2xl mx-auto mb-16 text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <blockquote className="relative">
            <span className="text-6xl text-primary/30 absolute -top-4 -left-4">"</span>
            <p className="text-xl md:text-2xl text-foreground italic leading-relaxed mb-4">
              {content.ui.event.testimonialQuote}
            </p>
            <footer className="text-muted-foreground">
              — <span className="font-mono text-primary">{content.ui.event.testimonialAttribution}</span>
            </footer>
          </blockquote>
        </div>

        {/* FAQ */}
        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            {content.ui.event.faqHeading}
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {content.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 rounded-lg border border-border/50 px-6"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button
            variant="cta"
            size="xl"
            onClick={() => window.open(content.links.registration, '_blank')}
          >
            {content.ui.event.reserveSpot}
          </Button>
          <p className="text-sm text-muted-foreground mt-4 font-mono">
            {content.event.ctaSubtext}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
