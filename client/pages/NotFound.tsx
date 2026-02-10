import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n";
import { withLang } from "@/lib/links";
import { usePageMeta } from "@/lib/seo";

const NotFound = () => {
  const location = useLocation();
  const { t, locale } = useI18n();
  usePageMeta("meta.notfound.title", "meta.notfound.description");

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen page-bg flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-7xl font-bold text-primary mb-4">404</div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{t("notfound.title")}</h1>
          <p className="text-lg text-muted-foreground mb-8">
            {t("notfound.desc")}
          </p>
          <Link to={withLang("/", locale)}>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              {t("notfound.back")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
