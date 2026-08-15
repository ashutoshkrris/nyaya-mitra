import React from "react";
import { PhoneCall, AlertTriangle, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const EmergencyBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-red-700 dark:bg-red-950 border-b border-red-600 dark:border-red-800 text-white px-4 py-2.5 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-300 animate-pulse flex-shrink-0" />
          <a
            href="tel:112"
            className="cursor-pointer bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black uppercase px-3 py-1 rounded-full shadow transition-all active:scale-95 flex items-center gap-1.5"
          >
            <PhoneCall className="w-3 h-3" />
            <span>{t.dangerAlertBtn}</span>
          </a>
        </div>

        {/* Hotlines Matrix */}
        <div className="flex flex-wrap items-center gap-2">
          {t.emergencyNumbers.map((sos) => (
            <a
              key={sos.number}
              href={`tel:${sos.number}`}
              className={`cursor-pointer inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm transition-all active:scale-95 border ${
                sos.number === "15100"
                  ? "bg-blue-600 hover:bg-blue-500 text-white border-blue-400"
                  : "bg-red-600/90 hover:bg-red-500 text-white border-red-400/40"
              }`}
            >
              {sos.number === "15100" && (
                <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
              )}
              <span>{sos.number}</span>
              <span className="hidden sm:inline text-[10px] font-normal text-red-100 opacity-90">
                ({sos.badge})
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
