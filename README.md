# ⚖️ NyayaMitra (न्यायMitra)

> **30 seconds. Know your rights. Know your next step.**
> An open-source, civic-first web application designed to help Indian citizens instantly understand their legal rights and immediate next steps during police encounters.

---

## 📌 The Problem & Core Philosophy

Most citizens do not know their procedural and constitutional rights when stopped, questioned, detained, or harassed by police. In high-stress encounters, reading multi-page legal PDFs or searching through 500+ sections of bare acts is impossible.

**NyayaMitra solves this with a strict 30-second UX rule:**

$$
\text{Situation}
\;\longrightarrow\;
\text{STOP / BREATHE (3 Actions)}
\;\longrightarrow\;
\text{Rights \& Citations}
\;\longrightarrow\;
\text{Escalation / Complaints}
$$

---

## ✨ Key Features

* ⚡ **30-Second Panic Triage:** Every scenario begins with a high-visibility **"STOP. BREATHE. DO THESE 3 THINGS RIGHT NOW."** action box before any detailed legal prose.
* 🔊 **Web Speech Audio Mode (Text-to-Speech):** Integrated browser TTS engine (`window.speechSynthesis`) allows hands-free audio playback of emergency actions in English and Hindi.
* 🚨 **Emergency SOS Bar:** Persistent, one-tap dialing for National Emergency (**112**), NALSA Free Legal Aid (**15100**), Women Helpline (**1091**), Anti-Corruption (**1064**), and NHRC (**14433**).
* 📝 **SP/DCP Complaint Generator (BNSS §173(3)):** Built-in modal generator producing formal, legally formatted complaint petitions with one-click clipboard copying.
* 🌐 **Bilingual Support (EN / HI):** Fully localized in English and हिन्दी with zero dependency overhead.
* 🏛️ **100% Primary Source Backed:** Grounded in the **Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023**, the **Constitution of India**, and landmark **Supreme Court of India** precedents with legacy CrPC cross-references.
* 🌓 **Adaptive Dark Mode & Mobile-First Layout:** Designed with fluid viewport height (`min-h-dvh`) and high-contrast styling for outdoor daytime readability.

---

## 🧭 Core Scenarios Covered

| Scenario                        | Statutory Basis                        | Key Protection                                                                              |
| :------------------------------ | :------------------------------------- | :------------------------------------------------------------------------------------------ |
| **👮 Traffic / Routine Stop**   | Rule 139 CMVR, IT Act §4, BNSS §35     | DigiLocker/mParivahan acceptance, no arbitrary key snatching or phone search                |
| **🔒 Arrest & Detention**       | BNSS §§47, 48, 53–58, Const. Art. 22   | Mandatory grounds disclosure, relative notification memo, 24-hour Magistrate rule           |
| **👩 Rights of Women**          | BNSS §43(5), §51, §179                 | Sunset-to-sunrise (6 PM–6 AM) arrest ban, female search only, home examination              |
| **📄 Refusal to Register FIR**  | BNSS §173(1)–(3), *Lalita Kumari*      | Mandatory FIR for cognizable crimes, Zero FIR, direct petition to SP/DCP                    |
| **🔎 Search & Seizure**         | BNSS §103, §§185–186                   | Search warrant verification, mandatory 2 independent local witnesses (*Panchas*), Panchnama |
| **💰 Bribery & Extortion**      | PC Act 1988 §7, §13, BNS §201          | Protection from extortion, evidence preservation, direct trap operation via ACB (**1064**)  |
| **⚠️ Assault & Abuse**          | Const. Art. 21, *Paramvir Singh Saini* | Mandatory hospital MLC, station 24x7 CCTV preservation directive                            |
| **⚖️ Universal Rights / Other** | Const. Art. 20(3), BNSS §179, JJ Act   | Right to silence, witness summons protections, strict ban on minor lockups                  |

---

## 📚 Legal & Statutory Backbone

All legal claims are derived from official Government of India gazettes and Supreme Court law reports.

### 1. Bharatiya Nagarik Suraksha Sanhita, 2023

**Act No. 46 of 2023**

* `Section 35`: When police may arrest without warrant.
* `Section 43(5)`: Restrictions on arrest of women after sunset and before sunrise.
* `Section 47`: Duty to inform arrested person of grounds of arrest and right to bail.
* `Section 48`: Duty to inform nominated friend/relative immediately.
* `Section 53 & 54`: Mandatory medical examination of arrested persons.
* `Section 103`: Search procedures before independent local witnesses (*Panchas*).
* `Section 173`: Mandatory FIR registration, free copies, and SP escalation.
* `Section 179`: Witness summons exemptions for women, minors (<15), and senior citizens (>60).

