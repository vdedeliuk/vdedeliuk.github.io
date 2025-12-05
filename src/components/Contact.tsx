import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactContent, siteConfig } from "@/data/content";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
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

    // Створюємо об'єкт з даними. Додаємо дублюючі ключі, щоб точно вгадати назви змінних у вашому шаблоні EmailJS
    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      from_name: formData.user_name, // Часто використовується в шаблонах за замовчуванням
      reply_to: formData.user_email, // Використовується для поля "Reply To"
      name: formData.user_name,      // Простий варіант
      email: formData.user_email,    // Простий варіант
      message: formData.message,
    };

    console.log("Attempting to send email with params:", templateParams);

    try {
      // Використовуємо .send() замість .sendForm() для надійності
      const result = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log("SUCCESS!", result.status, result.text);

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({ user_name: "", user_email: "", message: "" });
    } catch (error) {
      console.error("FAILED...", error);
      toast({
        title: "Error",
        description: "Failed to send message. Check console for details.",
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
    <section id="contact" className="section-padding relative noise-bg">
      {/* Large section number */}
      <div className="absolute top-20 right-8 md:right-20 pointer-events-none">
        <span className="text-[8rem] md:text-[12rem] font-heading text-foreground/5 leading-none">05</span>
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-foreground" />
              <span className="text-sm tracking-[0.3em] uppercase">
                {contactContent.subtitle}
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading leading-none mb-8">
              {contactContent.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              {contactContent.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 border-2 border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Email</div>
                  <div className="font-heading text-xl">
                    {siteConfig.email}
                  </div>
                </div>
              </a>

              {siteConfig.phone && (
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 border-2 border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">Phone</div>
                    <div className="font-heading text-xl">
                      {siteConfig.phone}
                    </div>
                  </div>
                </a>
              )}

              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 border-2 border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Telegram</div>
                  <div className="font-heading text-xl">@kun3741</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="brutal-card p-8 lg:p-10">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-heading tracking-wider uppercase mb-3"
                >
                  {contactContent.formFields.name}
                </label>
                <Input
                  id="name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-background border-2 border-foreground/20 focus:border-foreground h-14 px-4"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-heading tracking-wider uppercase mb-3"
                >
                  {contactContent.formFields.email}
                </label>
                <Input
                  id="email"
                  name="user_email"
                  type="email"
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-background border-2 border-foreground/20 focus:border-foreground h-14 px-4"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-heading tracking-wider uppercase mb-3"
                >
                  {contactContent.formFields.message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your bot idea..."
                  rows={5}
                  required
                  className="bg-background border-2 border-foreground/20 focus:border-foreground resize-none p-4"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full h-14"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    {contactContent.formFields.submit}
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
