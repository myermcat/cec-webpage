import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { event, faqs, links } from '@/content.ts';

const eventDetailKeys = [
  { icon: Calendar, label: 'Date', key: 'date' as const },
  { icon: Clock, label: 'Time', key: 'time' as const },
  { icon: MapPin, label: 'Venue', key: 'venue' as const },
];

const EventSection = () => {
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
            The Event
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            One Day.{' '}
            <span className="gradient-text">Lasting Impact.</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
          CEC is a space where engineers talk openly about how they got here 
          and what shaped them along the way. You will hear stories about failure, 
          uncertainty, and slow progress, and how those experiences changed how 
          people think about their work. 
          </p>
        </div>

        {/* Event details grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {eventDetailKeys.map((detail) => (
            <div
              key={detail.label}
              className="flex items-center gap-4 p-6 bg-card/50 rounded-lg border border-border/50"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <detail.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground font-mono">{detail.label}</span>
                <p className="text-foreground font-medium">{event[detail.key]}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What to expect */}
        <div className={`max-w-3xl mx-auto mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/50 glow-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">What You'll Experience</h3>
            {/* Previous schedule copy - commented out
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Morning:</strong> Keynotes that challenge your assumptions. 
                Coffee and conversation with fellow builders.
              </p>
              <p>
                <strong className="text-foreground">Afternoon:</strong> Breakout sessions on systems, 
                career paths, and emerging technologies. Hands-on workshops optional but encouraged.
              </p>
              <p>
                <strong className="text-foreground">Evening:</strong> Panel discussions, networking, 
                and space to process everything you've absorbed.
              </p>
            </div>
            */}
            <div className="space-y-4 text-muted-foreground">
              <p>
                The full schedule is still coming together.
              </p>
              <p>
                Expect short talks, shared meals, and time to actually sit with ideas and talk to people who are asking similar questions.
              </p>
              <p>
                We're being intentional about leaving space for conversation, reflection, and the kinds of moments that don't fit neatly into a timetable.
              </p>
              <p>
                More details soon.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className={`max-w-2xl mx-auto mb-16 text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <blockquote className="relative">
            <span className="text-6xl text-primary/30 absolute -top-4 -left-4">"</span>
            <p className="text-xl md:text-2xl text-foreground italic leading-relaxed mb-4">
            Computer science is no more about computers than astronomy is about telescopes.
            </p>
            <footer className="text-muted-foreground">
              — <span className="font-mono text-primary">Edsger Dijkstra</span>
            </footer>
          </blockquote>
        </div>

        {/* FAQ */}
        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
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
            onClick={() => window.open(links.registration, '_blank')}
          >
            Reserve Your Spot
          </Button>
          <p className="text-sm text-muted-foreground mt-4 font-mono">
            {event.ctaSubtext}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
