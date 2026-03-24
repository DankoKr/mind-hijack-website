import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 font-mono text-xs tracking-wider">
      <button
        onClick={() => setLang("en")}
        className={`px-2 py-1 rounded transition-colors ${
          lang === "en"
            ? "text-primary bg-primary/10"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <span className="text-muted-foreground/40">|</span>
      <button
        onClick={() => setLang("bg")}
        className={`px-2 py-1 rounded transition-colors ${
          lang === "bg"
            ? "text-primary bg-primary/10"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        BG
      </button>
    </div>
  );
};

export default LanguageToggle;
