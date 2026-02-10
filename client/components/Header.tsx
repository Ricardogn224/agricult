import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sprout } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useI18n } from "@/i18n";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();

  const updateLangParam = (next: "fr" | "en") => {
    const params = new URLSearchParams(location.search);
    params.set("lang", next);
    navigate(`${location.pathname}?${params.toString()}${location.hash ?? ""}`);
    setLocale(next);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-sand-50/90 backdrop-blur supports-[backdrop-filter]:bg-sand-50/80 border-b border-primary/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-gradient-to-br from-sage-600 to-sage-700 rounded-lg flex items-center justify-center text-white">
            <Sprout className="w-5 h-5" />
          </div>
          <span className="text-primary">agricult</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t("nav.home")}
          </Link>
          <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t("nav.features")}
          </a>
          <a href="#benefits" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t("nav.benefits")}
          </a>
          <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t("nav.about")}
          </Link>
          <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t("nav.contact")}
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-white/60 px-2 py-1 text-xs font-semibold text-foreground">
            <span className="text-muted-foreground">{t("lang.label")}</span>
            <button
              type="button"
              onClick={() => updateLangParam("fr")}
              className={`rounded-full px-2 py-0.5 ${locale === "fr" ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"}`}
            >
              {t("lang.fr")}
            </button>
            <button
              type="button"
              onClick={() => updateLangParam("en")}
              className={`rounded-full px-2 py-0.5 ${locale === "en" ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"}`}
            >
              {t("lang.en")}
            </button>
          </div>
          <Link to="/download">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              {t("nav.download")}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary/10 bg-sand-50/95">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              to="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <a
              href="#features"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.features")}
            </a>
            <a
              href="#benefits"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.benefits")}
            </a>
            <Link
              to="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
            <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-foreground">
              <span className="text-muted-foreground">{t("lang.label")}</span>
              <button
                type="button"
                onClick={() => updateLangParam("fr")}
                className={`rounded-full px-2 py-0.5 ${locale === "fr" ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"}`}
              >
                {t("lang.fr")}
              </button>
              <button
                type="button"
                onClick={() => updateLangParam("en")}
                className={`rounded-full px-2 py-0.5 ${locale === "en" ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"}`}
              >
                {t("lang.en")}
              </button>
            </div>
            <div className="flex flex-col gap-2 pt-4">
              <Link to="/download" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  {t("nav.download")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
