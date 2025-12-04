import { Bot, CreditCard, Plug, BarChart3, Database, Wrench } from "lucide-react";
import { servicesContent } from "@/data/content";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot,
  CreditCard,
  Plug,
  BarChart3,
  Database,
  Wrench,
};

export function Services() {
  return (
    <section id="services" className="section-padding relative bg-foreground text-background noise-bg">
      {/* Large section number */}
      <div className="absolute top-20 left-8 md:left-20">
        <span className="text-[8rem] md:text-[12rem] font-heading text-background/5 leading-none">02</span>
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-background" />
            <span className="text-sm tracking-[0.3em] uppercase text-background/60">
              {servicesContent.subtitle}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading leading-none">
            {servicesContent.title}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-background/20">
          {servicesContent.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Bot;
            return (
              <div
                key={service.title}
                className="bg-foreground p-8 md:p-10 group hover:bg-background hover:text-foreground transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 border-2 border-background group-hover:border-foreground flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-5xl font-heading text-background/20 group-hover:text-foreground/20 transition-colors">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-heading mb-4">
                  {service.title}
                </h3>
                <p className="text-background/60 group-hover:text-foreground/60 mb-6 leading-relaxed transition-colors">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-background/30 text-background/80 group-hover:border-foreground/30 group-hover:text-foreground/80 text-xs transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
