import React, { createContext, useContext, useState } from "react";
import enData from "../locales/en.json";
import hiData from "../locales/hi.json";
import type { LocaleData } from "../types";

type SupportedLanguage = "en" | "hi";

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: LocaleData;
}

const localesMap: Record<SupportedLanguage, LocaleData> = {
  en: enData as unknown as LocaleData,
  hi: hiData as unknown as LocaleData,
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    const saved = localStorage.getItem("nyayamitra_lang");
    return saved === "hi" || saved === "en" ? saved : "en";
  });

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    localStorage.setItem("nyayamitra_lang", lang);
  };

  const t = localesMap[language] || localesMap.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
