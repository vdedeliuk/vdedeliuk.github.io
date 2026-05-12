import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { BlurFade } from "@/components/animations/blur-fade";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { motion } from "framer-motion";

export function Contact() {
  const { toast } = useToast();
  const t = useTranslation();
  const { language } = useLanguage();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_lrzhwyc";
    const templateID = "template_elga7zo";
    const publicKey = "7RFTyWwUrI_NWhWyK";

    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      from_name: formData.user_name,
      reply_to: formData.user_email,
      name: formData.user_name,
      email: formData.user_email,
      message: formData.message,
    };

    try {
      const result = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log("SUCCESS!", result.status, result.text);

      toast({
        title: language === "uk" ? "Повідомлення надіслано!" : "Message sent!",
        description: language === "uk" ? "Ми зв'яжемося з вами якнайшвидше." : "We'll get back to you as soon as possible.",
      });

      setFormData({ user_name: "", user_email: "", message: "" });
    } catch (error) {
      console.error("FAILED...", error);
      toast({
        title: language === "uk" ? "Помилка" : "Error",
        description: language === "uk" ? "Не вдалося надіслати повідомлення." : "Failed to send message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding relative noise-overlay overflow-hidden">
      {/* Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-0 w-1/2 h-full dot-pattern opacity-20" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <div>
            <BlurFade delay={0.1} inView>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-primary" />
                <span className="text-sm tracking-[0.3em] uppercase text-primary">
                  {t.contact.subtitle}
                </span>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-none mb-8">
                Let&apos;s{" "}
                <span className="text-gradient">{t.contact.title}</span>
              </h2>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground mb-12">
                {t.contact.description}
              </p>
            </BlurFade>

            {/* Contact Info */}
            <BlurFade delay={0.4} inView>
              <div className="space-y-6">
                <motion.a
                  href={`mailto:${t.siteConfig.email}`}
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">
                      {t.contact.email}
                    </div>
                    <div className="font-heading text-xl text-foreground group-hover:text-primary transition-colors">
                      {t.siteConfig.email}
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href={t.siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <MessageCircle className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">
                      {t.contact.telegram}
                    </div>
                    <div className="font-heading text-xl text-foreground group-hover:text-primary transition-colors">
                      @kun3741
                    </div>
                  </div>
                </motion.a>
              </div>
            </BlurFade>
          </div>

          {/* Right Column - Form */}
          <BlurFade delay={0.3} inView>
            <div className="glass-card gradient-border p-8 lg:p-10">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-heading tracking-wider uppercase mb-3 text-muted-foreground"
                  >
                    {t.contact.formFields.name}
                  </label>
                  <Input
                    id="name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder={t.contact.formFields.name}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary h-14 px-4 rounded-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-heading tracking-wider uppercase mb-3 text-muted-foreground"
                  >
                    {t.contact.formFields.email}
                  </label>
                  <Input
                    id="email"
                    name="user_email"
                    type="email"
                    value={formData.user_email}
                    onChange={handleChange}
                    placeholder={t.contact.formFields.email}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary h-14 px-4 rounded-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-heading tracking-wider uppercase mb-3 text-muted-foreground"
                  >
                    {t.contact.formFields.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.formFields.message}
                    rows={5}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary resize-none p-4 rounded-lg"
                  />
                </div>

                <MagneticButton className="w-full">
                  <Button
                    type="submit"
                    className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider glow group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                    ) : (
                      <>
                        {t.contact.formFields.submit}
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </MagneticButton>
              </form>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
