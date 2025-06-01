import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, Brain, Zap } from "lucide-react";

export default function CodePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge
            variant="secondary"
            className="mb-4 bg-gray-100 rounded-xl font-semibold"
          >
            <Code className="h-4 w-4 mr-2" />
            Source Code & Architecture
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            AI Model Implementation
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Explore the technical implementation of our traffic prediction AI,
            including model architecture, data processing pipelines, and
            prediction algorithms.
          </p>
        </div>

        <Tabs defaultValue="model" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="model">Model Architecture</TabsTrigger>
            <TabsTrigger value="preprocessing">Data Processing</TabsTrigger>
            <TabsTrigger value="prediction">Prediction Engine</TabsTrigger>
            <TabsTrigger value="api">API Integration</TabsTrigger>
          </TabsList>

          <TabsContent value="model" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-blue-600" />
                  <CardTitle>Neural Network Architecture</CardTitle>
                </div>
                <CardDescription>
                  Deep learning model for traffic pattern recognition and
                  prediction
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                  {`import tensorflow as tf
from tensorflow.keras import layers, models
import numpy as np

class TrafficPredictionModel:
    def __init__(self, sequence_length=24, features=8):
        self.sequence_length = sequence_length
        self.features = features
        self.model = self._build_model()
    
    def _build_model(self):
        model = models.Sequential([
            # LSTM layers for temporal pattern recognition
            layers.LSTM(128, return_sequences=True, 
                       input_shape=(self.sequence_length, self.features)),
            layers.Dropout(0.2),
            
            layers.LSTM(64, return_sequences=True),
            layers.Dropout(0.2),
            
            layers.LSTM(32, return_sequences=False),
            layers.Dropout(0.2),
            
            # Dense layers for prediction
            layers.Dense(64, activation='relu'),
            layers.Dense(32, activation='relu'),
            layers.Dense(3, activation='linear')  # vehicle_count, traffic_level, carbon_emission
        ])
        
        model.compile(
            optimizer='adam',
            loss='mse',
            metrics=['mae', 'mape']
        )
        
        return model
    
    def preprocess_data(self, raw_data):
        # Normalize features
        normalized_data = (raw_data - np.mean(raw_data, axis=0)) / np.std(raw_data, axis=0)
        
        # Create sequences
        X, y = [], []
        for i in range(len(normalized_data) - self.sequence_length):
            X.append(normalized_data[i:(i + self.sequence_length)])
            y.append(normalized_data[i + self.sequence_length, :3])  # Predict next values
        
        return np.array(X), np.array(y)
    
    def train(self, X_train, y_train, epochs=100, batch_size=32):
        history = self.model.fit(
            X_train, y_train,
            epochs=epochs,
            batch_size=batch_size,
            validation_split=0.2,
            verbose=1
        )
        return history
    
    def predict(self, input_sequence):
        prediction = self.model.predict(input_sequence.reshape(1, self.sequence_length, self.features))
        return {
            'vehicle_count': int(prediction[0][0]),
            'traffic_level': float(prediction[0][1]),
            'carbon_emission': float(prediction[0][2])
        }`}
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preprocessing" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-green-600" />
                  <CardTitle>Data Processing Pipeline</CardTitle>
                </div>
                <CardDescription>
                  Real-time data ingestion and feature engineering
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                  {`import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import cv2

class DataProcessor:
    def __init__(self):
        self.feature_columns = [
            'hour', 'day_of_week', 'month', 'is_weekend',
            'weather_temp', 'weather_condition', 'event_nearby', 'historical_avg'
        ]
    
    def extract_temporal_features(self, timestamp):
        dt = pd.to_datetime(timestamp)
        return {
            'hour': dt.hour,
            'day_of_week': dt.dayofweek,
            'month': dt.month,
            'is_weekend': 1 if dt.dayofweek >= 5 else 0
        }
    
    def process_camera_feed(self, frame):
        # Vehicle detection using YOLO
        net = cv2.dnn.readNet('yolo_weights.weights', 'yolo_config.cfg')
        
        # Prepare frame
        blob = cv2.dnn.blobFromImage(frame, 0.00392, (416, 416), (0, 0, 0), True, crop=False)
        net.setInput(blob)
        outputs = net.forward()
        
        vehicle_count = 0
        vehicle_types = {'car': 0, 'truck': 0, 'bus': 0, 'motorcycle': 0}
        
        for output in outputs:
            for detection in output:
                scores = detection[5:]
                class_id = np.argmax(scores)
                confidence = scores[class_id]
                
                if confidence > 0.5 and class_id in [2, 3, 5, 7]:  # Vehicle classes
                    vehicle_count += 1
                    if class_id == 2: vehicle_types['car'] += 1
                    elif class_id == 3: vehicle_types['motorcycle'] += 1
                    elif class_id == 5: vehicle_types['bus'] += 1
                    elif class_id == 7: vehicle_types['truck'] += 1
        
        return vehicle_count, vehicle_types
    
    def calculate_carbon_emission(self, vehicle_types, traffic_speed):
        # Emission factors (g CO2/km)
        emission_factors = {
            'car': 120,
            'truck': 280,
            'bus': 200,
            'motorcycle': 80
        }
        
        # Speed adjustment factor
        speed_factor = 1.0
        if traffic_speed < 20:  # Heavy traffic
            speed_factor = 1.5
        elif traffic_speed < 40:  # Moderate traffic
            speed_factor = 1.2
        
        total_emission = 0
        for vehicle_type, count in vehicle_types.items():
            total_emission += count * emission_factors[vehicle_type] * speed_factor
        
        return total_emission / 1000  # Convert to kg CO2
    
    def prepare_features(self, timestamp, weather_data, event_data, historical_data):
        temporal_features = self.extract_temporal_features(timestamp)
        
        features = [
            temporal_features['hour'],
            temporal_features['day_of_week'],
            temporal_features['month'],
            temporal_features['is_weekend'],
            weather_data.get('temperature', 20),
            1 if weather_data.get('condition') == 'rain' else 0,
            1 if event_data.get('nearby_event') else 0,
            historical_data.get('avg_traffic', 50)
        ]
        
        return np.array(features)`}
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prediction" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-orange-600" />
                  <CardTitle>Real-time Prediction Engine</CardTitle>
                </div>
                <CardDescription>
                  Live traffic and emission prediction system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                  {`import asyncio
import json
from datetime import datetime, timedelta
import redis

class PredictionEngine:
    def __init__(self, model, data_processor):
        self.model = model
        self.data_processor = data_processor
        self.redis_client = redis.Redis(host='localhost', port=6379, db=0)
        self.prediction_cache = {}
    
    async def predict_traffic(self, location_id, target_datetime):
        cache_key = f"prediction:{location_id}:{target_datetime}"
        
        # Check cache first
        cached_result = self.redis_client.get(cache_key)
        if cached_result:
            return json.loads(cached_result)
        
        # Prepare input features
        features = await self._prepare_prediction_features(location_id, target_datetime)
        
        # Make prediction
        prediction = self.model.predict(features)
        
        # Calculate confidence score
        confidence = self._calculate_confidence(features, prediction)
        
        result = {
            'location_id': location_id,
            'prediction_time': target_datetime.isoformat(),
            'vehicle_count': max(0, int(prediction['vehicle_count'])),
            'traffic_level': max(0, min(100, prediction['traffic_level'])),
            'carbon_emission': max(0, prediction['carbon_emission']),
            'confidence': confidence,
            'generated_at': datetime.now().isoformat()
        }
        
        # Cache result for 5 minutes
        self.redis_client.setex(cache_key, 300, json.dumps(result))
        
        return result
    
    async def _prepare_prediction_features(self, location_id, target_datetime):
        # Get historical data for the past 24 hours
        historical_data = await self._get_historical_data(location_id, target_datetime)
        
        # Get weather forecast
        weather_data = await self._get_weather_forecast(target_datetime)
        
        # Check for events
        event_data = await self._check_nearby_events(location_id, target_datetime)
        
        # Prepare feature sequence
        feature_sequence = []
        for i in range(24):  # 24-hour sequence
            timestamp = target_datetime - timedelta(hours=23-i)
            features = self.data_processor.prepare_features(
                timestamp, weather_data, event_data, historical_data[i]
            )
            feature_sequence.append(features)
        
        return np.array(feature_sequence)
    
    def _calculate_confidence(self, features, prediction):
        # Simple confidence calculation based on feature stability
        feature_variance = np.var(features, axis=0)
        stability_score = 1 / (1 + np.mean(feature_variance))
        
        # Adjust based on prediction values
        prediction_confidence = 1.0
        if prediction['traffic_level'] > 80:  # High traffic
            prediction_confidence *= 0.9
        
        return min(1.0, stability_score * prediction_confidence)
    
    async def batch_predict(self, locations, target_datetime):
        tasks = [
            self.predict_traffic(location_id, target_datetime)
            for location_id in locations
        ]
        
        results = await asyncio.gather(*tasks)
        return {loc: result for loc, result in zip(locations, results)}
    
    def get_traffic_status(self, traffic_level):
        if traffic_level < 30:
            return "Light"
        elif traffic_level < 60:
            return "Moderate"
        elif traffic_level < 80:
            return "Heavy"
        else:
            return "Severe"`}
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-purple-600" />
                  <CardTitle>API Integration Layer</CardTitle>
                </div>
                <CardDescription>
                  RESTful API for accessing predictions and real-time data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                  {`from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel
from datetime import datetime, timedelta
import uvicorn

app = FastAPI(title="Traffic Prediction API", version="1.0.0")

class PredictionRequest(BaseModel):
    location_id: str
    target_datetime: datetime
    include_carbon: bool = True

class PredictionResponse(BaseModel):
    location_id: str
    prediction_time: str
    vehicle_count: int
    traffic_level: float
    traffic_status: str
    carbon_emission: float
    confidence: float
    generated_at: str

@app.post("/predict", response_model=PredictionResponse)
async def predict_traffic(request: PredictionRequest):
    try:
        # Validate input
        if request.target_datetime < datetime.now():
            raise HTTPException(status_code=400, detail="Cannot predict past events")
        
        if request.target_datetime > datetime.now() + timedelta(hours=48):
            raise HTTPException(status_code=400, detail="Prediction range limited to 48 hours")
        
        # Make prediction
        prediction = await prediction_engine.predict_traffic(
            request.location_id, 
            request.target_datetime
        )
        
        # Add traffic status
        prediction['traffic_status'] = prediction_engine.get_traffic_status(
            prediction['traffic_level']
        )
        
        return PredictionResponse(**prediction)
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/locations/{location_id}/current")
async def get_current_traffic(location_id: str):
    try:
        current_time = datetime.now()
        prediction = await prediction_engine.predict_traffic(location_id, current_time)
        
        return {
            "location_id": location_id,
            "current_time": current_time.isoformat(),
            "vehicle_count": prediction['vehicle_count'],
            "traffic_level": prediction['traffic_level'],
            "traffic_status": prediction_engine.get_traffic_status(prediction['traffic_level']),
            "carbon_emission": prediction['carbon_emission']
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/locations/{location_id}/forecast")
async def get_traffic_forecast(location_id: str, hours: int = 24):
    try:
        if hours > 48:
            raise HTTPException(status_code=400, detail="Forecast limited to 48 hours")
        
        current_time = datetime.now()
        forecasts = []
        
        for hour in range(1, hours + 1):
            target_time = current_time + timedelta(hours=hour)
            prediction = await prediction_engine.predict_traffic(location_id, target_time)
            forecasts.append(prediction)
        
        return {
            "location_id": location_id,
            "forecast_generated_at": current_time.isoformat(),
            "forecasts": forecasts
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)`}
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
