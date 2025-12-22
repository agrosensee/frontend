import { Power, Clock, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface IrrigationZone {
  id: string;
  name: string;
  field: string;
  status: "active" | "scheduled" | "idle";
  nextRun?: string;
  duration?: string;
  waterUsage?: number;
}

const zones: IrrigationZone[] = [
  { id: "1", name: "Zone A", field: "North Field", status: "active", duration: "25 min left", waterUsage: 120 },
  { id: "2", name: "Zone B", field: "South Field", status: "scheduled", nextRun: "Today, 6:00 PM" },
  { id: "3", name: "Zone C", field: "East Field", status: "idle" },
  { id: "4", name: "Zone D", field: "West Field", status: "scheduled", nextRun: "Tomorrow, 5:30 AM" },
];

const IrrigationControl = () => {
  const [activeZones, setActiveZones] = useState<string[]>(["1"]);

  const toggleZone = (zoneId: string) => {
    setActiveZones(prev => 
      prev.includes(zoneId) 
        ? prev.filter(id => id !== zoneId)
        : [...prev, zoneId]
    );
  };

  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-foreground">Irrigation Control</h3>
          <p className="text-sm text-muted-foreground">Manage irrigation zones</p>
        </div>
        <Button variant="hero" size="sm">
          Schedule All
        </Button>
      </div>

      <div className="space-y-3">
        {zones.map((zone) => {
          const isActive = activeZones.includes(zone.id);
          
          return (
            <div
              key={zone.id}
              className={cn(
                "p-4 rounded-lg border transition-all",
                isActive 
                  ? "bg-primary/5 border-primary/30" 
                  : "bg-muted/30 border-border"
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleZone(zone.id)}
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center transition-all",
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-md" 
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    )}
                  >
                    <Power className="w-5 h-5" />
                  </button>
                  <div>
                    <div className="font-medium text-foreground">{zone.name}</div>
                    <div className="text-sm text-muted-foreground">{zone.field}</div>
                  </div>
                </div>

                <div className="text-right">
                  {zone.status === "active" && zone.duration && (
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      <Droplets className="w-4 h-4" />
                      {zone.duration}
                    </div>
                  )}
                  {zone.status === "scheduled" && zone.nextRun && (
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      {zone.nextRun}
                    </div>
                  )}
                  {zone.status === "idle" && (
                    <span className="text-sm text-muted-foreground">Idle</span>
                  )}
                </div>
              </div>

              {isActive && zone.waterUsage && (
                <div className="mt-3 pt-3 border-t border-border/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Water usage</span>
                    <span className="font-medium text-secondary">{zone.waterUsage} L/min</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IrrigationControl;
