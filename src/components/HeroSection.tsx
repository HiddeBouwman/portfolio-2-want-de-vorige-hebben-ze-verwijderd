import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBlob from "@/assets/hero-blob.png";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Blob Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBlob}
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Geometric Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 animate-float" />
      <div className="absolute bottom-40 right-20 w-16 h-16 rounded-full bg-secondary/30 animate-float animation-delay-200" />
      <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-accent/40 animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gold/20 rotate-45 animate-float animation-delay-400" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-slide-up">
            👋 Hallo, ik ben
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up animation-delay-200">
            <span className="text-gradient">Hidde</span>
            <br />
            <span className="text-foreground">Bouwman</span>
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-slide-up animation-delay-400">
            Full-Stack{" "}
            <span className="text-primary font-semibold">Web Developer</span>
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up animation-delay-600">
            HBO student Creative Media & Game Technologies op zoek naar een
            uitdagende stage waar ik mijn passie voor webdevelopment kan
            inzetten.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-600">
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                <span>Bekijk Projecten</span>
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/cv/Hidde_Bouwman_CV.pdf" download>
                <Download className="mr-2 w-4 h-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
