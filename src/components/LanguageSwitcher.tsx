import React from "react";
import { Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center bg-slate-800 border border-slate-700 rounded-xl p-1">
      <Languages className="w-4 h-4 text-slate-400 ml-2 mr-1" />
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
          language === "en"
            ? "bg-blue-600 text-white shadow-sm"
            : "text-slate-400 hover:text-slate-200"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("hi")}
        className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
          language === "hi"
            ? "bg-blue-600 text-white shadow-sm"
            : "text-slate-400 hover:text-slate-200"
        }`}
      >
        हिन्दी
      </button>
    </div>
  );
};
