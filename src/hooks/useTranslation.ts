import { useLanguage } from "@/contexts/LanguageContext";
import { en } from "@/data/translations/en";
import { uk } from "@/data/translations/uk";

const translations = {
  en,
  uk,
};

export function useTranslation() {
  const { language } = useLanguage();
  return translations[language];
}

