import DashboardLayout from "@/components/dashboard/DashboardLayout";
import IrrigationControl from "@/components/dashboard/IrrigationControl";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Droplets, TrendingDown } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const usageData = [
  { date: "Mon", usage: 1200 },
  { date: "Tue", usage: 980 },
  { date: "Wed", usage: 450 },
  { date: "Thu", usage: 1100 },
  { date: "Fri", usage: 890 },
  { date: "Sat", usage: 1300 },
  { date: "Sun", usage: 760 },
];

const schedules = [
  { zone: "Zone A", field: "North Field", time: "5:30 AM", duration: "45 min", days: ["Mon", "Wed", "Fri"] },
  { zone: "Zone B", field: "South Field", time: "6:00 PM", duration: "30 min", days: ["Tue", "Thu", "Sat"] },
  { zone: "Zone C", field: "East Field", time: "5:00 AM", duration: "60 min", days: ["Mon", "Thu"] },
  { zone: "Zone D", field: "West Field", time: "7:00 PM", duration: "35 min", days: ["Wed", "Sun"] },
];

const IrrigationPage = () => {
  return (
    <DashboardLayout title="Irrigation Control" subtitle="Manage and schedule irrigation across all zones">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Droplets className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <div className="text-2xl font-display font-bold">6,680 L</div>
              <div className="text-sm text-muted-foreground">This Week</div>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-display font-bold">-18%</div>
              <div className="text-sm text-muted-foreground">vs Last Week</div>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-2xl font-display font-bold">12</div>
              <div className="text-sm text-muted-foreground">Scheduled</div>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <Calendar className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <div className="text-2xl font-display font-bold">4</div>
              <div className="text-sm text-muted-foreground">Active Zones</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Usage Chart */}
        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-semibold mb-4">Weekly Water Usage</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={usageData}>
                <defs>
                  <linearGradient id="usageGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                  formatter={(value) => [`${value} L`, "Usage"]}
                />
                <Area type="monotone" dataKey="usage" stroke="hsl(199, 89%, 48%)" strokeWidth={2} fillOpacity={1} fill="url(#usageGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Control */}
        <IrrigationControl />
      </div>

      {/* Schedules */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-display font-semibold">Irrigation Schedules</h2>
          <Button variant="hero" size="sm">Add Schedule</Button>
        </div>
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Zone</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Field</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Time</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Duration</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Days</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule) => (
                <tr key={schedule.zone} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">{schedule.zone}</td>
                  <td className="p-4 text-muted-foreground">{schedule.field}</td>
                  <td className="p-4">{schedule.time}</td>
                  <td className="p-4">{schedule.duration}</td>
                  <td className="p-4">
                    <div className="flex gap-1">
                      {schedule.days.map((day) => (
                        <span key={day} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                          {day}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default IrrigationPage;
