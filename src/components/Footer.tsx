import { Github, Send, ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/animations/blur-fade";

export function Footer() {
  const t = useTranslation();

  return (
    <footer className="relative border-t border-border/50 py-16 noise-overlay">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />

      <div className="container-custom relative">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Logo & Tagline */}
          <BlurFade delay={0.1} inView>
            <div>
              <a
                href="#"
                className="text-4xl font-heading block mb-4 text-foreground hover:text-primary transition-colors"
              >
                {t.siteConfig.name}
              </a>
              <p className="text-muted-foreground max-w-xs">
                {t.siteConfig.tagline}
              </p>
            </div>
          </BlurFade>

          {/* Social Links */}
          <BlurFade delay={0.2} inView>
            <div className="md:text-right">
              <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
                {t.contact.followUs}
              </span>
              <div className="flex items-center gap-3 md:justify-end">
                <motion.a
                  href={t.siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={t.siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Telegram"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Bottom Section */}
        <BlurFade delay={0.3} inView>
          <div className="mt-16 pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                {t.footer.copyright(new Date().getFullYear())}
              </p>
              <div className="flex items-center gap-6">
                <a
                  href={t.footer.offerAgreementUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                >
                  {t.footer.offerAgreement}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
                <p className="text-sm text-muted-foreground">
                  {t.footer.tagline}
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </footer>
  );
}
