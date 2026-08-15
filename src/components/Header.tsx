import React from "react";
import { Scale, BookOpen } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  onToggleSources: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSources }) => {
  const { t } = useLanguage();

  return (
    <header className="border-b border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md sticky top-[45px] z-40">
      <div className="max-w-6xl mx-auto px-4 py-5 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-600/40 rounded-full text-amber-900 dark:text-amber-300 text-xs font-semibold mb-2.5">
            <Scale className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
            <span>{t.badgeText}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            <span className="text-indigo-700 dark:text-indigo-400">
              Nyaya Mitra
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl leading-relaxed">
            {t.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};
