import React from "react";
import { X, ShieldAlert, AlertTriangle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useLanguage();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 rounded-xl border border-amber-200 dark:border-amber-700/50">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {t.disclaimerModal.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t.disclaimerModal.subtitle}
            </p>
          </div>
        </div>

        <div className="space-y-3.5 my-5 text-xs text-slate-700 dark:text-slate-300">
          {t.disclaimerModal.points.map((pt, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80 leading-relaxed"
            >
              <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-1">
                {pt.heading}
              </h4>
              <p className="text-slate-600 dark:text-slate-400">{pt.text}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800">
          <span className="text-[11px] text-amber-700 dark:text-amber-400 flex items-center gap-1 font-semibold">
            <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Emergency SOS: Dial 112</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors shadow-sm"
          >
            {t.disclaimerModal.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
