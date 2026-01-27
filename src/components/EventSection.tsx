import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Clock, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const eventDetails = [
  { icon: Calendar, label: 'Date', value: 'April 12, 2025' },
  { icon: Clock, label: 'Time', value: '9:00 AM - 6:00 PM' },
  { icon: MapPin, label: 'Venue', value: 'Engineering Hall, Main Campus' },
  { icon: Users, label: 'Capacity', value: '200 Attendees' },
];

const faqs = [
  {
    question: 'Where is the venue and how do I get there?',
    answer: 'CEC takes place in Engineering Hall on Main Campus. The venue is fully accessible and located near public transit stops. Parking is available in Lot B with validation.',
  },
  {
    question: 'Is the venue accessible?',
    answer: 'Yes! The venue is fully wheelchair accessible with ramps, elevators, and accessible restrooms. We also provide reserved seating and can accommodate other accessibility needs—just let us know when you register.',
  },
  {
    question: 'When will the schedule be released?',
    answer: 'The detailed schedule will be released 2 weeks before the event. You\'ll receive it via email and it will be posted on this website. Expect a mix of talks, panels, and networking sessions.',
  },
  {
    question: 'Can I participate as a speaker or volunteer?',
    answer: 'We\'re always looking for voices and hands! Speaker applications for CEC \'25 are closed, but volunteer applications open 1 month before the event. Join our mailing list to be notified.',
  },
  {
    question: 'Is food provided?',
    answer: 'Yes! Registration includes lunch, coffee, and snacks. We accommodate dietary restrictions—make sure to note yours during registration.',
  },
  {
    question: 'What should I bring?',
    answer: 'Bring yourself, an open mind, and maybe a notebook. Some sessions have optional hands-on components—we\'ll provide materials, but feel free to bring a laptop if you want to follow along.',
  },
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
            CEC is more than talks—it's an experience. From morning coffee conversations 
            to evening reflections, you'll be surrounded by people who think like you, 
            question like you, and build like you. Come for the content, stay for the connections.
          </p>
        </div>

        {/* Event details grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {eventDetails.map((detail) => (
            <div
              key={detail.label}
              className="flex items-center gap-4 p-6 bg-card/50 rounded-lg border border-border/50"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <detail.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground font-mono">{detail.label}</span>
                <p className="text-foreground font-medium">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What to expect */}
        <div className={`max-w-3xl mx-auto mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/50 glow-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">What You'll Experience</h3>
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
          </div>
        </div>

        {/* Testimonial */}
        <div className={`max-w-2xl mx-auto mb-16 text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <blockquote className="relative">
            <span className="text-6xl text-primary/30 absolute -top-4 -left-4">"</span>
            <p className="text-xl md:text-2xl text-foreground italic leading-relaxed mb-4">
              CEC changed how I think about my career. I came for the tech talks, 
              but I left with a community and a clearer sense of why I build.
            </p>
            <footer className="text-muted-foreground">
              — <span className="font-mono text-primary">Alex T.</span>, CEC '24 Attendee
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
            onClick={() => window.open('https://example.com/register', '_blank')}
          >
            Reserve Your Spot
          </Button>
          <p className="text-sm text-muted-foreground mt-4 font-mono">
            Limited to 200 attendees • Early registration recommended
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
