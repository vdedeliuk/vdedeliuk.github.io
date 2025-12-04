import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroContent, siteConfig } from "@/data/content";
import PlanetScene from "@/components/PlanetScene";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* 3D Planet Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <PlanetScene />
      </div>

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

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-0 mb-8 opacity-0 animate-fade-up">
            <span className="w-12 h-px bg-foreground" />
            <span className="text-sm tracking-[0.3em] uppercase">
              {heroContent.subheadline}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-heading leading-[0.85] mb-8 opacity-0 animate-fade-up stagger-1">
            {heroContent.headline.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="outline-text">
              {heroContent.headline.split(" ").slice(2).join(" ")}
            </span>
          </h1>

          {/* Description */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div />
            <p className="text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-up stagger-2">
              {heroContent.description}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-fade-up stagger-3">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact" className="group">
                {heroContent.ctaText}
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#portfolio">{heroContent.ctaSecondary}</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 md:gap-20 mt-24 pt-12 border-t border-foreground/20 opacity-0 animate-fade-up stagger-4">
            <div>
              <div className="text-5xl md:text-6xl font-heading">50+</div>
              <div className="text-sm text-muted-foreground mt-2 tracking-wider uppercase">Bots Delivered</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-heading">5+</div>
              <div className="text-sm text-muted-foreground mt-2 tracking-wider uppercase">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-heading">100%</div>
              <div className="text-sm text-muted-foreground mt-2 tracking-wider uppercase">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-5">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
            <ChevronDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
