import DashboardLayout from "@/components/dashboard/DashboardLayout";
import SensorCard from "@/components/dashboard/SensorCard";
import { Button } from "@/components/ui/button";
import { Plus, Filter, Download, MapPin } from "lucide-react";

const allSensors = [
  { name: "Sensor A1", fieldName: "North Field - Section 1", status: "online" as const, moisture: 45, temperature: 24, battery: 85 },
  { name: "Sensor A2", fieldName: "North Field - Section 2", status: "online" as const, moisture: 62, temperature: 23, battery: 92 },
  { name: "Sensor A3", fieldName: "North Field - Section 3", status: "online" as const, moisture: 58, temperature: 24, battery: 88 },
  { name: "Sensor B1", fieldName: "South Field - Section 1", status: "offline" as const, moisture: 28, temperature: 25, battery: 12 },
  { name: "Sensor B2", fieldName: "South Field - Section 2", status: "online" as const, moisture: 55, temperature: 24, battery: 78 },
  { name: "Sensor B3", fieldName: "South Field - Section 3", status: "online" as const, moisture: 51, temperature: 25, battery: 65 },
  { name: "Sensor C1", fieldName: "East Field - Section 1", status: "online" as const, moisture: 68, temperature: 22, battery: 95 },
  { name: "Sensor C2", fieldName: "East Field - Section 2", status: "online" as const, moisture: 72, temperature: 22, battery: 91 },
  { name: "Sensor D1", fieldName: "West Field - Section 1", status: "online" as const, moisture: 42, temperature: 23, battery: 73 },
  { name: "Sensor D2", fieldName: "West Field - Section 2", status: "offline" as const, moisture: 35, temperature: 24, battery: 5 },
];

const SensorsPage = () => {
  const onlineSensors = allSensors.filter(s => s.status === "online").length;
  const offlineSensors = allSensors.filter(s => s.status === "offline").length;
  const avgMoisture = Math.round(allSensors.reduce((acc, s) => acc + s.moisture, 0) / allSensors.length);

  return (
    <DashboardLayout title="Sensor Management" subtitle="Monitor and manage all field sensors">
      {/* Stats Bar */}
      <div className="flex flex-wrap items-center gap-6 mb-6 p-4 bg-card rounded-xl border border-border">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-sm text-muted-foreground">Online:</span>
          <span className="font-semibold">{onlineSensors}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <span className="text-sm text-muted-foreground">Offline:</span>
          <span className="font-semibold">{offlineSensors}</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Avg Moisture:</span>
          <span className="font-semibold">{avgMoisture}%</span>
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="ghost" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="hero" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Sensor
          </Button>
        </div>
      </div>

      {/* Sensors Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {allSensors.map((sensor) => (
          <SensorCard key={sensor.name} {...sensor} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default SensorsPage;
