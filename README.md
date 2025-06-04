# Predicting Traffic Density based on the Time, Day, and Weather

## Business Understanding

Jakarta is one of the most densely populated cities in the world, and traffic congestion has become a major issue, especially in key commercial zones like the Thamrin area. This congestion not only causes delays and economic inefficiencies but also contributes significantly to air pollution through carbon emissions from vehicles. The rising concerns about climate change, urban stress, and transportation inefficiency make it crucial for cities like Jakarta to explore smart and data-driven solutions. From a business and policy perspective, having accurate traffic and emission forecasts can support better urban management, optimize logistics, reduce fuel consumption, and even influence future infrastructure investments.

This research addresses a real-world need by providing a predictive model that could be integrated into city planning tools, mobile navigation apps, or environmental monitoring systems. For businesses operating in Jakarta—especially those in transportation, delivery, or ride-hailing services—knowing traffic density patterns and emission levels in advance can help optimize routes, improve service efficiency, and reduce operational costs. Meanwhile, for local governments and policymakers, such data can support evidence-based decisions for traffic regulations, emission control policies, or the promotion of alternative transport modes. Ultimately, this project is not only a technical challenge but also a step toward smarter, greener, and more livable cities.

## Objective

The main objective of this research is to develop a Machine Learning model that can accurately predict traffic density and carbon emissions in the Thamrin area of Jakarta based on time and day inputs. Thamrin is one of the busiest areas in the city, with high levels of traffic congestion and air pollution, especially during peak hours. By building a predictive model, this study hopes to identify patterns and trends that can help both individuals and city planners make more informed decisions about travel and environmental management.

This research also aims to contribute to the broader goal of creating smarter and more sustainable cities. By forecasting traffic and emissions, the model can be used to support public transportation planning, reduce traffic jams, and improve air quality. In the long run, this kind of data-driven approach could help reduce the environmental footprint of urban transportation and improve the quality of life for residents. The model will be trained using historical data and evaluated for its accuracy and reliability, with the hope that it can be implemented in real-world applications such as smart traffic systems or urban planning dashboards.

## About DataSet

The dataset we used for training this model, is taken from Traffic and Emission data, and The Traffic data collected is from Jakarta Transportation Department, and is collected on Thamrin, which is the center of of most businesses and job areas making this place most efficient place to calculate the traffic since its the Worst case scenario for the traffic. The emission data is also collected from Bundaran HI and by the ministry of environment and Forestry.

This data set contains 8,760 rows representing hourly traffic data over one full year (365 days × 24 hours). So the dataset contains Type of vehicles that passes through and the direction of travel, along with its combined traffic, speed of the vehicles and congestion levels.

Here we also use another dataset for Weather, the dataset spans over the course of a year from 2023 and covers one full year as well (365 days x 24 hours). This dataset has the temperature, humidity, precipitation, wind speed, cloud cover, and surface pressure to identify the weather of the current area.

## Data Preparation

Here We convert Strings to Numeric Values, some numeric columns are stored as stirring with (,) and convert them to numeric types, and invalid values become NaN.

We convert the dates to proper Datetime format.

The datasets are both merged to one dataset aligning the date and time

Here We extract the time and date columns to separate Hour, Day, Month columns

Here we use Boxplots to plot
out the data to detect Outliers

Here we use Histograms to plot out the datas to understand the data distributions

Here We address the missing data using a cluster specific median strategy,We fill the missing value with the median to make clustering possible, Then we use gaussian Mixture Model to detect traffic patterns or clusters. For each missing value we replace it with the median value of its cluster.

Here We did feature Selection for model Training.
And Data Split for Training and Testing the model.

## Modeling

After preprocessing the traffic and weather data, the next step was to train and evaluate machine learning models to predict Total_Total, which represents the total traffic volume at a given time. Here's how the modeling process was executed:
Feature Selection: The following input features were used to train the models:
['relative_humidity_2m (%)', 'precipitation (mm)', 'cloud_cover (%)', 'Hour', 'Day', 'Month'].
These features were chosen to help the model learn how weather conditions and time affect traffic volume.

Target Variable: The target we wanted to predict was 'Total_Total'.
Train-Test Split: The dataset was split into training and testing sets using train_test_split() to ensure the model was evaluated on unseen data.
Model Pipelines: Four different regression models were prepared using scikit-learn Pipelines, each with preprocessing steps and hyperparameter tuning:

Random Forest Regressor:
Used SelectKBest for feature selection and RandomForestRegressor for prediction.
Tuned parameters: n_estimators, max_depth, min_samples_split, and number of selected features (k).
XGBoost Regressor:
Applied StandardScaler and used XGBRegressor.
Tuned: n_estimators, learning_rate, max_depth, subsample, and colsample_bytree.
Support Vector Regressor (SVR):
Scaled data using StandardScaler and used polynomial kernel.
Tuned: degree, C (regularization), and epsilon.
Linear Regression:
Also used StandardScaler.
Tested with/without intercept using fit_intercept.

## Model Training & Tuning:

Used GridSearchCV for each model to find the best hyperparameters via 5-fold cross-validation.
Evaluation metric: negative mean squared error (lower is better).
Parallelized computation with n_jobs=-1.

## Evaluation

After training, each model was evaluated on the test set using:
MAE (Mean Absolute Error)
RMSE (Root Mean Squared Error)
R² Score (explained variance)
Model Comparison:
All models were compared using their evaluation scores on the test set.
This allowed identification of the best-performing model for traffic volume prediction.
Model Saving:
The best model (XGBoost in this case) was saved using joblib so it can be reused without retraining.
The features used (X_features) were also saved in a separate JSON file for consistency during deployment.
