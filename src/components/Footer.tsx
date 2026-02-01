import { useLocale } from '@/context/LocaleContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { content, locale } = useLocale();
  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-primary">CEC</span>
              <span className="text-foreground/80 font-light ml-1">'26</span>
            </span>
          </div>

          <p className="text-sm text-muted-foreground text-center md:text-left">
            {content.ui.footer.tagline}
          </p>

          <div className="flex items-center gap-4">
            <Link
              to={locale === 'fr' ? '/' : '/fr'}
              className="text-sm text-muted-foreground hover:text-foreground font-mono"
            >
              {locale === 'fr' ? 'EN' : 'FR'}
            </Link>
            <p className="text-sm text-muted-foreground font-mono">
              © {new Date().getFullYear()} {content.ui.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
