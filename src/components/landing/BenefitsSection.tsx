import { Droplets, TrendingUp, DollarSign, Leaf, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Reduce Water Usage",
    description: "Save up to 40% on water consumption with precision irrigation based on real soil and weather data.",
    stat: "40%",
    statLabel: "Water Saved",
  },
  {
    icon: TrendingUp,
    title: "Increase Crop Efficiency",
    description: "Optimize growing conditions to maximize yield per hectare with AI-driven insights.",
    stat: "2.5x",
    statLabel: "Yield Increase",
  },
  {
    icon: DollarSign,
    title: "Cut Operating Costs",
    description: "Reduce operational expenses through automated monitoring and smart resource allocation.",
    stat: "30%",
    statLabel: "Cost Reduction",
  },
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description: "Minimize environmental impact while maintaining high productivity with eco-friendly practices.",
    stat: "60%",
    statLabel: "Less Waste",
  },
  {
    icon: Shield,
    title: "Prevent Crop Loss",
    description: "Early warning systems detect potential issues before they affect your harvest.",
    stat: "95%",
    statLabel: "Issue Prevention",
  },
  {
    icon: Users,
    title: "Expert Community",
    description: "Connect with agricultural experts and fellow farmers to share knowledge and best practices.",
    stat: "500+",
    statLabel: "Active Members",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Benefits</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-6">
            Why Agricultural Businesses Choose AgriSmart
          </h2>
          <p className="text-muted-foreground text-lg">
            Transform your farming operations with data-driven decisions and cutting-edge technology.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-card rounded-2xl p-6 border border-border card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-display font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{benefit.description}</p>
                  
                  {/* Stat */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-display font-bold text-primary">{benefit.stat}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{benefit.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
