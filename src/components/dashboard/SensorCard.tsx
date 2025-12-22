import { Wifi, WifiOff, Battery, Thermometer, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";

interface SensorCardProps {
  name: string;
  fieldName: string;
  status: "online" | "offline";
  moisture: number;
  temperature: number;
  battery: number;
}

const SensorCard = ({ name, fieldName, status, moisture, temperature, battery }: SensorCardProps) => {
  const isOnline = status === "online";
  const moistureLevel = moisture < 30 ? "low" : moisture < 70 ? "optimal" : "high";

  return (
    <div className="bg-card rounded-xl border border-border p-5 card-hover">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{fieldName}</p>
        </div>
        <div className={cn(
          "flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium",
          isOnline ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"
        )}>
          {isOnline ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
          {status}
        </div>
      </div>

      {/* Metrics */}
      <div className="space-y-3">
        {/* Moisture */}
        <div>
          <div className="flex items-center justify-between text-sm mb-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Droplets className="w-4 h-4" />
              <span>Moisture</span>
            </div>
            <span className={cn(
              "font-medium",
              moistureLevel === "low" && "text-destructive",
              moistureLevel === "optimal" && "text-primary",
              moistureLevel === "high" && "text-secondary"
            )}>
              {moisture}%
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className={cn(
                "h-full rounded-full transition-all",
                moistureLevel === "low" && "bg-destructive",
                moistureLevel === "optimal" && "bg-primary",
                moistureLevel === "high" && "bg-secondary"
              )}
              style={{ width: `${moisture}%` }}
            />
          </div>
        </div>

        {/* Temperature & Battery */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Thermometer className="w-4 h-4" />
            <span>{temperature}°C</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Battery className="w-4 h-4" />
            <span>{battery}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorCard;
