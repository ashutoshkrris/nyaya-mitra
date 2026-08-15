import React from "react";
import { Scale, BookOpen } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface HeaderProps {
  onToggleSources: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSources }) => {
  const { t } = useLanguage();

  return (
    <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950/60 border border-amber-600/40 rounded-full text-amber-300 text-xs font-semibold mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>{t.badgeText}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
            न्यायMitra{" "}
            <span className="text-orange-500 font-light">| {t.appName}</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1.5 max-w-xl leading-relaxed">
            {t.tagline}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={onToggleSources}
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>{t.legalCitationsBtn}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
