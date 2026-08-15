import React from "react";
import type { Scenario } from "../types";
import { ScenarioCard } from "./ScenarioCard";
import { AlertCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ScenarioListProps {
  scenarios: Scenario[];
  expandedId: string | null;
  onToggleScenario: (id: string) => void;
}

export const ScenarioList: React.FC<ScenarioListProps> = ({
  scenarios,
  expandedId,
  onToggleScenario,
}) => {
  const { t } = useLanguage();

  if (scenarios.length === 0) {
    return (
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center text-slate-400">
        <AlertCircle className="w-8 h-8 text-slate-500 mx-auto mb-2" />
        <h3 className="text-white font-bold text-sm">{t.noResultsTitle}</h3>
        <p className="text-xs mt-1">{t.noResultsDesc}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {scenarios.map((scenario) => (
        <ScenarioCard
          key={scenario.id}
          scenario={scenario}
          isExpanded={expandedId === scenario.id}
          onToggle={() => onToggleScenario(scenario.id)}
        />
      ))}
    </div>
  );
};
