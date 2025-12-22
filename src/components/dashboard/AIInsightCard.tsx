import { Lightbulb, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface AIInsightProps {
  type: "recommendation" | "warning" | "success";
  title: string;
  description: string;
  action?: string;
  field?: string;
}

const AIInsightCard = ({ type, title, description, action, field }: AIInsightProps) => {
  const config = {
    recommendation: {
      icon: Lightbulb,
      bg: "bg-accent/10",
      border: "border-accent/30",
      iconColor: "text-accent",
    },
    warning: {
      icon: AlertTriangle,
      bg: "bg-destructive/10",
      border: "border-destructive/30",
      iconColor: "text-destructive",
    },
    success: {
      icon: CheckCircle,
      bg: "bg-primary/10",
      border: "border-primary/30",
      iconColor: "text-primary",
    },
  };

  const { icon: Icon, bg, border, iconColor } = config[type];

  return (
    <div className={cn("rounded-xl border p-4", bg, border)}>
      <div className="flex gap-3">
        <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0", bg)}>
          <Icon className={cn("w-4 h-4", iconColor)} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h4 className="font-semibold text-foreground">{title}</h4>
              {field && <span className="text-xs text-muted-foreground">{field}</span>}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
          {action && (
            <Button variant="ghost" size="sm" className="mt-2 -ml-2 text-primary hover:text-primary">
              {action}
              <ArrowRight className="w-3 h-3 ml-1" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIInsightCard;
