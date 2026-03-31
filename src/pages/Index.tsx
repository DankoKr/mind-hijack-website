import { useState } from "react";
import {
  Shield,
  Bug,
  Brain,
  Crosshair,
  Terminal,
  Lock,
  Menu,
  X,
} from "lucide-react";
import logo from "@/assets/logo-transparent.png";
import MatrixRain from "@/components/MatrixRain";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import jailbreakImg from "@/assets/pocs/jailbreak.png";
import injectionImg from "@/assets/pocs/injection.jpg";
import dataExfilImg from "@/assets/pocs/dataExfiltration.png";
import promptLeakImg from "@/assets/pocs/promptLeak.png";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();
  const [fullscreenSrc, setFullscreenSrc] = useState<string | null>(null);

  const services = [
    { icon: Brain, title: t.svcLlm, desc: t.svcLlmDesc },
    { icon: Bug, title: t.svcVuln, desc: t.svcVulnDesc },
    { icon: Shield, title: t.svcAudit, desc: t.svcAuditDesc },
    { icon: Crosshair, title: t.svcPentest, desc: t.svcPentestDesc },
    { icon: Terminal, title: t.svcPrompt, desc: t.svcPromptDesc },
    { icon: Lock, title: t.svcCompliance, desc: t.svcComplianceDesc },
  ];

  const pocItems = [
    { title: t.pocJailbreak, src: jailbreakImg },
    { title: t.pocInjection, src: injectionImg },
    { title: t.pocExfil, src: dataExfilImg },
    { title: t.pocBypass, src: promptLeakImg },
  ];

  const navLinks = [
    { href: "#services", label: t.services },
    { href: "#poc", label: t.poc },
    { href: "#about", label: t.about },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <MatrixRain />

      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-lg border-b border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 sm:gap-3 group">
            <img
              src={logo}
              alt="Mind Hijack"
              className="h-10 w-10 sm:h-12 sm:w-12"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-sm sm:text-base tracking-widest text-foreground">
                MIND <span className="text-primary">HIJACK</span>
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] text-muted-foreground tracking-wider">
                {t.aiRedTeaming}
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs text-muted-foreground uppercase tracking-wider">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-primary transition-colors py-1 border-b border-transparent hover:border-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 bg-primary text-primary-foreground rounded text-xs tracking-wider hover:brightness-110 transition-all"
            >
              {t.contact}
            </a>
            <LanguageToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-foreground p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-primary/10 px-6 py-4 space-y-1 font-mono text-sm uppercase tracking-wider">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block text-muted-foreground hover:text-primary transition-colors py-3 border-b border-border/30"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center mt-3 px-4 py-3 bg-primary text-primary-foreground rounded text-xs tracking-wider"
            >
              {t.contact}
            </a>
          </div>
        )}
      </nav>

      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tight mb-4 sm:mb-6 text-foreground">
            MIND <span className="text-primary text-glow-red">HIJACK</span>
          </h1>

          <p className="font-mono text-sm sm:text-base md:text-lg text-muted-foreground mb-3 tracking-wide">
            {t.aiRedTeaming} <span className="text-primary">|</span>{" "}
            {t.pentesting}
          </p>

          <div className="my-6 sm:my-10 space-y-3">
            <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground italic px-2">
              {t.heroTagline}{" "}
              <span className="text-primary text-glow-red">
                {t.heroHighlight}
              </span>
              {t.heroTaglineEnd}
            </p>
            <p className="font-mono text-xs sm:text-sm md:text-base text-primary text-glow-red tracking-widest uppercase">
              {t.heroSubtag}
            </p>
          </div>

          <a
            href="#contact"
            className="inline-block mt-4 sm:mt-6 px-6 sm:px-8 py-3 bg-primary text-primary-foreground font-mono text-xs sm:text-sm tracking-wider rounded glow-red hover:brightness-110 transition-all"
          >
            {t.heroCta}
          </a>
        </div>
      </section>

      <section
        id="services"
        className="relative z-10 py-16 sm:py-24 px-4 sm:px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-16">
            <p className="font-mono text-xs sm:text-sm text-primary text-glow-red tracking-widest mb-2">
              {t.servicesLabel}
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground">
              {t.servicesTitle}{" "}
              <span className="text-primary">{t.servicesHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="circuit-border rounded-lg p-5 sm:p-6 bg-card/60 backdrop-blur-sm hover:bg-card transition-all group"
              >
                <s.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4 group-hover:drop-shadow-lg transition-all" />
                <h3 className="font-display font-bold text-base sm:text-lg text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="poc" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-16">
            <p className="font-mono text-xs sm:text-sm text-primary text-glow-red tracking-widest mb-2">
              {t.pocLabel}
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground">
              {t.pocTitle}{" "}
              <span className="text-primary">{t.pocHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {pocItems.map((item) => (
              <div
                key={item.title}
                className="circuit-border rounded-lg overflow-hidden bg-card/60 backdrop-blur-sm group hover:bg-card transition-all cursor-pointer"
                onClick={() => setFullscreenSrc(item.src)}
              >
                <div className="aspect-video flex items-center justify-center bg-secondary/30 overflow-hidden relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs text-white tracking-widest uppercase bg-black/60 px-3 py-1 rounded">
                      {t.viewFullscreen}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-display font-bold text-sm sm:text-base text-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs sm:text-sm text-primary text-glow-red tracking-widest mb-2">
            {t.aboutLabel}
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-6 sm:mb-8">
            {t.aboutTitle}{" "}
            <span className="text-primary">{t.aboutHighlight}</span>?
          </h2>
          <div className="circuit-border rounded-lg p-6 sm:p-8 md:p-12 bg-card/40 backdrop-blur-sm">
            <p className="font-mono text-muted-foreground leading-loose text-xs sm:text-sm md:text-base">
              {t.aboutText}
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 py-16 sm:py-24 px-4 sm:px-6"
      >
        <div className="container mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs sm:text-sm text-primary text-glow-red tracking-widest mb-2">
            {t.contactLabel}
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
            {t.contactTitle}{" "}
            <span className="text-primary">{t.contactHighlight}</span>?
          </h2>
          <p className="font-mono text-xs sm:text-sm text-muted-foreground mb-8 sm:mb-10">
            {t.contactDesc}
          </p>

          <a
            href="mailto:hello@mindhijack.com"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-primary text-primary-foreground font-mono text-xs sm:text-sm tracking-wider rounded glow-red hover:brightness-110 transition-all"
          >
            {t.contactCta}
          </a>
        </div>
      </section>

      {fullscreenSrc && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setFullscreenSrc(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Close"
            onClick={() => setFullscreenSrc(null)}
          >
            <X className="w-7 h-7" />
          </button>
          <img
            src={fullscreenSrc}
            alt="POC fullscreen"
            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <footer className="relative z-10 border-t border-border py-6 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <span className="font-mono text-[10px] sm:text-xs text-muted-foreground">
            {t.copyright}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
