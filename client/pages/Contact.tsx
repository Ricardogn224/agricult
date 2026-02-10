import Header from "@/components/Header";
import { Mail, MapPin, Phone, CircleCheck, Sprout } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedButton } from "@/components/AnimatedButton";
import { useState } from "react";
import { useI18n } from "@/i18n";
import { withLang } from "@/lib/links";
import { usePageMeta } from "@/lib/seo";

export default function Contact() {
  const { t, locale } = useI18n();
  usePageMeta("meta.contact.title", "meta.contact.description");
  const homeUrl = withLang("/", locale);
  const featuresUrl = withLang("/", locale, "features");
  const benefitsUrl = withLang("/", locale, "benefits");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

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
              {t("contact.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              {t("contact.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 border-t border-primary/10 section-sage">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Card 1 */}
            <AnimatedCard delay={0} className="feature-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{t("contact.info.email")}</h3>
              <p className="text-muted-foreground mb-4">
                {t("contact.info.email.desc")}
              </p>
              <a
                href="mailto:contact@agricult.com"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                contact@agricult.com
              </a>
            </AnimatedCard>

            {/* Contact Info Card 2 */}
            <AnimatedCard delay={100} className="feature-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{t("contact.info.phone")}</h3>
              <p className="text-muted-foreground mb-4">
                {t("contact.info.phone.desc")}
              </p>
              <a
                href="tel:+33123456789"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                +33 (1) 23 45 67 89
              </a>
            </AnimatedCard>

            {/* Contact Info Card 3 */}
            <AnimatedCard delay={200} className="feature-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{t("contact.info.address")}</h3>
              <p className="text-muted-foreground">
                123 Rue de l'Agriculture
                <br />
                75001 Paris, France
              </p>
            </AnimatedCard>
          </div>

          {/* Contact Form */}
          <AnimatedCard delay={300} className="max-w-2xl mx-auto">
            <div className="bg-white/85 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                {t("contact.form.title")}
              </h2>

              {submitted ? (
                <div className="text-center py-12 animate-scale-in">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <CircleCheck className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {t("contact.form.sent")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("contact.form.sent.desc")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder={t("contact.form.name.placeholder")}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder={t("contact.form.email.placeholder")}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.phone")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder={t("contact.form.phone.placeholder")}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.company")}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder={t("contact.form.company.placeholder")}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      placeholder={t("contact.form.message.placeholder")}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <AnimatedButton
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {t("contact.form.submit")}
                  </AnimatedButton>

                  <p className="text-sm text-muted-foreground text-center">
                    {t("contact.form.required")}
                  </p>
                </form>
              )}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 border-t border-primary/10 section-earth">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("contact.faq.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contact.faq.subtitle")}
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            <AnimatedCard delay={0} className="feature-card">
              <h3 className="text-lg font-bold text-foreground mb-2">
                {t("contact.faq.pricing.q")}
              </h3>
              <p className="text-muted-foreground">
                {t("contact.faq.pricing.a")}
              </p>
            </AnimatedCard>

            <AnimatedCard delay={100} className="feature-card">
              <h3 className="text-lg font-bold text-foreground mb-2">
                {t("contact.faq.security.q")}
              </h3>
              <p className="text-muted-foreground">
                {t("contact.faq.security.a")}
              </p>
            </AnimatedCard>

            <AnimatedCard delay={200} className="feature-card">
              <h3 className="text-lg font-bold text-foreground mb-2">
                {t("contact.faq.import.q")}
              </h3>
              <p className="text-muted-foreground">
                {t("contact.faq.import.a")}
              </p>
            </AnimatedCard>

            <AnimatedCard delay={300} className="feature-card">
              <h3 className="text-lg font-bold text-foreground mb-2">
                {t("contact.faq.training.q")}
              </h3>
              <p className="text-muted-foreground">
                {t("contact.faq.training.a")}
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-blend border-t border-primary/10 py-12">
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
                <li>
                  <a href={homeUrl} className="hover:text-primary transition-colors">
                    {t("nav.home")}
                  </a>
                </li>
                <li>
                  <a href={featuresUrl} className="hover:text-primary transition-colors">
                    {t("nav.features")}
                  </a>
                </li>
                <li>
                  <a href={benefitsUrl} className="hover:text-primary transition-colors">
                    {t("footer.pricing")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t("footer.company")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href={withLang("/about", locale)} className="hover:text-primary transition-colors">
                    {t("nav.about")}
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    {t("footer.blog")}
                  </a>
                </li>
                <li>
                  <a href={withLang("/contact", locale)} className="hover:text-primary transition-colors">
                    {t("nav.contact")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t("footer.support")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    {t("footer.help")}
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    {t("footer.docs")}
                  </a>
                </li>
                <li>
                  <a href={withLang("/contact", locale)} className="hover:text-primary transition-colors">
                    {t("footer.contact")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 agricult. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                {t("footer.privacy")}
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                {t("footer.terms")}
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                {t("footer.cookies")}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
