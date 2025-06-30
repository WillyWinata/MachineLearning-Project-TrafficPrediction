from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os

app = Flask(__name__)

CORS(app, supports_credentials=True, origins=["http://localhost:5173"])

print(os.getcwd())
model = joblib.load('./traffic_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json(force=True)
        feature_order = [
            "relative_humidity_2m (%)",
            "precipitation (mm)",
            "cloud_cover (%)",
            "Hour",
            "Day",
            "Month"
        ]
        
        features = np.array([data[key] for key in feature_order]).reshape(1, -1)
        
        prediction = model.predict(features)
        return jsonify({'prediction': prediction.tolist()})
    
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(port=5000, debug=True)
