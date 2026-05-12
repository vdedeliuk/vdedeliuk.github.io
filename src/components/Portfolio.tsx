import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/animations/blur-fade";
import { StaggerFade, StaggerItem } from "@/components/animations/stagger-fade";
import { motion } from "framer-motion";

export function Portfolio() {
  const t = useTranslation();

  return (
    <section id="portfolio" className="section-padding relative noise-overlay overflow-hidden">
      {/* Background */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute top-0 right-0 w-1/2 h-full dot-pattern opacity-20" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-primary" />
              <span className="text-sm tracking-[0.3em] uppercase text-primary">
                {t.portfolio.subtitle}
              </span>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-none">
              Our{" "}
              <span className="text-gradient">{t.portfolio.title}</span>
            </h2>
          </BlurFade>
        </div>

        {/* Projects Grid */}
        <StaggerFade className="grid md:grid-cols-2 gap-6" delay={0.2} staggerDelay={0.1}>
          {t.portfolio.projects.map((project, index) => {
            const isFeatured = (project as any).featured;

            if (isFeatured) {
              return (
                <StaggerItem key={project.id || project.title} className="md:col-span-2">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="glass-card gradient-border overflow-hidden group"
                  >
                    <div className="flex flex-col lg:flex-row">
                      {/* Image Area */}
                      <div className="relative overflow-hidden lg:w-1/2 h-72 lg:h-auto lg:min-h-[400px]">
                        {project.image ? (
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                            }}
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-transparent">
                            <span className="text-[8rem] font-heading text-primary/20">
                              {String(project.id || index + 1).padStart(2, "0")}
                            </span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                      </div>

                      {/* Content */}
                      <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center">
                        <Badge className="w-fit mb-4 bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
                          {(t.portfolio as any).featuredLabel || "Featured"}
                        </Badge>
                        <h3 className="text-2xl md:text-3xl font-heading mb-4 text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        {project.technologies && project.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="border-border/50 bg-secondary/50 text-muted-foreground text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                        {project.liveUrl && (
                          <Button
                            className="w-fit bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider group/btn"
                            asChild
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {t.portfolio.viewProject}
                              <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            }

            return (
              <StaggerItem key={project.id || project.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="glass-card gradient-border overflow-hidden group h-full"
                >
                  {/* Image Area */}
                  <div className="relative h-56 overflow-hidden">
                    {project.image ? (
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-transparent">
                        <span className="text-[8rem] font-heading text-primary/20">
                          {String(project.id || index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />

                    {/* Hover Overlay */}
                    {project.liveUrl && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Button
                          variant="outline"
                          className="border-background text-background hover:bg-background hover:text-primary font-heading tracking-wider"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {t.portfolio.viewProject}
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-heading mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-border/50 bg-secondary/50 text-muted-foreground text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            className="border-border/50 bg-secondary/50 text-muted-foreground text-xs"
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}
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
