import React, { useState } from "react";
import { Copy, Check, ShieldAlert } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const ComplaintGenerator: React.FC = () => {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    victimName: "",
    phone: "",
    cityState: "",
    policeStation: "",
    officerDetails: "",
    date: new Date().toISOString().split("T")[0],
    time: "14:00",
    incidentDescription: "",
    violations:
      "Refusal to register FIR / High-handedness / Arbitrary detention",
  });

  const [copied, setCopied] = useState(false);

  const generateLetter = () => {
    if (language === "hi") {
      return `सेवा में,
पुलिस अधीक्षक (SP) / पुलिस उपायुक्त (DCP),
जिला: ${formData.cityState || "[आपका शहर / जिला]"}

विषय: भारतीय नागरिक सुरक्षा संहिता (BNSS), 2023 की धारा 173(3) (पूर्व CrPC 154(3)) के तहत पुलिस दुर्व्यवहार / FIR न लिखने की औपचारिक शिकायत।

महोदय/महोदया,

मैं, ${formData.victimName || "[आपका नाम]"}, निवासी: ${formData.cityState || "[आपका पता]"}, संपर्क: ${formData.phone || "[मोबाइल नंबर]"}, निम्नलिखित गैर-कानूनी घटना को आपके संज्ञान में लाना चाहता/चाहती हूँ:

1. घटना का विवरण:
- दिनांक: ${formData.date}
- समय: लगभग ${formData.time}
- संबंधित थाना: ${formData.policeStation || "[थाने का नाम]"}
- संबंधित पुलिसकर्मी: ${formData.officerDetails || "[नाम / बैच नंबर / पद]"}

2. मुख्य शिकायत एवं कानूनी उल्लंघन:
${formData.violations}

3. घटना का संक्षिप्त विवरण:
${formData.incidentDescription || "[घटना का सिलसिलेवार विवरण लिखें]"}

4. प्रार्थना / आवश्यक कार्रवाई:
माननीय सर्वोच्च न्यायालय के ललिता कुमारी (2014) और परमवीर सिंह सैनी (2020) के निर्णयों के आलोक में आपसे निवेदन है कि:
क) तत्काल FIR दर्ज कराने तथा थाने के CCTV फुटेज सुरक्षित रखने का निर्देश दें।
ख) दोषी पुलिसकर्मियों के विरुद्ध विभागीय एवं कानूनी जांच प्रारंभ करें।
ग) इस शिकायत पत्र की लिखित पावती प्रदान करें।

भवदीय,
${formData.victimName || "[आपका नाम]"}
दिनांक: ${formData.date}
मो: ${formData.phone || "[मोबाइल नंबर]"}`;
    }

    return `To,
The Superintendent of Police (SP) / Deputy Commissioner of Police (DCP),
District: ${formData.cityState || "[Your City / District]"}

Subject: Formal Complaint under Section 173(3) of Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 (formerly CrPC Sec. 154(3)) regarding Police Misconduct / Grievance.

Respected Sir/Madam,

I, ${formData.victimName || "[Your Full Name]"}, residing in ${formData.cityState || "[Your Address/City]"}, Contact: ${formData.phone || "[Your Phone Number]"}, wish to bring the following unlawful incident to your immediate attention:

1. INCIDENT DETAILS:
- Date: ${formData.date}
- Approximate Time: ${formData.time}
- Concerned Police Station: ${formData.policeStation || "[Name of Police Station]"}
- Officer(s) Involved: ${formData.officerDetails || "[Name / Badge Number / Physical description]"}

2. NATURE OF GRIEVANCE & STATUTORY VIOLATIONS:
${formData.violations}

3. BRIEF STATEMENT OF FACTS:
${formData.incidentDescription || "[Describe step-by-step what occurred, what was said, and what action police took or refused to take.]"}

4. PRAYER / RELIEF SOUGHT:
In light of the landmark Supreme Court ruling in Lalita Kumari v. Govt. of UP (2014) and the statutory mandates of BNSS 2023, I respectfully request your office to:
a) Intervene and direct the registration of an FIR / preserve CCTV footage under the Paramvir Singh Saini (2020) mandate.
b) Initiate appropriate departmental and legal action against the delinquent officers for procedural violations.
c) Provide me with a written acknowledgment of this complaint.

Yours sincerely,

${formData.victimName || "[Your Name]"}
Date: ${formData.date}
Contact: ${formData.phone || "[Your Phone]"}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateLetter());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl text-slate-100 mt-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 bg-blue-600/20 text-blue-400 rounded-xl">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">
            {t.complaintGen.title}
          </h3>
          <p className="text-xs text-slate-400">{t.complaintGen.subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-xs font-semibold text-slate-300">
            {t.complaintGen.victimName}
          </label>
          <input
            type="text"
            className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Rajesh Sharma"
            value={formData.victimName}
            onChange={(e) =>
              setFormData({ ...formData, victimName: e.target.value })
            }
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-300">
            {t.complaintGen.phone}
          </label>
          <input
            type="text"
            className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., +91 98765 43210"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-300">
            {t.complaintGen.stationCity}
          </label>
          <input
            type="text"
            className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Koramangala PS, Bengaluru"
            value={formData.policeStation}
            onChange={(e) =>
              setFormData({ ...formData, policeStation: e.target.value })
            }
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-300">
            {t.complaintGen.officerDetails}
          </label>
          <input
            type="text"
            className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., SI R. Kumar / Badge #452"
            value={formData.officerDetails}
            onChange={(e) =>
              setFormData({ ...formData, officerDetails: e.target.value })
            }
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="text-xs font-semibold text-slate-300">
          {t.complaintGen.description}
        </label>
        <textarea
          rows={3}
          className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={t.complaintGen.descPlaceholder}
          value={formData.incidentDescription}
          onChange={(e) =>
            setFormData({ ...formData, incidentDescription: e.target.value })
          }
        />
      </div>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {t.complaintGen.previewDraft}
          </span>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1 text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg transition-colors"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-300" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
            {copied ? t.complaintGen.copiedBtn : t.complaintGen.copyBtn}
          </button>
        </div>
        <pre className="text-xs font-mono text-slate-300 whitespace-pre-wrap max-h-48 overflow-y-auto leading-relaxed">
          {generateLetter()}
        </pre>
      </div>
    </div>
  );
};
