import { Quote } from "lucide-react";
import { testimonialsContent } from "@/data/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative bg-foreground text-background noise-bg">
      {/* Large section number */}
      <div className="absolute top-20 left-8 md:left-20 pointer-events-none">
        <span className="text-[8rem] md:text-[12rem] font-heading text-background/5 leading-none">04</span>
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-background" />
            <span className="text-sm tracking-[0.3em] uppercase text-background/60">
              {testimonialsContent.subtitle}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading leading-none">
            {testimonialsContent.title}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonialsContent.testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="border-2 border-background p-8 relative group hover:bg-background hover:text-foreground transition-colors duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-background/30 group-hover:text-foreground/30 transition-colors" />
              </div>

              {/* Quote Text */}
              <p className="text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {testimonial.avatar ? (
                  <div className="w-14 h-14 border-2 border-background group-hover:border-foreground overflow-hidden transition-colors">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to initial if image fails
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-2xl font-heading flex items-center justify-center w-full h-full">${testimonial.author.charAt(0)}</span>`;
                        }
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 border-2 border-background group-hover:border-foreground flex items-center justify-center transition-colors">
                    <span className="text-2xl font-heading">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <div className="font-heading text-lg">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-background/60 group-hover:text-foreground/60 transition-colors">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Number */}
              <div className="absolute top-6 right-8">
                <span className="text-4xl font-heading text-background/20 group-hover:text-foreground/20 transition-colors">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
