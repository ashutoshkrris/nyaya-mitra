import { useState } from "react";
import type { Category } from "./types";
import { useLanguage } from "./context/LanguageContext";
import { EmergencyBar } from "./components/EmergencyBar";
import { Header } from "./components/Header";
import { SearchAndFilter } from "./components/SearchAndFilter";
import { ScenarioList } from "./components/ScenarioList";
import { SourcesModal } from "./components/SourcesModal";
import { DisclaimerModal } from "./components/DisclaimerModal";
import { Footer } from "./components/Footer";
import { ComplaintModal } from "./components/ComplaintModal";

export default function App() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<"all" | Category>(
    "all",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedScenarioId, setExpandedScenarioId] = useState<string | null>(
    "arrest-detention",
  );
  const [isSourcesModalOpen, setIsSourcesModalOpen] = useState(false);
  const [isDisclaimerModalOpen, setIsDisclaimerModalOpen] = useState(false);
  const [isComplaintModalOpen, setIsComplaintModalOpen] = useState(false);

  const filteredScenarios = t.scenarios.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    return (
      matchesCategory &&
      (item.title.toLowerCase().includes(q) ||
        item.quickSummary.toLowerCase().includes(q) ||
        item.yourRights.some((r) => r.toLowerCase().includes(q)))
    );
  });

  const handleToggleScenario = (id: string) => {
    setExpandedScenarioId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      <EmergencyBar />
      <Header onOpenComplaint={() => setIsComplaintModalOpen(true)} />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
        <SearchAndFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ScenarioList
          scenarios={filteredScenarios}
          expandedId={expandedScenarioId}
          onToggleScenario={handleToggleScenario}
        />
      </main>

      <SourcesModal
        isOpen={isSourcesModalOpen}
        onClose={() => setIsSourcesModalOpen(false)}
      />

      <DisclaimerModal
        isOpen={isDisclaimerModalOpen}
        onClose={() => setIsDisclaimerModalOpen(false)}
      />

      <ComplaintModal
        isOpen={isComplaintModalOpen}
        onClose={() => setIsComplaintModalOpen(false)}
      />

      <Footer
        onOpenSources={() => setIsSourcesModalOpen(true)}
        onOpenDisclaimer={() => setIsDisclaimerModalOpen(true)}
      />
    </div>
  );
}
