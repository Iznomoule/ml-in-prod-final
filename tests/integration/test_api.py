import pytest
from app.main import app  # Importez votre application FastAPI
from fastapi.testclient import TestClient

client = TestClient(app)

def test_api_prediction():
    # Envoi de données à l'API pour tester
    payload = {
        "sepal_length": 5.1,
        "sepal_width": 3.5,
        "petal_length": 1.4,
        "petal_width": 0.2
    }
    response = client.post("/predict", json=payload)
    assert response.status_code == 200
    assert "prediction" in response.json()
