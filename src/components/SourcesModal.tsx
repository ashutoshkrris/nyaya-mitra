import React from "react";
import { X, BookOpen, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface SourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SourcesModal: React.FC<SourcesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useLanguage();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full p-5 sm:p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4 pr-6">
          <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 rounded-xl border border-indigo-100 dark:border-indigo-800/40 flex-shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {t.sourcesModal.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t.sourcesModal.subtitle}
            </p>
          </div>
        </div>

        {/* Dynamic Sections from Locale */}
        <div className="space-y-3.5 my-4 text-xs text-slate-700 dark:text-slate-300">
          {t.sourcesModal.sections?.map((section, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80"
            >
              <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-2 flex items-center gap-1.5 text-xs sm:text-sm">
                <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                <span>{section.heading}</span>
              </h4>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                {section.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-2 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Modal Action Footer */}
        <div className="mt-5 flex justify-end pt-2 border-t border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors shadow-sm"
          >
            {t.sourcesModal.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
