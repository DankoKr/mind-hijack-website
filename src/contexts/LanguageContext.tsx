import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "bg";

const translations = {
  en: {
    aiRedTeaming: "AI RED TEAMING",
    pentesting: "PENTESTING",
    services: "services",
    poc: "proof of concept",
    about: "about",
    contact: "contact",
    heroTitle1: "MIND",
    heroTitle2: "HIJACK",
    heroTagline: '"Because every AI has a',
    heroHighlight: "forbidden fruit",
    heroTaglineEnd: '"',
    heroSubtag: "The Serpent's Audit for LLMs",
    heroCta: "REQUEST AN AUDIT →",
    servicesLabel: "SERVICES",
    servicesTitle: "What We",
    servicesHighlight: "Exploit",
    pocLabel: "PROOF OF CONCEPT",
    pocTitle: "Our",
    pocHighlight: "Work",
    pocPlaceholder: "Replace with your PoC image",
    aboutLabel: "ABOUT",
    aboutTitle: "Why",
    aboutHighlight: "Mind Hijack",
    aboutText:
      "Every AI system has blind spots. We find them before someone else does. Our team of adversarial AI researchers simulates real-world attacks against your LLMs, chatbots, and AI-powered applications — uncovering vulnerabilities that traditional security testing misses. We think like the serpent, so you don't get bitten.",
    contactLabel: "INITIATE",
    contactTitle: "Ready to Test Your",
    contactHighlight: "Defenses",
    contactDesc: "Let the serpent audit your AI. Get in touch for a confidential assessment.",
    contactCta: "CONTACT US →",
    copyright: "© 2026 Mind Hijack. All rights reserved.",
    svcLlm: "LLM Red Teaming",
    svcLlmDesc: "Adversarial testing to expose prompt injection, jailbreaks, and reasoning manipulation in your AI models.",
    svcVuln: "Vulnerability Discovery",
    svcVulnDesc: "Systematic probing of your AI stack to find exploitable weaknesses before attackers do.",
    svcAudit: "Security Audits",
    svcAuditDesc: "Comprehensive evaluation of AI system guardrails, data handling, and output safety.",
    svcPentest: "Penetration Testing",
    svcPentestDesc: "Real-world attack simulations against your AI-powered applications and APIs.",
    svcPrompt: "Prompt Hardening",
    svcPromptDesc: "Fortify your system prompts and input sanitization against sophisticated manipulation.",
    svcCompliance: "Compliance Review",
    svcComplianceDesc: "Ensure your AI deployments meet emerging regulatory frameworks and safety standards.",
    pocJailbreak: "LLM Jailbreak Demo",
    pocInjection: "Prompt Injection PoC",
    pocExfil: "Data Exfiltration Test",
    pocBypass: "Guardrail Bypass",
  },
  bg: {
    aiRedTeaming: "AI РЕД ТИЙМИНГ",
    pentesting: "ПЕНТЕСТИНГ",
    services: "услуги",
    poc: "доказателство",
    about: "за нас",
    contact: "контакт",
    heroTitle1: "MIND",
    heroTitle2: "HIJACK",
    heroTagline: '"Защото всеки AI има',
    heroHighlight: "забранен плод",
    heroTaglineEnd: '"',
    heroSubtag: "Одитът на Змията за LLM модели",
    heroCta: "ЗАЯВЕТЕ ОДИТ →",
    servicesLabel: "УСЛУГИ",
    servicesTitle: "Какво",
    servicesHighlight: "Експлоатираме",
    pocLabel: "ДОКАЗАТЕЛСТВО",
    pocTitle: "Нашата",
    pocHighlight: "Работа",
    pocPlaceholder: "Заменете с вашето PoC изображение",
    aboutLabel: "ЗА НАС",
    aboutTitle: "Защо",
    aboutHighlight: "Mind Hijack",
    aboutText:
      "Всяка AI система има слепи петна. Ние ги намираме преди някой друг. Нашият екип от адверсариални AI изследователи симулира реални атаки срещу вашите LLM модели, чатботове и AI приложения — разкривайки уязвимости, които традиционното тестване пропуска. Мислим като змията, за да не бъдете ухапани.",
    contactLabel: "ИНИЦИИРАЙТЕ",
    contactTitle: "Готови ли сте да тествате",
    contactHighlight: "Защитите си",
    contactDesc: "Нека змията одитира вашия AI. Свържете се за конфиденциална оценка.",
    contactCta: "СВЪРЖЕТЕ СЕ →",
    copyright: "© 2026 Mind Hijack. Всички права запазени.",
    svcLlm: "LLM Ред Тийминг",
    svcLlmDesc: "Адверсариално тестване за разкриване на prompt injection, jailbreaks и манипулация на разсъжденията на вашите AI модели.",
    svcVuln: "Откриване на Уязвимости",
    svcVulnDesc: "Систематично изследване на вашия AI стек за намиране на експлоатируеми слабости преди атакуващите.",
    svcAudit: "Одити на Сигурността",
    svcAuditDesc: "Цялостна оценка на предпазните механизми, обработката на данни и безопасността на изхода на AI системите.",
    svcPentest: "Пенетрационно Тестване",
    svcPentestDesc: "Симулации на реални атаки срещу вашите AI приложения и API-та.",
    svcPrompt: "Укрепване на Промптове",
    svcPromptDesc: "Укрепете вашите системни промптове и санитизация на входа срещу сложни манипулации.",
    svcCompliance: "Преглед за Съответствие",
    svcComplianceDesc: "Осигурете вашите AI внедрявания да отговарят на новите регулаторни рамки и стандарти за безопасност.",
    pocJailbreak: "LLM Jailbreak Демо",
    pocInjection: "Prompt Injection PoC",
    pocExfil: "Тест за Ексфилтрация",
    pocBypass: "Заобикаляне на Guardrails",
  },
} as const;

type Translations = Record<keyof typeof translations.en, string>;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
