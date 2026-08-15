import React from "react";
import { X } from "lucide-react";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-lg font-bold text-white mb-1">
          {t.sourcesModal.title}
        </h3>
        <p className="text-xs text-slate-400 mb-4">{t.sourcesModal.subtitle}</p>

        <div className="space-y-3 text-xs text-slate-300">
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
            <h4 className="font-bold text-blue-400">
              1. Criminal Law Codes (India Code)
            </h4>
            <p className="text-slate-400 mt-1">
              • <strong>Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023</strong>{" "}
              (Replaces CrPC 1973)
              <br />• <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong>{" "}
              (Replaces IPC 1860)
            </p>
          </div>

          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
            <h4 className="font-bold text-blue-400">
              2. Constitutional Rights (Articles 20, 21, 22, 39A)
            </h4>
            <p className="text-slate-400 mt-1">
              Fundamental rights guaranteeing dignity, legal representation,
              protection from arbitrary arrest, and mandatory magistrate
              production within 24 hours.
            </p>
          </div>

          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
            <h4 className="font-bold text-blue-400">
              3. Landmark Supreme Court Judgments
            </h4>
            <ul className="space-y-1.5 mt-1 text-slate-400">
              <li>
                • <strong>D.K. Basu v. State of West Bengal (1997):</strong> 11
                mandatory guidelines on arrest memos and relative notification.
              </li>
              <li>
                • <strong>Lalita Kumari v. Govt. of UP (2014):</strong>{" "}
                Constitution bench directive on mandatory FIR registration.
              </li>
              <li>
                • <strong>Paramvir Singh Saini v. Baljit Singh (2020):</strong>{" "}
                Mandatory 24x7 CCTV coverage in police stations.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
          >
            {t.sourcesModal.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
