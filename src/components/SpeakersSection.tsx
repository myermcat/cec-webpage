import { useEffect, useRef, useState } from 'react';
import { Linkedin } from 'lucide-react';
import { useLocale } from '@/context/LocaleContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

type Speaker = {
  name: string;
  role: string;
  talkTitle: string;
  preview: string;
  detailType: 'quote' | 'description';
  detailText: string;
  attribution?: string;
  linkedin?: string;
  anchorId: string;
  image: string;
};

type SpeakersSectionProps = {
  highlightedSpeakerId?: string | null;
};

const SpeakersSection = ({ highlightedSpeakerId }: SpeakersSectionProps) => {
  const { content } = useLocale();
  const [isVisible, setIsVisible] = useState(false);
  const [openSpeaker, setOpenSpeaker] = useState<Speaker | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const u = content.ui.speakers;
  const speakers = content.speakers as Speaker[];

  return (
    <section
      id="speakers"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-card/20" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative container mx-auto px-6">
        {/* Section header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
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
          {speakers.map((speaker, index) => {
            const speakerShortId = speaker.anchorId.replace('speaker-', '');
            const isHighlighted = highlightedSpeakerId === speakerShortId;
            const highlightStyle: React.CSSProperties = isHighlighted
              ? {
                  border: '2px solid hsl(210, 95%, 55%)',
                  boxShadow: 'inset 0 0 40px hsl(210 95% 55% / 0.2)',
                }
              : {};

            return (
              <div
                key={speaker.name}
                id={speaker.anchorId}
                role="button"
                tabIndex={0}
                onClick={() => setOpenSpeaker(speaker)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setOpenSpeaker(speaker);
                  }
                }}
                className={`group rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 text-center overflow-hidden transition-all duration-700 cursor-pointer hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_0_24px_hsl(var(--primary)_/_0.15)] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${100 + index * 75}ms`,
                  ...highlightStyle,
                }}
              >
                {/* Photo */}
                <div className="relative mb-4 mx-auto w-28 h-28 md:w-32 md:h-32 overflow-hidden rounded-full bg-card border-2 border-border/50 group-hover:border-primary/50 transition-colors">
                  <img
                    src={
                      speaker.image.startsWith('http')
                        ? speaker.image
                        : baseUrl + speaker.image
                    }
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {speaker.name}
                </h3>
                {/* Role */}
                <p className="text-sm text-primary font-mono mb-2">
                  {speaker.role}
                </p>
                {/* Talk title */}
                <p className="text-sm text-muted-foreground mb-3">
                  {speaker.talkTitle}
                </p>
                {/* Preview */}
                <p className="text-xs text-muted-foreground/90 leading-relaxed line-clamp-3">
                  {speaker.preview}
                </p>

                {/* LinkedIn button */}
                {speaker.linkedin && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 h-8 w-8 opacity-70 hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(speaker.linkedin, '_blank', 'noopener,noreferrer');
                    }}
                    aria-label={`${speaker.name} on LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4 text-primary" />
                  </Button>
                )}
              </div>
            );
          })}
        </div>

        {/* Themes callout */}
        <div
          className={`mt-16 max-w-3xl mx-auto text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
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

      {/* Speaker detail modal */}
      <Dialog open={!!openSpeaker} onOpenChange={(open) => !open && setOpenSpeaker(null)}>
        <DialogContent
          className="max-w-lg rounded-2xl bg-card border-border/50 shadow-[0_0_40px_hsl(var(--primary)_/_0.1)]"
          onPointerDownOutside={() => setOpenSpeaker(null)}
        >
          {openSpeaker && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{openSpeaker.name}</DialogTitle>
              </DialogHeader>

              <div className="flex flex-col items-center text-center space-y-6">
                {/* Larger image */}
                <div className="w-36 h-36 md:w-40 md:h-40 overflow-hidden rounded-full border-2 border-primary/50">
                  <img
                    src={
                      openSpeaker.image.startsWith('http')
                        ? openSpeaker.image
                        : baseUrl + openSpeaker.image
                    }
                    alt={openSpeaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {openSpeaker.name}
                  </h2>
                  <p className="text-primary font-mono text-sm mt-1">
                    {openSpeaker.role}
                  </p>
                  <p className="text-muted-foreground font-medium mt-3">
                    {openSpeaker.talkTitle}
                  </p>
                </div>

                {/* Intro content */}
                <div className="text-left w-full">
                  {openSpeaker.detailType === 'quote' ? (
                    <blockquote className="border-l-2 border-primary/50 pl-4 py-2">
                      <p className="text-sm text-muted-foreground italic">
                        &ldquo;{openSpeaker.detailText}&rdquo;
                      </p>
                      <cite className="text-xs text-muted-foreground/80 mt-2 block not-italic">
                        — {openSpeaker.attribution}
                      </cite>
                    </blockquote>
                  ) : (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {openSpeaker.detailText}
                    </p>
                  )}
                </div>

                {/* LinkedIn button */}
                {openSpeaker.linkedin && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() =>
                      window.open(openSpeaker!.linkedin, '_blank', 'noopener,noreferrer')
                    }
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SpeakersSection;
