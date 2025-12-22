import { Cpu, CloudRain, LineChart, Sprout } from "lucide-react";

const steps = [
  {
    icon: Sprout,
    title: "Soil Sensors",
    description: "Deploy smart sensors across your fields to measure moisture levels, mineral content, temperature, and soil conditions in real-time.",
    color: "primary",
    gradient: "bg-gradient-hero",
  },
  {
    icon: CloudRain,
    title: "Weather Integration",
    description: "Our system continuously monitors local weather forecasts, rainfall predictions, and climate patterns for your specific location.",
    color: "secondary",
    gradient: "bg-gradient-water",
  },
  {
    icon: Cpu,
    title: "AI Analysis",
    description: "Advanced AI algorithms analyze all sensor data and weather information to generate intelligent, actionable recommendations.",
    color: "accent",
    gradient: "bg-gradient-sun",
  },
  {
    icon: LineChart,
    title: "Smart Actions",
    description: "Receive precise irrigation schedules, alerts for overwatering risks, and optimization suggestions directly to your dashboard.",
    color: "primary",
    gradient: "bg-gradient-hero",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-6">
            From Sensors to Smart Decisions
          </h2>
          <p className="text-muted-foreground text-lg">
            Our integrated system combines hardware, weather data, and AI to give you 
            complete control over your farm's irrigation needs.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2 opacity-20" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card */}
                <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full border border-border group-hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center font-display font-bold text-sm text-muted-foreground">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${step.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
