import React from "react";
import { Heart, Scale } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const startYear = 2026;
  const currentYear = new Date().getFullYear();
  const copyrightYear =
    currentYear > startYear ? `${startYear}–${currentYear}` : `${startYear}`;

  return (
    <footer className="relative z-20 w-full border-t border-slate-300 dark:border-slate-800 mt-14 pt-8 pb-16 sm:pb-10 bg-slate-200/90 dark:bg-slate-950 text-center transition-colors">
      <div className="max-w-6xl mx-auto px-4 space-y-2.5">
        {/* Author Line */}
        <p className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-slate-200">
          <span>{t.footer.craftedBy}</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline-block" />
          <span className="font-bold text-indigo-700 dark:text-indigo-400">
            Ashutosh
          </span>
        </p>

        {/* Citations Line */}
        <p className="text-xs text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
          {t.footer.builtFor}
        </p>

        {/* Disclaimer */}
        <p className="text-[11px] text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          {t.footer.disclaimer}
        </p>

        {/* Dynamic Copyright */}
        <div className="pt-2 text-[11px] text-slate-600 dark:text-slate-500 flex items-center justify-center gap-1.5 font-medium">
          <Scale className="w-3.5 h-3.5 text-slate-700 dark:text-slate-400" />
          <span>
            © {copyrightYear} {t.footer.rightsReserved}
          </span>
        </div>
      </div>
    </footer>
  );
};
