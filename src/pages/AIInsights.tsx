import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AIInsightCard from "@/components/dashboard/AIInsightCard";
import { Button } from "@/components/ui/button";
import { RefreshCw, Settings, TrendingUp, Droplets, AlertTriangle, CheckCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const weeklyData = [
  { day: "Mon", recommendations: 5, implemented: 4 },
  { day: "Tue", recommendations: 3, implemented: 3 },
  { day: "Wed", recommendations: 7, implemented: 5 },
  { day: "Thu", recommendations: 4, implemented: 4 },
  { day: "Fri", recommendations: 6, implemented: 4 },
  { day: "Sat", recommendations: 2, implemented: 2 },
  { day: "Sun", recommendations: 3, implemented: 2 },
];

const categoryData = [
  { name: "Irrigation", value: 45, color: "hsl(199, 89%, 48%)" },
  { name: "Soil Health", value: 25, color: "hsl(142, 76%, 36%)" },
  { name: "Weather", value: 20, color: "hsl(38, 92%, 50%)" },
  { name: "Maintenance", value: 10, color: "hsl(150, 10%, 45%)" },
];

const allInsights = [
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
  {
    type: "recommendation" as const,
    title: "Fertilizer Application Window",
    description: "Weather conditions are optimal for fertilizer application in the next 48 hours. Low wind and no rain expected.",
    action: "View Schedule",
    field: "East Field",
  },
  {
    type: "warning" as const,
    title: "Sensor Battery Low",
    description: "Sensor B1 battery is at 12%. Schedule maintenance to replace battery and prevent data gaps.",
    action: "Schedule Maintenance",
    field: "South Field",
  },
  {
    type: "success" as const,
    title: "Water Savings Achieved",
    description: "Your farm saved 2,450L of water this week by following AI irrigation recommendations.",
    field: "All Fields",
  },
];

const AIInsightsPage = () => {
  return (
    <DashboardLayout title="AI Insights" subtitle="Smart recommendations powered by machine learning">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-display font-bold">156</div>
              <div className="text-sm text-muted-foreground">Total Insights</div>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Droplets className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <div className="text-2xl font-display font-bold">2.4K L</div>
              <div className="text-sm text-muted-foreground">Water Saved</div>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-2xl font-display font-bold">89%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <div className="text-2xl font-display font-bold">3</div>
              <div className="text-sm text-muted-foreground">Active Alerts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-semibold mb-4">Weekly Recommendations</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="recommendations" fill="hsl(142, 76%, 36%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="implemented" fill="hsl(199, 89%, 48%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-semibold mb-4">Insights by Category</h3>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {categoryData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm text-muted-foreground">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Insights */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-display font-semibold">All Insights</h2>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allInsights.map((insight, index) => (
          <AIInsightCard key={index} {...insight} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default AIInsightsPage;
