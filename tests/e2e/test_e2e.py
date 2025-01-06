import requests

def test_e2e_api_prediction():
    # URL de l'API déployée (remplacez localhost si c'est sur le cloud)
    url = "http://127.0.0.1:8000/predict"
    payload = {
        "sepal_length": 5.1,
        "sepal_width": 3.5,
        "petal_length": 1.4,
        "petal_width": 0.2
    }
    response = requests.post(url, json=payload)
    assert response.status_code == 200
    assert "prediction" in response.json()
