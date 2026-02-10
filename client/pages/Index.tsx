import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Leaf, BarChart3, Zap, Shield, TrendingUp, Users, Apple, Smartphone, Monitor, Terminal, Sprout, Wheat } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedButton } from "@/components/AnimatedButton";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n";
import { withLang } from "@/lib/links";
import { usePageMeta } from "@/lib/seo";

export default function Index() {
  const { t, locale } = useI18n();
  usePageMeta("meta.home.title", "meta.home.description");
  const featuresUrl = withLang("/", locale, "features");
  const benefitsUrl = withLang("/", locale, "benefits");
  const downloadUrl = withLang("/", locale, "download");

  return (
    <div className="min-h-screen page-bg">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sage-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-earth-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium animate-fade-in">
                <Sprout className="w-4 h-4" />
                {t("index.badge")}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {t("index.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              {t("index.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <a href={downloadUrl}>
                <AnimatedButton size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  {t("index.cta.primary")}
                </AnimatedButton>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              >
                {t("index.cta.secondary")}
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              {t("index.availability")}
            </p>

            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/10 bg-white/85 animate-fade-in-up hover:shadow-3xl transition-all duration-500" style={{ animationDelay: "1s" }}>
              <div className="aspect-video bg-gradient-to-br from-sage-100 via-sand-50 to-earth-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 border border-primary/10 shadow-sm">
                    <Wheat className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{t("index.hero.caption")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 border-t border-primary/10 section-sage">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("index.features.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("index.features.subtitle")}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0} className="feature-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {t("index.features.crop.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("index.features.crop.desc")}
              </p>
            </AnimatedCard>

            <AnimatedCard delay={100} className="feature-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {t("index.features.analytics.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("index.features.analytics.desc")}
              </p>
            </AnimatedCard>

            <AnimatedCard delay={200} className="feature-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {t("index.features.team.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("index.features.team.desc")}
              </p>
            </AnimatedCard>

            <AnimatedCard delay={300} className="feature-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {t("index.features.automation.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("index.features.automation.desc")}
              </p>
            </AnimatedCard>

            <AnimatedCard delay={400} className="feature-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {t("index.features.security.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("index.features.security.desc")}
              </p>
            </AnimatedCard>

            <AnimatedCard delay={500} className="feature-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {t("index.features.finance.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("index.features.finance.desc")}
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 md:py-28 border-t border-primary/10 section-earth">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("index.benefits.title")}
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                      <Leaf className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t("index.benefits.yield.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("index.benefits.yield.desc")}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t("index.benefits.costs.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("index.benefits.costs.desc")}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t("index.benefits.team.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("index.benefits.team.desc")}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t("index.benefits.risk.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("index.benefits.risk.desc")}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedCard delay={200} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sage-200/40 to-earth-200/40 rounded-2xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-sage-100/80 via-sand-50/70 to-earth-100/80 rounded-2xl p-12 border border-primary/10">
                <div className="text-center space-y-8">
                  <div className="animate-scale-in">
                    <div className="text-5xl font-bold text-primary mb-2">
                      <AnimatedCounter end={35} suffix="%" duration={2000} />
                    </div>
                    <p className="text-muted-foreground">{t("index.stats.yield")}</p>
                  </div>
                  <div className="w-full h-px bg-primary/20"></div>
                  <div className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
                    <div className="text-5xl font-bold text-primary mb-2">
                      <AnimatedCounter end={42} prefix="-" suffix="%" duration={2000} />
                    </div>
                    <p className="text-muted-foreground">{t("index.stats.costs")}</p>
                  </div>
                  <div className="w-full h-px bg-primary/20"></div>
                  <div className="animate-scale-in" style={{ animationDelay: "0.6s" }}>
                    <div className="text-5xl font-bold text-primary mb-2">
                      <AnimatedCounter end={20} suffix="h" duration={2000} />
                    </div>
                    <p className="text-muted-foreground">{t("index.stats.time")}</p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 border-t border-primary/10 section-blend">
        <div className="container mx-auto px-4">
          <AnimatedCard className="max-w-2xl mx-auto text-center bg-gradient-to-r from-earth-100/70 via-sand-50/80 to-sage-100/70 rounded-2xl p-12 border border-primary/10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("index.cta.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("index.cta.subtitle")}
            </p>
            <a href={downloadUrl}>
              <AnimatedButton size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {t("index.cta.primary")}
              </AnimatedButton>
            </a>
            <p className="text-sm text-muted-foreground mt-6">
              {t("index.cta.help")}{" "}
              <Link to={withLang("/contact", locale)} className="text-primary hover:text-primary/80 transition-colors font-medium">
                {t("index.cta.contact")}
              </Link>
            </p>
          </AnimatedCard>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 md:py-28 border-t border-primary/10 section-sage">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("index.download.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("index.download.subtitle")}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <AnimatedCard delay={0} className="feature-card">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-125">
                <Apple className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">iOS</h3>
              <p className="text-sm text-muted-foreground mb-6">
                iPhone & iPad
              </p>
              <AnimatedButton className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="sm">
                App Store
              </AnimatedButton>
            </AnimatedCard>

            <AnimatedCard delay={100} className="feature-card">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-125">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Android</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Téléphones & tablettes
              </p>
              <AnimatedButton className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="sm">
                Google Play
              </AnimatedButton>
            </AnimatedCard>

            <AnimatedCard delay={200} className="feature-card">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-125">
                <Monitor className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Windows</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Ordinateurs de bureau
              </p>
              <AnimatedButton className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="sm">
                Microsoft Store
              </AnimatedButton>
            </AnimatedCard>

            <AnimatedCard delay={300} className="feature-card">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-125">
                <Terminal className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Linux</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Serveurs & bureaux
              </p>
              <AnimatedButton className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="sm">
                Télécharger
              </AnimatedButton>
            </AnimatedCard>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              {t("index.download.help")}{" "}
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                {t("index.download.guide")}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-earth border-t border-primary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-lg mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-sage-600 to-sage-700 rounded-lg flex items-center justify-center text-white">
                  <Sprout className="w-5 h-5" />
                </div>
                <span className="text-primary">agricult</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("footer.tagline")}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t("footer.product")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href={featuresUrl} className="hover:text-primary transition-colors">{t("nav.features")}</a></li>
                <li><a href={benefitsUrl} className="hover:text-primary transition-colors">{t("footer.pricing")}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t("footer.security")}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t("footer.company")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href={withLang("/about", locale)} className="hover:text-primary transition-colors">{t("nav.about")}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t("footer.blog")}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t("footer.careers")}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t("footer.support")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">{t("footer.help")}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t("footer.docs")}</a></li>
                <li><a href={withLang("/contact", locale)} className="hover:text-primary transition-colors">{t("nav.contact")}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 agricult. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">{t("footer.privacy")}</a>
              <a href="#" className="hover:text-primary transition-colors">{t("footer.terms")}</a>
              <a href="#" className="hover:text-primary transition-colors">{t("footer.cookies")}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
