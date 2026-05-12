import { ArrowRight, ChevronDown, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { BlurFade } from "@/components/animations/blur-fade";
import { TextReveal } from "@/components/animations/text-reveal";
import { Particles } from "@/components/animations/particles";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { motion } from "framer-motion";

export function Hero() {
  const t = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Animated Particles Background */}
      <Particles
        className="z-0 opacity-70"
        quantity={80}
        staticity={50}
        ease={50}
        color="#00DC82"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 z-[1]" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <BlurFade delay={0.1} inView>
            <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 glass-card gradient-border">
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-sm tracking-widest uppercase text-muted-foreground">
                {t.hero.subheadline}
              </span>
            </div>
          </BlurFade>

          {/* Headline */}
          <BlurFade delay={0.2} inView>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading leading-[0.9] mb-8">
              <TextReveal
                text={t.hero.headline.split(" ").slice(0, 2).join(" ")}
                className="justify-center"
              />
              <br />
              <span className="text-gradient glow-text">
                <TextReveal
                  text={t.hero.headline.split(" ").slice(2).join(" ")}
                  className="justify-center"
                  delay={0.2}
                />
              </span>
            </h1>
          </BlurFade>

          {/* Description */}
          <BlurFade delay={0.4} inView>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
              {t.hero.description}
            </p>
          </BlurFade>

          {/* CTAs */}
          <BlurFade delay={0.5} inView>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base font-heading tracking-wider glow group"
                  asChild
                >
                  <a href="#contact">
                    {t.hero.ctaText}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border/50 bg-transparent hover:bg-secondary/50 h-14 px-8 text-base font-heading tracking-wider"
                  asChild
                >
                  <a href="#portfolio">{t.hero.ctaSecondary}</a>
                </Button>
              </MagneticButton>
            </div>
          </BlurFade>

          {/* Stats */}
          <BlurFade delay={0.6} inView>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-24 pt-12 border-t border-border/30">
              {[
                { value: "50+", label: t.stats.botsDelivered },
                { value: "5+", label: t.stats.yearsExperience },
                { value: "100%", label: t.stats.satisfaction },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-heading text-gradient glow-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </BlurFade>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-[0.3em]">{t.stats.scroll}</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
