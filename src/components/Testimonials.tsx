import { Quote, Star } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { BlurFade } from "@/components/animations/blur-fade";
import { StaggerFade, StaggerItem } from "@/components/animations/stagger-fade";
import { motion } from "framer-motion";

export function Testimonials() {
  const t = useTranslation();

  return (
    <section id="testimonials" className="section-padding relative noise-overlay overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px] -translate-y-1/2" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BlurFade delay={0.1} inView>
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-primary" />
              <span className="text-sm tracking-[0.3em] uppercase text-primary">
                {t.testimonials.subtitle}
              </span>
              <span className="w-12 h-px bg-primary" />
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-none">
              Client{" "}
              <span className="text-gradient">{t.testimonials.title}</span>
            </h2>
          </BlurFade>
        </div>

        {/* Testimonials Grid */}
        <StaggerFade
          className="grid md:grid-cols-3 gap-6"
          delay={0.2}
          staggerDelay={0.1}
        >
          {t.testimonials.testimonials.map((testimonial, index) => (
            <StaggerItem key={testimonial.author}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="glass-card gradient-border p-8 h-full group relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-muted-foreground leading-relaxed mb-8 relative z-10">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  {testimonial.avatar ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span class="text-xl font-heading flex items-center justify-center w-full h-full bg-primary/10 text-primary">${testimonial.author.charAt(0)}</span>`;
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full border-2 border-primary/30 bg-primary/10 flex items-center justify-center group-hover:border-primary transition-colors">
                      <span className="text-xl font-heading text-primary">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <div className="font-heading text-lg text-foreground group-hover:text-primary transition-colors">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Number */}
                <div className="absolute bottom-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                  <span className="text-6xl font-heading text-primary">
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerFade>
      </div>
    </section>
  );
}
