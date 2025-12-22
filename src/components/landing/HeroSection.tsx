import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Leaf, Sun } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Icons */}
      <div className="absolute top-32 left-[15%] animate-float opacity-60">
        <div className="w-16 h-16 rounded-2xl bg-gradient-water flex items-center justify-center shadow-lg">
          <Droplets className="w-8 h-8 text-secondary-foreground" />
        </div>
      </div>
      <div className="absolute top-48 right-[20%] animate-float opacity-60" style={{ animationDelay: "2s" }}>
        <div className="w-14 h-14 rounded-2xl bg-gradient-sun flex items-center justify-center shadow-lg">
          <Sun className="w-7 h-7 text-accent-foreground" />
        </div>
      </div>
      <div className="absolute bottom-32 left-[25%] animate-float opacity-60" style={{ animationDelay: "4s" }}>
        <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-lg">
          <Leaf className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">AI-Powered Smart Agriculture</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Stop Wasting Water.
            <br />
            <span className="text-gradient">Grow Smarter.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Combine real-time soil sensors with weather forecasts and AI-driven insights 
            to optimize irrigation, reduce costs, and achieve sustainable farming.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="group">
              Request Demo
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Watch How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">40%</div>
              <div className="text-sm text-muted-foreground mt-1">Water Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-secondary">2.5x</div>
              <div className="text-sm text-muted-foreground mt-1">Crop Yield</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Farms Connected</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--muted))" fillOpacity="0.5"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
