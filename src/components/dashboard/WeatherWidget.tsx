import { Cloud, Droplets, Wind, Sun, Thermometer } from "lucide-react";

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  condition: string;
  forecast: { day: string; temp: number; rain: boolean }[];
}

const WeatherWidget = () => {
  const weather: WeatherData = {
    temperature: 24,
    humidity: 65,
    windSpeed: 12,
    condition: "Partly Cloudy",
    forecast: [
      { day: "Mon", temp: 24, rain: false },
      { day: "Tue", temp: 26, rain: false },
      { day: "Wed", temp: 22, rain: true },
      { day: "Thu", temp: 20, rain: true },
      { day: "Fri", temp: 23, rain: false },
    ],
  };

  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <h3 className="font-semibold text-foreground mb-4">Weather Overview</h3>
      
      {/* Current */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-water flex items-center justify-center">
            <Cloud className="w-7 h-7 text-secondary-foreground" />
          </div>
          <div>
            <div className="text-3xl font-display font-bold">{weather.temperature}°C</div>
            <div className="text-sm text-muted-foreground">{weather.condition}</div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <Droplets className="w-4 h-4 text-secondary mx-auto mb-1" />
          <div className="text-sm font-medium">{weather.humidity}%</div>
          <div className="text-xs text-muted-foreground">Humidity</div>
        </div>
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <Wind className="w-4 h-4 text-muted-foreground mx-auto mb-1" />
          <div className="text-sm font-medium">{weather.windSpeed} km/h</div>
          <div className="text-xs text-muted-foreground">Wind</div>
        </div>
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <Sun className="w-4 h-4 text-accent mx-auto mb-1" />
          <div className="text-sm font-medium">6.5 hrs</div>
          <div className="text-xs text-muted-foreground">Sunlight</div>
        </div>
      </div>

      {/* Forecast */}
      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-3">5-Day Forecast</h4>
        <div className="flex justify-between">
          {weather.forecast.map((day) => (
            <div key={day.day} className="text-center">
              <div className="text-xs text-muted-foreground mb-1">{day.day}</div>
              {day.rain ? (
                <Droplets className="w-4 h-4 text-secondary mx-auto mb-1" />
              ) : (
                <Sun className="w-4 h-4 text-accent mx-auto mb-1" />
              )}
              <div className="text-sm font-medium">{day.temp}°</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
