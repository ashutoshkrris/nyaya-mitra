import React from "react";
import { PhoneCall, AlertTriangle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const EmergencyBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-red-700 dark:bg-red-950/95 border-b border-red-600 dark:border-red-800/80 text-white px-4 py-2.5 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-300 animate-pulse flex-shrink-0" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-50">
            {t.emergencyHeader}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {t.emergencyNumbers.map((sos) => (
            <a
              key={sos.number}
              href={`tel:${sos.number}`}
              className="cursor-pointer inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-500 dark:bg-red-600 dark:hover:bg-red-500 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg shadow-sm transition-all active:scale-95 border border-red-400/40"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{sos.number}</span>
              <span className="hidden lg:inline text-[11px] font-normal text-red-100">
                ({sos.badge})
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
