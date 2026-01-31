import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Linkedin, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';
import { links } from '@/content';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('You\'re on the list! Watch your inbox for updates.');
    setNewsletterEmail('');
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative container mx-auto px-6">
        {/* Section header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block font-mono text-sm text-primary mb-4 tracking-wider uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Let's{' '}
            <span className="gradient-text">Connect</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions? Want to get involved? We'd love to hear from you. 
            Drop us a line or follow along on social media.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/50">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="What's on your mind?"
                    required
                    rows={5}
                    className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" variant="cta" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className={`space-y-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Newsletter */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Stay Updated</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Get schedule announcements, speaker reveals, and event updates delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                <Input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-secondary/50 border-border/50 focus:border-primary"
                />
                <Button type="submit" variant="cta">
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Social links */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/50">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Follow Along</h3>
              <div className="flex gap-4">
                <a
                  href={links.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-secondary/50 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-secondary transition-all group flex-1"
                >
                  <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <span className="block text-sm font-medium text-foreground">Instagram</span>
                    <span className="block text-xs text-muted-foreground">{links.instagram.handle}</span>
                  </div>
                </a>
                <a
                  href={links.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-secondary/50 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-secondary transition-all group flex-1"
                >
                  <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <span className="block text-sm font-medium text-foreground">LinkedIn</span>
                    <span className="block text-xs text-muted-foreground">{links.linkedin.handle}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Direct email */}
            <div className="text-center py-6">
              <p className="text-muted-foreground mb-2">Or email us directly at</p>
              <a
                href={`mailto:${links.email}`}
                className="text-primary hover:text-primary/80 font-mono text-lg link-underline"
              >
                {links.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
