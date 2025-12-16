import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "uk";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Перевіряємо збережену мову в localStorage або використовуємо мову браузера
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "en" || saved === "uk")) {
      return saved;
    }
    // Перевіряємо мову браузера
    const browserLang = navigator.language.split("-")[0];
    return browserLang === "uk" ? "uk" : "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

