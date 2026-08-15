import React from "react";
import { Search, X } from "lucide-react";
import type { Category } from "../types";
import { useLanguage } from "../context/LanguageContext";

interface SearchAndFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: "all" | Category;
  setSelectedCategory: (category: "all" | Category) => void;
}

export const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-4 mb-6">
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
        <input
          type="text"
          placeholder={t.searchPlaceholder}
          className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-10 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3.5 top-3.5 text-slate-500 hover:text-slate-300"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {t.categories.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id as "all" | Category)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === tab.id
                ? "bg-blue-600 text-white shadow-md"
                : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
