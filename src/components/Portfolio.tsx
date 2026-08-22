import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const imageVariant = (
  src: string,
  size: "480" | "800" | "1200" | "placeholder",
  extension: "webp" | "avif" = "webp",
) => src.replace(/\.webp$/, `-${size}.${extension}`);

interface PortfolioImageProps {
  src: string;
  alt: string;
  eager?: boolean;
  sizes: string;
}

function PortfolioImage({ src, alt, eager = false, sizes }: PortfolioImageProps) {
  const [fallbackToBase, setFallbackToBase] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <>
      {!imageFailed && (
        <div
          aria-hidden="true"
          className="absolute -inset-2 scale-105 bg-cover bg-center blur-md"
          style={{ backgroundImage: `url(${imageVariant(src, "placeholder")})` }}
        />
      )}
      {imageFailed ? (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary p-8 text-center">
          <span className="max-w-md font-heading text-2xl uppercase text-foreground/45">
            {alt}
          </span>
        </div>
      ) : (
        <picture className="absolute inset-0">
          {!fallbackToBase && (
            <>
              <source
                type="image/avif"
                srcSet={`${imageVariant(src, "480", "avif")} 480w, ${imageVariant(src, "800", "avif")} 800w, ${imageVariant(src, "1200", "avif")} 1200w`}
                sizes={sizes}
              />
              <source
                type="image/webp"
                srcSet={`${imageVariant(src, "480")} 480w, ${imageVariant(src, "800")} 800w, ${src} 1200w`}
                sizes={sizes}
              />
            </>
          )}
          <img
            src={src}
            alt={alt}
            width={1200}
            height={675}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "low" : "auto"}
            decoding="async"
            className="h-full w-full object-cover"
            onError={() => {
              if (fallbackToBase) {
                setImageFailed(true);
              } else {
                setFallbackToBase(true);
              }
            }}
          />
        </picture>
      )}
    </>
  );
}

export function Portfolio() {
  const t = useTranslation();
  
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
              {t.portfolio.subtitle}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading leading-none">
            {t.portfolio.title}
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {t.portfolio.projects.map((project, index) => {
            const isFeatured = "featured" in project && project.featured === true;
            
            if (isFeatured) {
              return (
                <div
                  key={project.id || project.title}
                  className="brutal-card overflow-hidden group md:col-span-2"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image Area - Left Side */}
                    <div className="relative bg-secondary overflow-hidden md:w-1/2 h-72 md:h-auto md:min-h-[400px]">
                      {project.image ? (
                        <PortfolioImage
                          src={project.image}
                          alt={project.title}
                          eager={index < 2}
                          sizes="(min-width: 1280px) 640px, (min-width: 768px) 50vw, 100vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[8rem] font-heading text-foreground/10">
                            {String(project.id || index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content - Right Side */}
                    <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                      <Badge 
                        variant="outline" 
                        className="w-fit mb-4 border-foreground text-foreground text-xs"
                      >
                        {t.portfolio.featuredLabel}
                      </Badge>
                      <h3 className="text-2xl md:text-3xl font-heading mb-4 uppercase">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-base md:text-lg">
                        {project.description}
                      </p>
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
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
                      {project.liveUrl && (
                        <Button 
                          variant="outline" 
                          size="lg" 
                          asChild
                          className="w-fit border-foreground text-foreground hover:bg-foreground hover:text-background"
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
                      )}
                    </div>
                  </div>
                </div>
              );
            }
            
            return (
              <div
                key={project.id || project.title}
                className="brutal-card overflow-hidden group"
              >
                {/* Image Area */}
                <div className="relative h-56 bg-secondary overflow-hidden">
                  {project.image ? (
                    <PortfolioImage
                      src={project.image}
                      alt={project.title}
                      sizes="(min-width: 1280px) 616px, (min-width: 768px) 50vw, 100vw"
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
                          {t.portfolio.viewProject}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
