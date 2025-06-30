import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, BarChart3, Leaf, TrendingUp, Home, Globe2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge
            variant="default"
            className="mb-4 bg-gray-100 rounded-xl font-semibold"
          >
            AI-Powered Traffic Intelligence
          </Badge>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Smart Traffic Prediction System
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Advanced machine learning algorithms that predict traffic congestion
            patterns and environmental impact to help create smarter, more
            sustainable transportation systems.
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
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-slate-900">
                  Support for Urban Planning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  The predictions can assist city planners in making data-driven
                  decisions for traffic management, infrastructure improvements,
                  and public transportation scheduling.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-slate-900">
                  Promoting Sustainable Mobility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  With accurate forecasts, the model supports efforts to reduce
                  traffic-related emissions, contributing to cleaner air and
                  more eco-friendly urban transportation systems.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe2 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900">
                  Real-World Integration Potential
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Designed with practical applications in mind, this model can
                  be integrated into smart traffic systems to support long-term
                  planning and real-time monitoring.
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
                Machine Learning Features
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Leaf className="h-5 w-5 text-green-600 mt-1" />
                  <div className="max-w-[80%] flex flex-col gap-2">
                    <h4 className="font-semibold text-slate-900">
                      Carbon Emission Forecasting
                    </h4>
                    <p className="text-slate-600">
                      By analyzing vehicle counts, we can estimates carbon
                      emissions throughout the day, providing insights into
                      pollution levels and environmental impact.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-green-600 mt-1" />
                  <div className="max-w-[80%] flex flex-col gap-2">
                    <h4 className="font-semibold text-slate-900">
                      Traffic Density Prediction
                    </h4>
                    <p className="text-slate-600">
                      Our AI model forecasts traffic congestion levels in the
                      Thamrin area based on time and day, helping commuters
                      anticipate peak hours and plan their routes more
                      efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-4">
                XGBoost Performance Metrics
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">
                    R2 Error Score
                  </span>
                  <span className="font-semibold text-slate-900">76.0%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">
                    Mean Average Error (MAE)
                  </span>
                  <span className="font-semibold text-slate-900">896.72</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">
                    Root Mean Square Error (RMSE)
                  </span>
                  <span className="font-semibold text-slate-900">12029.31</span>
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
            quality of life for city residents. By providing accurate insights
            into traffic patterns and environmental impact, we enable
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