### 2. Constitution of India

* **Article 20(3):** Fundamental protection against self-incrimination (Right to Silence).
* **Article 21:** Protection of life, personal liberty, and human dignity against custodial violence.
* **Article 22(1) & 22(2):** Right to legal counsel and mandatory Magistrate production within 24 hours.
* **Article 39A:** Equal justice and free legal aid for persons in custody.

### 3. Landmark Supreme Court Rulings

* ***D.K. Basu v. State of West Bengal* (1997) 1 SCC 416** — Mandatory arrest memos and custodial guidelines.
* ***Lalita Kumari v. Govt. of U.P.* (2014) 2 SCC 1** — Mandatory FIR registration for cognizable offenses.
* ***Paramvir Singh Saini v. Baljit Singh* (2021) 1 SCC 836** — Mandatory 24x7 CCTV cameras with night vision and audio in all police stations.
* ***Sheela Barse v. State of Maharashtra* (1983) 2 SCC 96** — Separate female lockups and protection against custodial harassment.

### 4. Emergency Authorities & Statutory Portals

| Authority                                     | Emergency / Helpline | Website                              |
| :-------------------------------------------- | :------------------: | :----------------------------------- |
| **Emergency Response Support System (ERSS)**  |        **112**       | [112.gov.in](https://112.gov.in)     |
| **National Legal Services Authority (NALSA)** |       **15100**      | [nalsa.gov.in](https://nalsa.gov.in) |
| **National Human Rights Commission (NHRC)**   |       **14433**      | [nhrc.nic.in](https://nhrc.nic.in)   |
| **Anti-Corruption Bureau (ACB)**              |       **1064**       | —                                    |

---

## 🛠️ Tech Stack

* **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Audio:** Web Speech API (`window.speechSynthesis`)
* **State/i18n:** Custom zero-dependency React Context Provider

---

## 📂 Project Structure

```text
nyayamitra/
├── index.html                  # HTML entry with SEO & PWA metadata
├── src/
│   ├── components/
│   │   ├── ComplaintModal.tsx   # SP/DCP complaint generator modal
│   │   ├── DisclaimerModal.tsx  # Legal scope & terms of use modal
│   │   ├── EmergencyBar.tsx     # Sticky 112 & 15100 SOS hotline banner
│   │   ├── Footer.tsx           # Clean, high-contrast footer with backlinks
│   │   ├── Header.tsx           # Branding, theme toggle, and language switch
│   │   ├── LanguageSwitcher.tsx # EN / HI locale toggle
│   │   ├── ScenarioCard.tsx     # 30-sec panic box, TTS audio, and rights breakdown
│   │   ├── ScenarioList.tsx     # Filtered list renderer
│   │   ├── SearchAndFilter.tsx  # Search input & category chip filter
│   │   ├── SourcesModal.tsx     # Gazette & Supreme Court citations modal
│   │   └── ThemeToggle.tsx      # Dark / Light theme switch
│   ├── context/
│   │   ├── LanguageContext.tsx  # Localization state manager
│   │   └── ThemeContext.tsx     # Dark/Light mode manager
│   ├── hooks/
│   │   └── useSpeech.ts         # Web Speech API TTS custom hook
│   ├── locales/
│   │   ├── en.json              # English content & citations
│   │   └── hi.json              # Hindi content & citations
│   ├── types/
│   │   └── index.ts             # TypeScript definitions & data contracts
│   ├── App.tsx                  # Root component
│   └── main.tsx                 # Application entry point
├── tailwind.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js **v18.0.0 or higher**
* npm, pnpm, or yarn

### Installation & Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/ashutoshkrris/nyaya-mitra.git

# 2. Navigate to project directory
cd nyaya-mitra

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

The app will be available at:

```text
http://localhost:5173
```

### Production Build

```bash
npm run build
npm run preview
```

---

## ⚖️ Legal Disclaimer

NyayaMitra is an open-source civic awareness project and does **not** constitute formal attorney counsel or legal advice.

Laws and procedures may vary based on specific facts, states, and circumstances.

> **In any immediate physical danger, prioritize personal safety and call 112.**

---

## 👤 Author & Open Source

* **Author:** Ashutosh
* **Repository:** [github.com/ashutoshkrris/nyaya-mitra](https://github.com/ashutoshkrris/nyaya-mitra)
* **License:** Open-source under the **MIT License**
