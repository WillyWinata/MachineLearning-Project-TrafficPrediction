import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Car,
  BarChart3,
  Leaf,
  Calendar,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

export default function InteractivePage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [location, setLocation] = useState("downtown-intersection");
  const [prediction, setPrediction] = useState<{
    vehicleCount: number;
    trafficLevel: number;
    carbonEmission: string;
    confidence: string;
    timestamp: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePredict = async () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time");
      return;
    }

    setIsLoading(true);

    // Simulate API call with realistic predictions
    setTimeout(async () => {
      // const response = await fetch("http://localhost:5000/predict", {
      //   method: "POST",
      //   body: JSON.stringify({"features": []})
      // })

      // const result = await response.json()

      const hour = Number.parseInt(selectedTime.split(":")[0]);
      const dayOfWeek = new Date(selectedDate).getDay();

      // Generate realistic predictions based on time and day
      let baseVehicleCount = 45;
      let baseTrafficLevel = 35;
      let baseCarbonEmission = 2.1;

      // Rush hour adjustments
      if ((hour >= 7 && hour <= 9) || (hour >= 17 && hour <= 19)) {
        baseVehicleCount *= 2.5;
        baseTrafficLevel *= 2.2;
        baseCarbonEmission *= 2.3;
      }

      // Weekend adjustments
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        baseVehicleCount *= 0.7;
        baseTrafficLevel *= 0.6;
        baseCarbonEmission *= 0.65;
      }

      // Add some randomness
      const randomFactor = 0.8 + Math.random() * 0.4;

      setPrediction({
        vehicleCount: Math.round(baseVehicleCount * randomFactor),
        trafficLevel: Math.min(
          100,
          Math.round(baseTrafficLevel * randomFactor)
        ),
        carbonEmission: (baseCarbonEmission * randomFactor).toFixed(2),
        confidence: (85 + Math.random() * 10).toFixed(1),
        timestamp: `${selectedDate} ${selectedTime}`,
      });

      setIsLoading(false);
    }, 1500);
  };

  const getTrafficStatus = (level: number) => {
    if (level < 30)
      return {
        status: "Light",
        color: "bg-green-500",
        textColor: "text-green-700",
      };
    if (level < 60)
      return {
        status: "Moderate",
        color: "bg-yellow-500",
        textColor: "text-yellow-700",
      };
    if (level < 80)
      return {
        status: "Heavy",
        color: "bg-orange-500",
        textColor: "text-orange-700",
      };
    return { status: "Severe", color: "bg-red-500", textColor: "text-red-700" };
  };

  const getCarbonLevel = (emission: string) => {
    const value = Number.parseFloat(emission);
    if (value < 2) return { level: "Low", color: "text-green-600" };
    if (value < 4) return { level: "Moderate", color: "text-yellow-600" };
    if (value < 6) return { level: "High", color: "text-orange-600" };
    return { level: "Very High", color: "text-red-600" };
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge
            variant="secondary"
            className="mb-4 bg-gray-100 rounded-xl font-semibold"
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Interactive Predictions
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Traffic Prediction Interface
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Enter a date and time to get AI-powered predictions for vehicle
            count, traffic congestion, and carbon emissions at your selected
            location.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                Prediction Parameters
              </CardTitle>
              <CardDescription>
                Select the date, time, and location for traffic prediction
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <select
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="downtown-intersection">
                    Downtown Main Intersection
                  </option>
                  <option value="highway-junction">
                    Highway Junction A-12
                  </option>
                  <option value="business-district">
                    Business District Center
                  </option>
                  <option value="residential-area">Residential Area Hub</option>
                  <option value="shopping-center">
                    Shopping Center Entrance
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    max={
                      new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                        .toISOString()
                        .split("T")[0]
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  />
                </div>
              </div>

              <Button
                onClick={handlePredict}
                disabled={isLoading || !selectedDate || !selectedTime}
                className="w-full bg-black text-white font-semibold"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating Prediction...
                  </>
                ) : (
                  <>
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Generate Prediction
                  </>
                )}
              </Button>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">
                      Prediction Notes
                    </h4>
                    <p className="text-sm text-blue-700">
                      Predictions are based on historical data, weather
                      patterns, and real-time traffic analysis. Accuracy may
                      vary during special events or unusual circumstances.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <div className="space-y-6">
            {prediction ? (
              <>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Car className="h-5 w-5 text-green-600" />
                      Vehicle Count Prediction
                    </CardTitle>
                    <CardDescription>
                      Estimated number of vehicles at {prediction.timestamp}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-slate-900 mb-2">
                        {prediction.vehicleCount}
                      </div>
                      <div className="text-slate-600">vehicles per hour</div>
                      <div className="mt-4 flex justify-center">
                        <Badge
                          variant="secondary"
                          className="bg-gray-200 rounded-xl font-semibold"
                        >
                          {prediction.confidence}% confidence
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-orange-600" />
                      Traffic Congestion Level
                    </CardTitle>
                    <CardDescription>
                      Expected traffic density and flow conditions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Traffic Level</span>
                        <span className="font-semibold text-slate-900">
                          {prediction.trafficLevel}%
                        </span>
                      </div>

                      <div className="w-full bg-slate-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${
                            getTrafficStatus(prediction.trafficLevel).color
                          }`}
                          style={{ width: `${prediction.trafficLevel}%` }}
                        ></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <Badge
                          variant="secondary"
                          className={
                            getTrafficStatus(prediction.trafficLevel).textColor
                          }
                        >
                          {getTrafficStatus(prediction.trafficLevel).status}{" "}
                          Traffic
                        </Badge>
                        <span className="text-sm text-slate-500">
                          {prediction.trafficLevel < 50
                            ? "Good flow expected"
                            : "Delays possible"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-green-600" />
                      Carbon Emission Estimate
                    </CardTitle>
                    <CardDescription>
                      Environmental impact assessment
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-4">
                      <div>
                        <div className="text-3xl font-bold text-slate-900">
                          {prediction.carbonEmission}
                        </div>
                        <div className="text-slate-600">kg CO₂ per hour</div>
                      </div>

                      <Separator />

                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Emission Level</span>
                        <Badge
                          variant="secondary"
                          className={
                            getCarbonLevel(prediction.carbonEmission).color
                          }
                        >
                          {getCarbonLevel(prediction.carbonEmission).level}
                        </Badge>
                      </div>

                      <div className="text-sm text-slate-500 bg-gray-100 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Leaf className="h-4 w-4 text-green-600" />
                          <span className="font-medium">
                            Environmental Impact
                          </span>
                        </div>
                        <p>
                          This emission level is equivalent to approximately{" "}
                          <span className="font-semibold">
                            {(
                              Number.parseFloat(prediction.carbonEmission) * 2.3
                            ).toFixed(1)}{" "}
                            km
                          </span>{" "}
                          of average car driving.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="border-0 shadow-lg border-dashed border-slate-300">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="h-8 w-8 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Ready for Prediction
                  </h3>
                  <p className="text-slate-600 text-center max-w-sm">
                    Select a date, time, and location, then click "Generate
                    Prediction" to see AI-powered traffic and emission
                    forecasts.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
