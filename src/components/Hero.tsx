import { lazy, Suspense, useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const PlanetScene = lazy(() => import("@/components/PlanetScene"));

function HeroVisual() {
  const [showEnhancedVisual, setShowEnhancedVisual] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateVisual = () => setShowEnhancedVisual(desktop.matches && !reducedMotion.matches);

    updateVisual();
    desktop.addEventListener("change", updateVisual);
    reducedMotion.addEventListener("change", updateVisual);

    return () => {
      desktop.removeEventListener("change", updateVisual);
      reducedMotion.removeEventListener("change", updateVisual);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 opacity-25 sm:opacity-40 pointer-events-none scale-[0.82] translate-y-[12%] sm:scale-100 sm:translate-y-0 origin-center" aria-hidden="true">
      {showEnhancedVisual ? (
        <Suspense fallback={<div className="hero-static-planet" />}>
          <PlanetScene />
        </Suspense>
      ) : (
        <div className="hero-static-planet" />
      )}
    </div>
  );
}

export function Hero() {
  const t = useTranslation();
  const headlineWords = t.hero.headline.split(" ");

  return (
    <section className="relative min-h-[100svh] flex items-start sm:items-center justify-center overflow-hidden noise-bg">
      {/* 3D Planet Background */}
      <HeroVisual />

      {/* Geometric lines */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute top-0 left-1/4 w-px h-full bg-foreground/10" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-foreground/10" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-foreground/10" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-foreground/10" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-foreground/10" />
      </div>

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-heading text-foreground/[0.02] whitespace-nowrap">
          TELEGRAM BOTS
        </span>
      </div>

      <div className="container-custom relative z-10 w-full max-w-full pt-28 pb-16 sm:pt-24 sm:pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex max-w-full items-start sm:items-center gap-3 px-0 mb-7 sm:mb-8 opacity-0 animate-fade-up">
            <span className="w-10 sm:w-12 h-px bg-foreground shrink-0 mt-2 sm:mt-0" />
            <span className="min-w-0 text-xs sm:text-sm leading-relaxed tracking-[0.24em] sm:tracking-[0.3em] uppercase">
              {t.hero.subheadline}
            </span>
          </div>

          {/* Headline */}
          <h1 className="w-full max-w-full text-[clamp(3.25rem,14vw,5rem)] md:text-8xl lg:text-[10rem] font-heading leading-[0.88] md:leading-[0.85] mb-8 opacity-0 animate-fade-up stagger-1 [text-wrap:balance]">
            <span className="block max-w-full">
              {headlineWords.slice(0, Math.ceil(headlineWords.length / 2)).join(" ")}
            </span>
            <span className="outline-text block max-w-full">
              {headlineWords.slice(Math.ceil(headlineWords.length / 2)).join(" ")}
            </span>
          </h1>

          {/* Description */}
          <div className="grid md:grid-cols-2 gap-8 mb-10 sm:mb-12">
            <div className="hidden md:block" />
            <p className="max-w-xl text-base sm:text-lg text-foreground/75 md:text-muted-foreground leading-relaxed bg-background/45 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-none p-4 -mx-4 md:p-0 md:mx-0 opacity-0 animate-fade-up stagger-2">
              {t.hero.description}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 opacity-0 animate-fade-up stagger-3">
            <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#contact" className="group justify-between sm:justify-center">
                {t.hero.ctaText}
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#portfolio">{t.hero.ctaSecondary}</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-12 md:gap-20 mt-14 sm:mt-20 lg:mt-24 pt-8 sm:pt-10 lg:pt-12 border-t border-foreground/20 opacity-0 animate-fade-up stagger-4">
            <a
              href="https://freelancehunt.com/en/freelancer/bot_kun.html#portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              aria-label="Verify Vaysed portfolio on Freelancehunt"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-heading">
                13<span className="font-body text-[0.65em] align-top">+</span>
              </div>
              <div className="text-[10px] sm:text-sm leading-tight text-muted-foreground group-hover:text-foreground mt-2 tracking-wider uppercase transition-colors">{t.stats.botsDelivered} ↗</div>
            </a>
            <a
              href="https://freelancehunt.com/en/freelancer/bot_kun.html#reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              aria-label="Verify Vaysed client reviews on Freelancehunt"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-heading">5</div>
              <div className="text-[10px] sm:text-sm leading-tight text-muted-foreground group-hover:text-foreground mt-2 tracking-wider uppercase transition-colors">{t.stats.yearsExperience} ↗</div>
            </a>
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-heading">3</div>
              <div className="text-[10px] sm:text-sm leading-tight text-muted-foreground mt-2 tracking-wider uppercase">{t.stats.satisfaction}</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-5">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs uppercase tracking-[0.3em]">{t.stats.scroll}</span>
            <ChevronDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
