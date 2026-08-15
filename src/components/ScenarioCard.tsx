import React from "react";
import {
  Car,
  ShieldAlert,
  UserCheck,
  FileText,
  Search,
  Banknote,
  AlertOctagon,
  Scale,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  PhoneCall,
} from "lucide-react";
import type { Scenario } from "../types";
import { useLanguage } from "../context/LanguageContext";

interface ScenarioCardProps {
  scenario: Scenario;
  isExpanded: boolean;
  onToggle: () => void;
}

const renderIcon = (name: string) => {
  switch (name) {
    case "Car":
      return <Car className="w-5 h-5" />;
    case "ShieldAlert":
      return <ShieldAlert className="w-5 h-5" />;
    case "UserCheck":
      return <UserCheck className="w-5 h-5" />;
    case "FileText":
      return <FileText className="w-5 h-5" />;
    case "Search":
      return <Search className="w-5 h-5" />;
    case "Banknote":
      return <Banknote className="w-5 h-5" />;
    case "AlertOctagon":
      return <AlertOctagon className="w-5 h-5" />;
    default:
      return <Scale className="w-5 h-5" />;
  }
};

export const ScenarioCard: React.FC<ScenarioCardProps> = ({
  scenario,
  isExpanded,
  onToggle,
}) => {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-900 border border-slate-800/90 rounded-2xl overflow-hidden shadow-sm transition-all">
      <div
        onClick={onToggle}
        className="p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-800/40 transition-colors"
      >
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 bg-slate-800 border border-slate-700 text-blue-400 rounded-xl flex-shrink-0 mt-0.5">
            {renderIcon(scenario.iconName)}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-base sm:text-lg font-bold text-white">
                {scenario.title}
              </h2>
              {scenario.severity === "urgent" && (
                <span className="text-[10px] uppercase font-bold bg-red-950 border border-red-800 text-red-300 px-2 py-0.5 rounded-full">
                  {t.highPriorityBadge}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
              {scenario.quickSummary}
            </p>
          </div>
        </div>
        <button className="text-slate-400 hover:text-white p-1 flex-shrink-0">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="px-4 pb-6 sm:px-6 pt-2 border-t border-slate-800/60 bg-slate-950/40 space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2.5 flex items-center gap-1.5">
              <Scale className="w-4 h-4" />
              {t.rightsHeading}
            </h4>
            <ul className="space-y-2">
              {scenario.yourRights.map((right, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>{right}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-950/30 border border-emerald-900/40 rounded-xl p-3.5">
              <h5 className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {t.dosHeading}
              </h5>
              <ul className="space-y-1.5 text-xs text-emerald-200">
                {scenario.immediateSteps.dos.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-rose-950/30 border border-rose-900/40 rounded-xl p-3.5">
              <h5 className="text-xs font-bold text-rose-400 flex items-center gap-1.5 mb-2">
                <XCircle className="w-4 h-4 text-rose-400" />
                {t.dontsHeading}
              </h5>
              <ul className="space-y-1.5 text-xs text-rose-200">
                {scenario.immediateSteps.donts.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              {t.complainHeading}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {scenario.whereToComplain.map((comp, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-white">
                      {comp.authority}
                    </span>
                    {comp.contact && (
                      <a
                        href={`tel:${comp.contact.split(" ")[0]}`}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-400 hover:underline"
                      >
                        <PhoneCall className="w-3 h-3" />
                        {comp.contact}
                      </a>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {comp.action}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-900 flex flex-wrap gap-2">
            {scenario.citations.map((cite, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-1 text-[11px] bg-slate-900 border border-slate-800 text-slate-400 px-2.5 py-1 rounded-md"
              >
                <span className="font-semibold text-slate-300">{cite.law}</span>
                <span className="text-blue-400">{cite.section}</span>
                {cite.legacyRef && (
                  <span className="text-slate-500">({cite.legacyRef})</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
