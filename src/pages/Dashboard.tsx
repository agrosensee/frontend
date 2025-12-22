import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import SensorCard from "@/components/dashboard/SensorCard";
import AIInsightCard from "@/components/dashboard/AIInsightCard";
import WeatherWidget from "@/components/dashboard/WeatherWidget";
import MoistureChart from "@/components/dashboard/MoistureChart";
import IrrigationControl from "@/components/dashboard/IrrigationControl";
import { Droplets, Leaf, Cpu, AlertTriangle } from "lucide-react";

const sensors = [
  { name: "Sensor A1", fieldName: "North Field - Section 1", status: "online" as const, moisture: 45, temperature: 24, battery: 85 },
  { name: "Sensor A2", fieldName: "North Field - Section 2", status: "online" as const, moisture: 62, temperature: 23, battery: 92 },
  { name: "Sensor B1", fieldName: "South Field - Section 1", status: "offline" as const, moisture: 28, temperature: 25, battery: 12 },
  { name: "Sensor B2", fieldName: "South Field - Section 2", status: "online" as const, moisture: 55, temperature: 24, battery: 78 },
];

const insights = [
  {
    type: "warning" as const,
    title: "Low Moisture Alert",
    description: "Soil moisture in South Field Section 1 is below optimal levels. Consider irrigation within the next 2 hours.",
    action: "Start Irrigation",
    field: "South Field - Section 1",
  },
  {
    type: "recommendation" as const,
    title: "Skip Tomorrow's Irrigation",
    description: "Rain is forecasted for Wednesday. AI recommends skipping scheduled irrigation to prevent overwatering.",
    action: "Adjust Schedule",
    field: "All Fields",
  },
  {
    type: "success" as const,
    title: "Optimal Conditions",
    description: "North Field is showing excellent soil health indicators. Current moisture and mineral levels are ideal for crop growth.",
    field: "North Field",
  },
];

const Dashboard = () => {
  return (
    <DashboardLayout title="Farm Dashboard" subtitle="Real-time monitoring and control">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Average Moisture"
          value="47.5%"
          change="+2.3% from yesterday"
          changeType="positive"
          icon={Droplets}
          iconColor="bg-secondary/10 text-secondary"
        />
        <StatCard
          title="Active Sensors"
          value="12/14"
          change="2 sensors offline"
          changeType="negative"
          icon={Cpu}
          iconColor="bg-primary/10 text-primary"
        />
        <StatCard
          title="Water Saved"
          value="2,450L"
          change="This week"
          changeType="neutral"
          icon={Leaf}
          iconColor="bg-accent/10 text-accent"
        />
        <StatCard
          title="Alerts"
          value="3"
          change="Requires attention"
          changeType="negative"
          icon={AlertTriangle}
          iconColor="bg-destructive/10 text-destructive"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        {/* Chart */}
        <div className="lg:col-span-2">
          <MoistureChart />
        </div>
        
        {/* Weather */}
        <div>
          <WeatherWidget />
        </div>
      </div>

      {/* AI Insights */}
      <div className="mb-6">
        <h2 className="text-lg font-display font-semibold mb-4">AI Insights</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {insights.map((insight, index) => (
            <AIInsightCard key={index} {...insight} />
          ))}
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Sensors */}
        <div>
          <h2 className="text-lg font-display font-semibold mb-4">Field Sensors</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {sensors.map((sensor) => (
              <SensorCard key={sensor.name} {...sensor} />
            ))}
          </div>
        </div>

        {/* Irrigation */}
        <div>
          <IrrigationControl />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
