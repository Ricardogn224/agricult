import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Apple, Smartphone, Monitor, Terminal, CheckCircle, Download } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedButton } from "@/components/AnimatedButton";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n";
import { withLang } from "@/lib/links";
import { usePageMeta } from "@/lib/seo";

export default function DownloadPage() {
  const { t, locale } = useI18n();
  usePageMeta("meta.download.title", "meta.download.description");
  const featuresUrl = withLang("/", locale, "features");
  const benefitsUrl = withLang("/", locale, "benefits");

  const platforms = [
    {
      name: "iOS",
      icon: Apple,
      description: t("download.platforms.ios.desc"),
      version: "v1.0.0",
      requirements: t("download.platforms.ios.req"),
      size: "145 MB",
      store: "App Store",
      color: "from-blue-50 to-blue-100",
      link: "https://apps.apple.com",
      features: [
        t("download.platforms.features.full"),
        t("download.platforms.features.notifications"),
        t("download.platforms.features.offline"),
        t("download.platforms.features.sync"),
      ],
    },
    {
      name: "Android",
      icon: Smartphone,
      description: t("download.platforms.android.desc"),
      version: "v1.0.0",
      requirements: t("download.platforms.android.req"),
      size: "138 MB",
      store: "Google Play",
      color: "from-green-50 to-green-100",
      link: "https://play.google.com",
      features: [
        t("download.platforms.features.full"),
        t("download.platforms.features.notifications"),
        t("download.platforms.features.offline"),
        t("download.platforms.features.sync"),
      ],
    },
    {
      name: "Windows",
      icon: Monitor,
      description: t("download.platforms.windows.desc"),
      version: "v1.0.0",
      requirements: t("download.platforms.windows.req"),
      size: "192 MB",
      store: "Microsoft Store",
      color: "from-cyan-50 to-cyan-100",
      link: "https://apps.microsoft.com",
      features: [
        t("download.platforms.features.desktop"),
        t("download.platforms.features.system"),
        t("download.platforms.features.files"),
        t("download.platforms.features.sync"),
      ],
    },
    {
      name: "Linux",
      icon: Terminal,
      description: t("download.platforms.linux.desc"),
      version: "v1.0.0",
      requirements: t("download.platforms.linux.req"),
      size: "156 MB",
      store: t("download.platforms.linux.store"),
      color: "from-orange-50 to-orange-100",
      link: "https://downloads.agricult.com/linux",
      features: [
        t("download.platforms.features.cli"),
        t("download.platforms.features.backend"),
        t("download.platforms.features.config"),
        t("download.platforms.features.deps"),
      ],
    },
  ];

  const systemRequirements = [
    {
      title: t("download.requirements.internet.title"),
      description: t("download.requirements.internet.desc"),
    },
    {
      title: t("download.requirements.storage.title"),
      description: t("download.requirements.storage.desc"),
    },
    {
      title: t("download.requirements.cpu.title"),
      description: t("download.requirements.cpu.desc"),
    },
    {
      title: t("download.requirements.ram.title"),
      description: t("download.requirements.ram.desc"),
    },
  ];

  return (
    <div className="min-h-screen page-bg">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sage-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-earth-200/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {t("download.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              {t("download.hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <Link to={withLang("/", locale)}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                >
                  {t("download.hero.back")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Download Cards */}
      <section className="py-20 md:py-28 border-t border-primary/10 section-sage">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("download.platforms.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("download.platforms.subtitle")}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <AnimatedCard key={index} delay={index * 100} className="feature-card overflow-hidden flex flex-col h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative flex flex-col flex-1">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-125">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{platform.description}</p>

                    <div className="space-y-3 mb-6 flex-1">
                      <div className="text-sm">
                        <span className="text-muted-foreground">{t("download.platforms.version")}</span>
                        <span className="ml-2 font-semibold text-foreground">{platform.version}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">{t("download.platforms.size")}</span>
                        <span className="ml-2 font-semibold text-foreground">{platform.size}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">{t("download.platforms.requirements")}</span>
                        <span className="ml-2 font-semibold text-foreground">{platform.requirements}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {platform.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a href={platform.link} target="_blank" rel="noopener noreferrer">
                      <AnimatedButton className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        {platform.store}
                      </AnimatedButton>
                    </a>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 md:py-28 border-t border-primary/10 section-earth">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("download.requirements.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("download.requirements.subtitle")}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {systemRequirements.map((req, index) => (
              <AnimatedCard key={index} delay={index * 100} className="feature-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{req.title}</h3>
                <p className="text-muted-foreground">{req.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-20 md:py-28 border-t border-primary/10 section-sage">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("download.install.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("download.install.subtitle")}
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: "1",
                title: t("download.install.steps.1.title"),
                description: t("download.install.steps.1.desc"),
              },
              {
                step: "2",
                title: t("download.install.steps.2.title"),
                description: t("download.install.steps.2.desc"),
              },
              {
                step: "3",
                title: t("download.install.steps.3.title"),
                description: t("download.install.steps.3.desc"),
              },
              {
                step: "4",
                title: t("download.install.steps.4.title"),
                description: t("download.install.steps.4.desc"),
              },
            ].map((item, index) => (
              <AnimatedCard key={index} delay={index * 100} className="feature-card">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 md:py-28 border-t border-primary/10 section-blend">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t("download.support.title")}</h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t("download.support.subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={withLang("/contact", locale)}>
                  <AnimatedButton size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    {t("download.support.contact")}
                  </AnimatedButton>
                </Link>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                  >
                    {t("download.support.faq")}
                  </Button>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 section-earth">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">{t("footer.product")}</h4>
              <ul className="space-y-2">
                <li>
                  <a href={featuresUrl} className="text-muted-foreground hover:text-primary transition-colors">
                    {t("nav.features")}
                  </a>
                </li>
                <li>
                  <a href={benefitsUrl} className="text-muted-foreground hover:text-primary transition-colors">
                    {t("footer.pricing")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {t("footer.docs")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">{t("footer.company")}</h4>
              <ul className="space-y-2">
                <li>
                  <Link to={withLang("/about", locale)} className="text-muted-foreground hover:text-primary transition-colors">
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {t("footer.blog")}
                  </a>
                </li>
                <li>
                  <Link to={withLang("/contact", locale)} className="text-muted-foreground hover:text-primary transition-colors">
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">{t("footer.legal")}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {t("footer.privacy")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {t("footer.terms")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {t("footer.cookies")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">{t("footer.follow")}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary/10 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 agricult. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
