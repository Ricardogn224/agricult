import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Users, Target, Heart, Zap, Wheat, UserRound, UserCog, UserCheck, UserPen } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedButton } from "@/components/AnimatedButton";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n";
import { withLang } from "@/lib/links";
import { usePageMeta } from "@/lib/seo";

export default function APropos() {
  const { t, locale } = useI18n();
  usePageMeta("meta.about.title", "meta.about.description");
  const featuresUrl = withLang("/", locale, "features");
  const benefitsUrl = withLang("/", locale, "benefits");

  const teamMembers = [
    {
      name: "Jean Dupont",
      roleKey: "about.team.ceo.role",
      descKey: "about.team.ceo.desc",
      icon: UserRound,
      accent: "from-sage-100 to-sage-200",
    },
    {
      name: "Marie Dubois",
      roleKey: "about.team.cto.role",
      descKey: "about.team.cto.desc",
      icon: UserCog,
      accent: "from-earth-100 to-sage-200",
    },
    {
      name: "Pierre Bernard",
      roleKey: "about.team.sales.role",
      descKey: "about.team.sales.desc",
      icon: UserCheck,
      accent: "from-sage-100 to-earth-200",
    },
    {
      name: "Sophie Martin",
      roleKey: "about.team.product.role",
      descKey: "about.team.product.desc",
      icon: UserPen,
      accent: "from-earth-100 to-earth-200",
    },
  ];

  const values = [
    {
      icon: Target,
      titleKey: "about.values.innovation",
      descKey: "about.values.innovation.desc",
    },
    {
      icon: Users,
      titleKey: "about.values.community",
      descKey: "about.values.community.desc",
    },
    {
      icon: Heart,
      titleKey: "about.values.sustainability",
      descKey: "about.values.sustainability.desc",
    },
    {
      icon: Zap,
      titleKey: "about.values.excellence",
      descKey: "about.values.excellence.desc",
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
              {t("about.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              {t("about.hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <AnimatedButton size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {t("about.hero.cta")}
              </AnimatedButton>
              <Link to={withLang("/", locale)}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                >
                  {t("about.hero.back")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 border-t border-primary/10 section-sage">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 text-center">{t("about.story.title")}</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedCard delay={100}>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("about.story.p1")}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("about.story.p2")}
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={200}>
                <div className="bg-gradient-to-br from-sage-100 via-sand-50 to-earth-100 rounded-xl p-12 flex flex-col items-center justify-center min-h-96">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 border border-primary/10 shadow-sm">
                    <Wheat className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-center font-semibold text-foreground">
                    {t("about.story.card")}
                  </p>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 border-t border-primary/10 section-earth">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">{t("about.values.title")}</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedCard key={index} delay={index * 100} className="feature-card flex flex-col">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{t(value.titleKey)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(value.descKey)}</p>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 border-t border-primary/10 section-sage">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">{t("about.team.title")}</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              return (
              <AnimatedCard key={index} delay={index * 100} className="feature-card flex flex-col text-center">
                <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${member.accent} border border-primary/10`}>
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-sm font-medium text-primary mb-4">{t(member.roleKey)}</p>
                <p className="text-muted-foreground leading-relaxed">{t(member.descKey)}</p>
              </AnimatedCard>
            );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 border-t border-primary/10 section-blend">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0} className="text-center">
              <div className="text-5xl font-bold text-primary mb-4">5,000+</div>
              <p className="text-lg text-muted-foreground">{t("about.stats.active")}</p>
            </AnimatedCard>

            <AnimatedCard delay={100} className="text-center">
              <div className="text-5xl font-bold text-primary mb-4">30+</div>
              <p className="text-lg text-muted-foreground">{t("about.stats.countries")}</p>
            </AnimatedCard>

            <AnimatedCard delay={200} className="text-center">
              <div className="text-5xl font-bold text-primary mb-4">+35%</div>
              <p className="text-lg text-muted-foreground">{t("about.stats.yield")}</p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 border-t border-primary/10 section-earth">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{t("about.cta.title")}</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t("about.cta.subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  {t("about.cta.start")}
                </AnimatedButton>
                <Link to={withLang("/contact", locale)}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                  >
                    {t("about.cta.contact")}
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 section-blend">
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
