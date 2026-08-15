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
    <footer className="border-t border-slate-200 dark:border-slate-800/80 mt-12 py-8 bg-slate-100/50 dark:bg-slate-950 text-center text-xs text-slate-600 dark:text-slate-400 transition-colors">
      <div className="max-w-6xl mx-auto px-4 space-y-2">
        <p className="flex items-center justify-center gap-1 font-medium text-slate-800 dark:text-slate-200">
          {t.footer.craftedBy}{" "}
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline-block" />{" "}
          <span className="font-bold text-indigo-700 dark:text-indigo-400">
            Ashutosh
          </span>
        </p>

        <p>{t.footer.builtFor}</p>

        <p className="text-[11px] text-slate-500 dark:text-slate-500">
          {t.footer.disclaimer}
        </p>

        <div className="pt-2 text-[11px] text-slate-400 dark:text-slate-600 flex items-center justify-center gap-1.5">
          <Scale className="w-3 h-3" />
          <span>
            © {copyrightYear} {t.footer.rightsReserved}
          </span>
        </div>
      </div>
    </footer>
  );
};
