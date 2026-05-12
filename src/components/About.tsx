import { Zap, Shield, MessageSquare, Layers } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { BlurFade } from "@/components/animations/blur-fade";
import { StaggerFade, StaggerItem } from "@/components/animations/stagger-fade";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Shield,
  MessageSquare,
  Layers,
};

export function About() {
  const t = useTranslation();

  return (
    <section id="about" className="section-padding relative noise-overlay overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full dot-pattern opacity-30" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div>
            <BlurFade delay={0.1} inView>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-primary" />
                <span className="text-sm tracking-[0.3em] uppercase text-primary">
                  {t.about.subtitle}
                </span>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-none mb-8">
                {t.about.title.split(" ").map((word, i) => (
                  <span key={i}>
                    {i === 1 ? (
                      <span className="text-gradient">{word}</span>
                    ) : (
                      word
                    )}{" "}
                  </span>
                ))}
              </h2>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.description}
              </p>
            </BlurFade>
          </div>

          {/* Highlights Grid */}
          <StaggerFade className="grid sm:grid-cols-2 gap-4" delay={0.2} staggerDelay={0.1}>
            {t.about.highlights.map((highlight, index) => {
              const Icon = iconMap[highlight.icon] || Zap;
              return (
                <StaggerItem key={highlight.title}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="glass-card gradient-border p-6 group h-full"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-4xl font-heading text-muted/30">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading mb-2 text-foreground group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerFade>
        </div>
      </div>
    </section>
  );
}
