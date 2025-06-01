import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, BarChart3, Leaf, Clock, MapPin, TrendingUp } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="default" className="mb-4 bg-gray-100 rounded-xl font-semibold">
            AI-Powered Traffic Intelligence
          </Badge>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Smart Traffic Prediction System
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Advanced machine learning algorithms that predict vehicle counts,
            traffic congestion patterns, and environmental impact to help create
            smarter, more sustainable transportation systems.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-slate-700">
              <Car className="h-5 w-5" />
              <span>Vehicle Counting</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <BarChart3 className="h-5 w-5" />
              <span>Traffic Analysis</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Leaf className="h-5 w-5" />
              <span>Carbon Tracking</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            What Our AI Accomplishes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-slate-900">
                  Accurate Vehicle Counting
                </CardTitle>
                <CardDescription>
                  Real-time vehicle detection and counting with 95%+ accuracy
                  using computer vision and deep learning algorithms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Our AI processes traffic camera feeds and sensor data to
                  provide precise vehicle counts across different vehicle types,
                  helping traffic management systems make informed decisions
                  about signal timing and route optimization.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-slate-900">
                  Traffic Jam Prediction
                </CardTitle>
                <CardDescription>
                  Predictive analytics that forecast traffic congestion patterns
                  up to 2 hours in advance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  By analyzing historical traffic patterns, weather conditions,
                  events, and real-time data, our model predicts potential
                  traffic bottlenecks before they occur, enabling proactive
                  traffic management and route suggestions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900">
                  Carbon Emission Analysis
                </CardTitle>
                <CardDescription>
                  Environmental impact assessment through real-time carbon
                  footprint calculations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Our system calculates carbon emissions based on vehicle types,
                  traffic flow, and congestion levels, providing valuable
                  insights for urban planning and environmental policy
                  decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Technical Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Advanced Machine Learning
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Real-time Processing
                    </h4>
                    <p className="text-slate-600">
                      Process thousands of data points per second with minimal
                      latency
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Multi-location Support
                    </h4>
                    <p className="text-slate-600">
                      Simultaneous monitoring and prediction across multiple
                      intersections
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Continuous Learning
                    </h4>
                    <p className="text-slate-600">
                      Model improves accuracy over time through continuous data
                      ingestion
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-4">
                Key Performance Metrics
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Vehicle Count Accuracy</span>
                  <span className="font-semibold text-slate-900">95.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">
                    Traffic Prediction Accuracy
                  </span>
                  <span className="font-semibold text-slate-900">89.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Processing Speed</span>
                  <span className="font-semibold text-slate-900">
                    {"<50ms"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">
                    Carbon Calculation Precision
                  </span>
                  <span className="font-semibold text-slate-900">92.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Making Cities Smarter and Greener
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Our AI-powered traffic prediction system contributes to more
            efficient urban transportation, reduced emissions, and improved
            quality of life for city residents. By providing accurate, real-time
            insights into traffic patterns and environmental impact, we enable
            data-driven decisions that benefit both mobility and sustainability.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">25%</div>
              <div className="text-slate-600">Reduction in Traffic Delays</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">18%</div>
              <div className="text-slate-600">Lower Carbon Emissions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-slate-600">Improved Traffic Flow</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
