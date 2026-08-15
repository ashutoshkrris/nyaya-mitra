import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-800/80 mt-12 py-6 text-center text-xs text-slate-500">
      <p>{t.footer.builtFor}</p>
      <p className="mt-1 text-[11px] text-slate-600">{t.footer.disclaimer}</p>
    </footer>
  );
};
