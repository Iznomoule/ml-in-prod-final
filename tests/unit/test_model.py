import pytest
import numpy as np
from sklearn.ensemble import RandomForestClassifier

@pytest.fixture
def dummy_model():
    # Modèle de test simple
    model = RandomForestClassifier(n_estimators=10, random_state=42)
    X = np.array([[1, 2], [3, 4], [5, 6], [7, 8]])
    y = np.array([0, 1, 0, 1])
    model.fit(X, y)
    return model

def test_model_prediction(dummy_model):
    # Vérifie si le modèle prédit correctement
    prediction = dummy_model.predict([[1, 2]])
    assert prediction[0] == 0
