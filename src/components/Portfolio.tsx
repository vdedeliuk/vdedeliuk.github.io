import { ExternalLink } from "lucide-react";
import { portfolioContent } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding relative noise-bg">
      {/* Large section number */}
      <div className="absolute top-20 right-8 md:right-20 pointer-events-none">
        <span className="text-[8rem] md:text-[12rem] font-heading text-foreground/5 leading-none">03</span>
      </div>

      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-foreground" />
            <span className="text-sm tracking-[0.3em] uppercase">
              {portfolioContent.subtitle}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading leading-none">
            {portfolioContent.title}
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioContent.projects.map((project, index) => (
            <div
              key={project.id || project.title}
              className="brutal-card overflow-hidden group"
            >
              {/* Image Area */}
              <div className="relative h-56 bg-secondary overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[8rem] font-heading text-foreground/10">
                      {String(project.id || index + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {project.liveUrl && (
                    <Button 
                      variant="outline" 
                      size="lg" 
                      asChild
                      className="border-background text-background hover:bg-background hover:text-foreground"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-heading mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-foreground/30 text-foreground/80 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
