import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Check, Zap, Star, CreditCard, Download, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small farms getting started with smart agriculture.",
    features: [
      "Up to 5 sensors",
      "Basic AI insights",
      "Weather integration",
      "Email support",
      "7-day data history",
    ],
    current: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "For growing farms that need more power and insights.",
    features: [
      "Up to 25 sensors",
      "Advanced AI insights",
      "Weather integration",
      "Priority support",
      "30-day data history",
      "Custom alerts",
      "API access",
    ],
    current: true,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$449",
    period: "/month",
    description: "For large-scale agricultural operations.",
    features: [
      "Unlimited sensors",
      "Premium AI insights",
      "Weather integration",
      "24/7 phone support",
      "Unlimited data history",
      "Custom alerts",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
    ],
    current: false,
  },
];

const usageStats = [
  { label: "Sensors Used", value: 14, max: 25, unit: "sensors" },
  { label: "API Calls", value: 8240, max: 10000, unit: "calls" },
  { label: "Data Storage", value: 2.4, max: 5, unit: "GB" },
];

const invoices = [
  { date: "Dec 1, 2024", amount: "$149.00", status: "Paid" },
  { date: "Nov 1, 2024", amount: "$149.00", status: "Paid" },
  { date: "Oct 1, 2024", amount: "$149.00", status: "Paid" },
  { date: "Sep 1, 2024", amount: "$149.00", status: "Paid" },
];

const SubscriptionPage = () => {
  return (
    <DashboardLayout title="Subscription" subtitle="Manage your plan and billing">
      {/* Current Plan */}
      <div className="bg-card rounded-xl border border-border p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-xl font-display font-bold">Professional Plan</h2>
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                Active
              </span>
            </div>
            <p className="text-muted-foreground">
              Your next billing date is <strong>January 1, 2025</strong>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">Cancel Plan</Button>
            <Button variant="hero">Upgrade Plan</Button>
          </div>
        </div>
      </div>

      {/* Usage Stats */}
      <div className="bg-card rounded-xl border border-border p-6 mb-6">
        <h3 className="font-semibold mb-4">Current Usage</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {usageStats.map((stat) => (
            <div key={stat.label}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                <span className="text-sm font-medium">
                  {stat.value} / {stat.max} {stat.unit}
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-hero rounded-full transition-all"
                  style={{ width: `${(stat.value / stat.max) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plans */}
      <div className="mb-6">
        <h3 className="font-semibold mb-4">Available Plans</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "bg-card rounded-xl border p-6 relative",
                plan.current ? "border-primary shadow-lg" : "border-border",
                plan.popular && "ring-2 ring-primary ring-offset-2 ring-offset-background"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-hero text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Most Popular
                </div>
              )}
              
              <h4 className="text-lg font-display font-semibold mb-2">{plan.name}</h4>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-display font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
              
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button
                variant={plan.current ? "outline" : "hero"}
                className="w-full"
                disabled={plan.current}
              >
                {plan.current ? "Current Plan" : "Upgrade"}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h3 className="font-semibold">Billing History</h3>
          <Button variant="ghost" size="sm">
            <CreditCard className="w-4 h-4 mr-2" />
            Update Payment
          </Button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Date</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Amount</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
              <th className="text-right p-4 text-sm font-medium text-muted-foreground">Invoice</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={index} className="border-b border-border last:border-0">
                <td className="p-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  {invoice.date}
                </td>
                <td className="p-4 font-medium">{invoice.amount}</td>
                <td className="p-4">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {invoice.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default SubscriptionPage;
