import { Github, Linkedin, Send } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export function Footer() {
  const t = useTranslation();
  
  return (
    <footer className="border-t-2 border-foreground py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Logo & Tagline */}
          <div>
            <a
              href="#"
              className="text-4xl font-heading block mb-4"
            >
              {t.siteConfig.name}
            </a>
            <p className="text-muted-foreground">
              {t.siteConfig.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div>
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">{t.contact.followUs}</span>
            <div className="flex items-center gap-4">
              <a
                href={t.siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={t.siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <p className="text-sm text-muted-foreground">
              {t.footer.copyright(new Date().getFullYear())}
            </p>
            <p className="text-sm text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <a
              href={t.footer.offerAgreementUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              {t.footer.offerAgreement}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
