import React, { useState } from "react";
import { Copy, Check, ShieldAlert } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const ComplaintGenerator: React.FC = () => {
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
    incidentDescription: "",
    violations: cg.violationsDefault,
  });

  const [copied, setCopied] = useState(false);

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
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-lg text-slate-900 dark:text-slate-100 mt-8 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 rounded-xl border border-indigo-100 dark:border-indigo-800/40">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {cg.title}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {cg.subtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            {cg.victimName}
          </label>
          <input
            type="text"
            className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder={cg.phonePlaceholder}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            {cg.stationCity}
          </label>
          <input
            type="text"
            className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder={cg.stationCityPlaceholder}
            value={formData.policeStation}
            onChange={(e) =>
              setFormData({ ...formData, policeStation: e.target.value })
            }
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            {cg.officerDetails}
          </label>
          <input
            type="text"
            className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder={cg.officerDetailsPlaceholder}
            value={formData.officerDetails}
            onChange={(e) =>
              setFormData({ ...formData, officerDetails: e.target.value })
            }
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
          {cg.description}
        </label>
        <textarea
          rows={3}
          className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder={cg.descPlaceholder}
          value={formData.incidentDescription}
          onChange={(e) =>
            setFormData({ ...formData, incidentDescription: e.target.value })
          }
        />
      </div>

      <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
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
        <pre className="text-xs font-mono text-slate-800 dark:text-slate-300 whitespace-pre-wrap max-h-48 overflow-y-auto leading-relaxed">
          {generateLetter()}
        </pre>
      </div>
    </div>
  );
};
