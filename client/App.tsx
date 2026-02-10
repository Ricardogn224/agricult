import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import APropos from "./pages/APropos";
import Download from "./pages/Download";
import NotFound from "./pages/NotFound";
import { getSafeLocale, I18nProvider, useI18n } from "./i18n";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <I18nProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageSync />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<APropos />} />
            <Route path="/download" element={<Download />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </I18nProvider>
  </QueryClientProvider>
);

function LanguageSync() {
  const { locale, setLocale } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const paramLang = params.get("lang");
    const safeLang = getSafeLocale(paramLang);

    if (paramLang && paramLang !== safeLang) {
      params.set("lang", safeLang);
      navigate(`${location.pathname}?${params.toString()}${location.hash ?? ""}`, { replace: true });
      return;
    }

    if (paramLang && paramLang !== locale) {
      setLocale(safeLang);
    }
    if (!paramLang) {
      params.set("lang", locale);
      navigate(`${location.pathname}?${params.toString()}${location.hash ?? ""}`, { replace: true });
    }
  }, [location.pathname, location.search, locale, navigate, setLocale]);

  React.useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
