import { useState } from "react";
import type { Category } from "./types";
import { useLanguage } from "./context/LanguageContext";
import { EmergencyBar } from "./components/EmergencyBar";
import { Header } from "./components/Header";
import { SearchAndFilter } from "./components/SearchAndFilter";
import { ScenarioList } from "./components/ScenarioList";
import { ComplaintGenerator } from "./components/ComplaintGenerator";
import { SourcesModal } from "./components/SourcesModal";
import { Footer } from "./components/Footer";

function MainApp() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<"all" | Category>(
    "all",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedScenarioId, setExpandedScenarioId] = useState<string | null>(
    "arrest-detention",
  );
  const [isSourcesModalOpen, setIsSourcesModalOpen] = useState(false);

  const filteredScenarios = t.scenarios.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesQuery =
      item.title.toLowerCase().includes(q) ||
      item.quickSummary.toLowerCase().includes(q) ||
      item.yourRights.some((r) => r.toLowerCase().includes(q));
    return matchesCategory && matchesQuery;
  });

  const handleToggleScenario = (id: string) => {
    setExpandedScenarioId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      <EmergencyBar />
      <Header onToggleSources={() => setIsSourcesModalOpen(true)} />

      <main className="max-w-6xl mx-auto px-4 py-6">
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

        <ComplaintGenerator />
      </main>

      <SourcesModal
        isOpen={isSourcesModalOpen}
        onClose={() => setIsSourcesModalOpen(false)}
      />

      <Footer />
    </div>
  );
}

export default function App() {
  return <MainApp />;
}
