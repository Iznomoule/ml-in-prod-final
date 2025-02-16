import mlflow
import mlflow.sklearn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],
)

class IrisInput(BaseModel):
    sepal_length: float
    sepal_width: float
    petal_length: float
    petal_width: float

mlflow.set_tracking_uri("https://dagshub.com/Iznomoule/ml-in-production-final-dags.mlflow")

try:
    model_uri = "runs:/2f7e59b059cb4a59a5d8066e2617ee8f/model"
    model = mlflow.sklearn.load_model(model_uri)
except Exception as e:
    print(f"Erreur lors du chargement du modèle: {e}")
    model = None

@app.get("/")
def read_root():
    return {"message": "Hello, this is our ML model API"}

@app.post("/predict")
def predict_iris(input_data: IrisInput):
    if model is None:
        return {"error": "Model not loaded"}
    features = [[
        input_data.sepal_length,
        input_data.sepal_width,
        input_data.petal_length,
        input_data.petal_width
    ]]
    prediction = model.predict(features)
    return {"prediction": int(prediction[0])}
