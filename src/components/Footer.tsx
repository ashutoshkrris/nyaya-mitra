import React from "react";
import { Scale, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface FooterProps {
  onOpenSources: () => void;
  onOpenDisclaimer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenSources,
  onOpenDisclaimer,
}) => {
  const { t } = useLanguage();

  const startYear = 2026;
  const currentYear = new Date().getFullYear();
  const copyrightYear =
    currentYear > startYear ? `${startYear}–${currentYear}` : `${startYear}`;

  return (
    <footer className="relative z-20 w-full border-t border-slate-200 dark:border-slate-800/80 mt-14 pt-8 pb-12 bg-white dark:bg-slate-950 text-center transition-colors">
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        {/* Author Line */}
        <p className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
          <span>{t.footer.craftedBy}</span>

          <a
            href="http://ashutoshkrris.in"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors underline-offset-4 hover:underline"
          >
            <span>Ashutosh</span>
          </a>
        </p>

        {/* Backlinks */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
          <button
            type="button"
            onClick={onOpenSources}
            className="cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors underline-offset-4 hover:underline"
          >
            {t.footer.links.sources}
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={onOpenDisclaimer}
            className="cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors underline-offset-4 hover:underline"
          >
            {t.footer.links.disclaimer}
          </button>
          <span>•</span>
          <a
            href="https://github.com/ashutoshkrris/nyaya-mitra"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors underline-offset-4 hover:underline"
          >
            <span>{t.footer.links.github}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[11px] text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1.5 pt-1">
          <Scale className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
          <span>
            © {copyrightYear} {t.footer.rightsReserved}
          </span>
        </div>
      </div>
    </footer>
  );
};
