import { useEffect, useRef, useState } from 'react';
import { useLocale } from '@/context/LocaleContext';

const ScheduleSection = () => {
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

  const schedule = content.schedule;

  const handleSpeakerClick = (e: React.MouseEvent, href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Add highlight after scroll has time to start
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.classList.remove('schedule-highlight');
          void el.offsetHeight;
          el.classList.add('schedule-highlight');
          window.history.replaceState(null, '', href);
          setTimeout(() => el.classList.remove('schedule-highlight'), 2500);
        });
      });
    }
  };

  return (
    <section
      id="schedule"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
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
            {schedule.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            {schedule.title}
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            {schedule.intro}
          </p>
        </div>

        {/* Blocks */}
        <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
          {schedule.blocks.map((block, blockIndex) => {
            const isIntermission = block.type === 'intermission';
            return (
              <div
                key={block.blockLabel}
                className={`rounded-2xl border overflow-hidden transition-all duration-700 ${
                  isIntermission
                    ? 'border-amber-900/50 bg-amber-950/30 max-w-md mx-auto py-4 px-6'
                    : 'border-border/50 bg-card/50 backdrop-blur-sm'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${150 + blockIndex * 100}ms` }}
              >
                {/* Block header */}
                <div className={isIntermission ? 'text-center' : 'px-6 md:px-8 pt-6 md:pt-8 pb-3'}>
                  <span
                    className={`font-mono text-xs tracking-widest uppercase ${
                      isIntermission ? 'text-amber-400' : 'text-primary'
                    }`}
                  >
                    {block.blockLabel}
                  </span>
                  <h3
                    className={`font-bold mt-2 ${
                      isIntermission ? 'text-amber-100 text-base' : 'text-xl md:text-2xl text-foreground'
                    }`}
                  >
                    {block.blockTitle}
                  </h3>
                </div>

                {/* Speaker items (only for speaker blocks) */}
                {!isIntermission && block.items && block.items.length > 0 ? (
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <ul className="space-y-4">
                      {block.items.map((item) => (
                        <li key={`${block.blockLabel}-${item.name}`}>
                          {item.href ? (
                            <a
                              href={item.href}
                              onClick={(e) => handleSpeakerClick(e, item.href!)}
                              className="group block py-3 px-4 -mx-4 rounded-xl hover:bg-secondary/40 border border-transparent hover:border-primary/20 transition-all duration-200 cursor-pointer"
                            >
                              <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                                {item.name}
                              </span>
                              <p className="text-sm text-muted-foreground mt-0.5">
                                {item.title}
                              </p>
                            </a>
                          ) : (
                            <div className="py-3 px-4 -mx-4 rounded-xl">
                              <span className="text-base font-semibold text-foreground">
                                {item.name}
                              </span>
                              <p className="text-sm text-muted-foreground mt-0.5">
                                {item.title}
                              </p>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p
          className={`mt-10 text-center text-sm text-muted-foreground font-mono max-w-xl mx-auto transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {schedule.note}
        </p>
      </div>
    </section>
  );
};

export default ScheduleSection;
