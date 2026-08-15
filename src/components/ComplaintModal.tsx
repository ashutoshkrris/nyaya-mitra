import React, { useState } from "react";
import { X, Copy, Check, FileText } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ComplaintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComplaintModal: React.FC<ComplaintModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useLanguage();
  const cg = t.complaintGen;

  const [formData, setFormData] = useState({
    victimName: "",
    phone: "",
    cityState: "",
    policeStation: "",
    officerDetails: "",
    date: new Date().toISOString().split("T")[0],
    time: "14:00",
    violations: cg.violationsDefault,
    incidentDescription: "",
  });

  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generateLetter = () => {
    let letter = cg.letterTemplate;
    const replacements: Record<string, string> = {
      "{victimName}": formData.victimName || cg.defaults.name,
      "{cityState}": formData.cityState || cg.defaults.city,
      "{phone}": formData.phone || cg.defaults.phone,
      "{policeStation}": formData.policeStation || cg.defaults.station,
      "{officerDetails}": formData.officerDetails || cg.defaults.officer,
      "{date}": formData.date,
      "{time}": formData.time,
      "{violations}": formData.violations || cg.violationsDefault,
      "{incidentDescription}":
        formData.incidentDescription || cg.defaults.description,
    };

    Object.entries(replacements).forEach(([key, val]) => {
      letter = letter.replaceAll(key, val);
    });

    return letter;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateLetter());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-3xl w-full p-5 sm:p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5 pr-8">
          <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 rounded-xl border border-indigo-100 dark:border-indigo-800/40 flex-shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {cg.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {cg.subtitle}
            </p>
          </div>
        </div>

        {/* Complete Form Inputs */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {cg.victimName}
              </label>
              <input
                type="text"
                className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder={cg.victimNamePlaceholder}
                value={formData.victimName}
                onChange={(e) =>
                  setFormData({ ...formData, victimName: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {cg.phone}
              </label>
              <input
                type="text"
                className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder={cg.phonePlaceholder}
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                City / District
              </label>
              <input
                type="text"
                className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g., Bengaluru, Karnataka"
                value={formData.cityState}
                onChange={(e) =>
                  setFormData({ ...formData, cityState: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Police Station
              </label>
              <input
                type="text"
                className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder={cg.stationCityPlaceholder}
                value={formData.policeStation}
                onChange={(e) =>
                  setFormData({ ...formData, policeStation: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Date of Incident
              </label>
              <input
                type="date"
                className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Approximate Time
              </label>
              <input
                type="time"
                className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {cg.officerDetails}
              </label>
              <input
                type="text"
                className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder={cg.officerDetailsPlaceholder}
                value={formData.officerDetails}
                onChange={(e) =>
                  setFormData({ ...formData, officerDetails: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Primary Grievance / Violation
            </label>
            <input
              type="text"
              className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.violations}
              onChange={(e) =>
                setFormData({ ...formData, violations: e.target.value })
              }
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {cg.description}
            </label>
            <textarea
              rows={3}
              className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder={cg.descPlaceholder}
              value={formData.incidentDescription}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  incidentDescription: e.target.value,
                })
              }
            />
          </div>

          {/* Live Draft Preview */}
          <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {cg.previewDraft}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="cursor-pointer inline-flex items-center gap-1 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg transition-colors shadow-sm"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                {copied ? cg.copiedBtn : cg.copyBtn}
              </button>
            </div>
            <pre className="text-xs font-mono text-slate-800 dark:text-slate-300 whitespace-pre-wrap max-h-48 overflow-y-auto leading-relaxed border-t border-slate-200 dark:border-slate-800/80 pt-2">
              {generateLetter()}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
