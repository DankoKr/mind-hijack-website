import { useState } from "react";
import { Shield, Bug, Brain, Crosshair, Terminal, Lock, ImageIcon, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import MatrixRain from "@/components/MatrixRain";

const services = [
  {
    icon: Brain,
    title: "LLM Red Teaming",
    desc: "Adversarial testing to expose prompt injection, jailbreaks, and reasoning manipulation in your AI models.",
  },
  {
    icon: Bug,
    title: "Vulnerability Discovery",
    desc: "Systematic probing of your AI stack to find exploitable weaknesses before attackers do.",
  },
  {
    icon: Shield,
    title: "Security Audits",
    desc: "Comprehensive evaluation of AI system guardrails, data handling, and output safety.",
  },
  {
    icon: Crosshair,
    title: "Penetration Testing",
    desc: "Real-world attack simulations against your AI-powered applications and APIs.",
  },
  {
    icon: Terminal,
    title: "Prompt Hardening",
    desc: "Fortify your system prompts and input sanitization against sophisticated manipulation.",
  },
  {
    icon: Lock,
    title: "Compliance Review",
    desc: "Ensure your AI deployments meet emerging regulatory frameworks and safety standards.",
  },
];

const pocItems = [
  { title: "LLM Jailbreak Demo", placeholder: true },
  { title: "Prompt Injection PoC", placeholder: true },
  { title: "Data Exfiltration Test", placeholder: true },
  { title: "Guardrail Bypass", placeholder: true },
];

const navLinks = [
  { href: "#services", label: "services" },
  { href: "#poc", label: "proof of concept" },
  { href: "#about", label: "about" },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <MatrixRain />
      
      <div className="scan-line" />

      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-lg border-b border-primary/10">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img src={logo} alt="Mind Hijack" className="h-9 w-9 transition-transform group-hover:scale-110" />
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-base tracking-widest text-foreground">
                MIND <span className="text-primary">HIJACK</span>
              </span>
              <span className="font-mono text-[10px] text-muted-foreground tracking-wider">AI RED TEAMING</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8 font-mono text-xs text-muted-foreground uppercase tracking-wider">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-primary transition-colors py-1 border-b border-transparent hover:border-primary">{l.label}</a>
            ))}
            <a href="#contact" className="px-4 py-2 bg-primary text-primary-foreground rounded text-xs tracking-wider hover:brightness-110 transition-all">contact</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground p-1" aria-label="Toggle menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-primary/10 px-6 py-4 space-y-3 font-mono text-sm uppercase tracking-wider">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block text-muted-foreground hover:text-primary transition-colors py-2">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-center mt-2 px-4 py-2 bg-primary text-primary-foreground rounded text-xs tracking-wider">contact</a>
          </div>
        )}
      </nav>

      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6 text-foreground">
            MIND <span className="text-primary text-glow-red">HIJACK</span>
          </h1>

          <p className="font-mono text-base md:text-lg text-muted-foreground mb-3 tracking-wide">
            AI RED TEAMING <span className="text-primary">|</span> PENTESTING
          </p>

          <div className="my-10 space-y-3">
            <p className="font-display text-xl md:text-2xl lg:text-3xl text-foreground italic">
              "Because every AI has a <span className="text-primary text-glow-red">forbidden fruit</span>"
            </p>
            <p className="font-mono text-sm md:text-base text-primary text-glow-red tracking-widest uppercase">
              The Serpent's Audit for LLMs
            </p>
          </div>

          <a
            href="#contact"
            className="inline-block mt-6 px-8 py-3 bg-primary text-primary-foreground font-mono text-sm tracking-wider rounded glow-red hover:brightness-110 transition-all"
          >
            REQUEST AN AUDIT →
          </a>
        </div>
      </section>

      <section id="services" className="relative z-10 py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="font-mono text-sm text-primary text-glow-red tracking-widest mb-2">SERVICES</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              What We <span className="text-primary">Exploit</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="circuit-border rounded-lg p-6 bg-card/60 backdrop-blur-sm hover:bg-card transition-all group"
              >
                <s.icon className="w-8 h-8 text-primary mb-4 group-hover:drop-shadow-lg transition-all" />
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="poc" className="relative z-10 py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="font-mono text-sm text-primary text-glow-red tracking-widest mb-2">PROOF OF CONCEPT</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Our <span className="text-primary">Work</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pocItems.map((item) => (
              <div
                key={item.title}
                className="circuit-border rounded-lg overflow-hidden bg-card/60 backdrop-blur-sm group hover:bg-card transition-all"
              >
                <div className="aspect-video flex items-center justify-center bg-secondary/30">
                  <ImageIcon className="w-12 h-12 text-muted-foreground/40" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-foreground">{item.title}</h3>
                  <p className="font-mono text-xs text-muted-foreground mt-1">Replace with your PoC image</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm text-primary text-glow-red tracking-widest mb-2">ABOUT</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-8">
            Why <span className="text-primary">Mind Hijack</span>?
          </h2>
          <div className="circuit-border rounded-lg p-8 md:p-12 bg-card/40 backdrop-blur-sm">
            <p className="font-mono text-muted-foreground leading-loose text-sm md:text-base">
              Every AI system has blind spots. We find them before someone else does. Our team of adversarial AI researchers simulates real-world attacks against your LLMs, chatbots, and AI-powered applications — uncovering vulnerabilities that traditional security testing misses. We think like the serpent, so you don't get bitten.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 py-24 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-primary text-glow-red tracking-widest mb-2">INITIATE</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Ready to Test Your <span className="text-primary">Defenses</span>?
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-10">
            Let the serpent audit your AI. Get in touch for a confidential assessment.
          </p>

          <a
            href="mailto:hello@mindhijack.com"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-mono text-sm tracking-wider rounded glow-red hover:brightness-110 transition-all"
          >
            CONTACT US →
          </a>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border py-6 px-6">
        <div className="container mx-auto text-center">
          <span className="font-mono text-xs text-muted-foreground">
            © 2026 Mind Hijack. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
