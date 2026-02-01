import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SpeakersSection from '@/components/SpeakersSection';
import EventSection from '@/components/EventSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useLocale } from '@/context/LocaleContext';
import { useDocumentHead } from '@/hooks/useDocumentHead';

const Index = () => {
  const { content, locale } = useLocale();
  useDocumentHead(content, locale);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
        <EventSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
