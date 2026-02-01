import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocale } from "@/context/LocaleContext";

const NotFound = () => {
  const location = useLocation();
  const { content, locale } = useLocale();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = `${content.ui.notFound.description} — ${content.ui.meta.title}`;
  }, [content, locale]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{content.ui.notFound.title}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{content.ui.notFound.description}</p>
        <Link
          to={locale === 'fr' ? '/fr' : '/'}
          className="text-primary underline hover:text-primary/90"
        >
          {content.ui.notFound.returnHome}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
