import { Zap, Shield, MessageSquare, Layers } from "lucide-react";
import { aboutContent } from "@/data/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Shield,
  MessageSquare,
  Layers,
};

export function About() {
  return (
    <section id="about" className="section-padding relative noise-bg">
      {/* Large section number */}
      <div className="absolute top-20 right-8 md:right-20 pointer-events-none">
        <span className="text-[8rem] md:text-[12rem] font-heading text-foreground/5 leading-none">01</span>
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Text Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-foreground" />
              <span className="text-sm tracking-[0.3em] uppercase">
                {aboutContent.subtitle}
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading leading-none mb-8">
              {aboutContent.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {aboutContent.description}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {aboutContent.highlights.map((highlight, index) => {
              const Icon = iconMap[highlight.icon] || Zap;
              return (
                <div
                  key={highlight.title}
                  className="brutal-card p-6 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-4xl font-heading text-foreground/20">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-heading mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
