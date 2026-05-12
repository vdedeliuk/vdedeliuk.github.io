import { Bot, CreditCard, Plug, BarChart3, Database, Wrench } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/animations/blur-fade";
import { StaggerFade, StaggerItem } from "@/components/animations/stagger-fade";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot,
  CreditCard,
  Plug,
  BarChart3,
  Database,
  Wrench,
};

export function Services() {
  const t = useTranslation();

  return (
    <section id="services" className="section-padding relative noise-overlay overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[128px]" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BlurFade delay={0.1} inView>
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-primary" />
              <span className="text-sm tracking-[0.3em] uppercase text-primary">
                {t.services.subtitle}
              </span>
              <span className="w-12 h-px bg-primary" />
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-none">
              Our{" "}
              <span className="text-gradient">{t.services.title}</span>
            </h2>
          </BlurFade>
        </div>

        {/* Services Grid */}
        <StaggerFade
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          delay={0.2}
          staggerDelay={0.1}
        >
          {t.services.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Bot;
            return (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="glass-card gradient-border p-8 h-full group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-5xl font-heading text-muted/20 group-hover:text-primary/20 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-border/50 bg-secondary/50 text-muted-foreground text-xs hover:border-primary/50 hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerFade>
      </div>
    </section>
  );
}
