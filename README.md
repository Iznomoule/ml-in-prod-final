# Machine Learning in Production Final Project

This project demonstrates the deployment of a machine learning model for Iris flower classification into a production environment. It integrates data versioning, model tracking, API development, frontend interaction, CI/CD, and cloud deployment.

## Overview
This application predicts the species of Iris flowers based on their features (sepal and petal lengths and widths). The project showcases the full machine learning production lifecycle:
- Data versioning and management using **DVC** (stored on Google Drive).
- Model training and tracking with **MLflow**.
- A **FastAPI** backend serving the trained model as an API.
- A **React** frontend for user interaction.
- Automated deployment with **GitHub Actions** and containerization using **Docker**.
- Cloud deployment on **Railway**.

## Architecture
Dataset (Google Drive) → DVC (Data Version Control) → MLflow (Model Registry) → Backend (FastAPI) → Frontend (React) → User Interaction

## Features
- **Dataset Versioning**: Manage dataset versions with DVC and store them on Google Drive.
- **Model Training and Registry**: Train a RandomForestClassifier and log it to MLflow.
- **Backend API**: Serve predictions using FastAPI.
- **Frontend Interface**: Provide a simple React-based form for inputs and predictions.
- **CI/CD Pipelines**: Automate testing, building, and deployment with GitHub Actions.
- **Cloud Deployment**: Deploy backend and frontend to Railway with Docker containers.

## How to Run the Project

### Prerequisites
- Python 3.9+ 
- Node.js and npm
- Docker installed
- DVC installed globally

### Clone the Repository
```
git clone https://github.com/Iznomoule/ml-in-prod-final.git
cd ml-in-prod-final
```

### Backend Setup
1. Navigate to the `app` directory:
```
cd app
```
2. Install the Python dependencies:
```
pip install -r requirements.txt
```
3. Run the backend locally:
```
uvicorn main:app --host 127.0.0.1 --port 8000
```

### Frontend Setup
1. Navigate to the frontend directory:
```
cd frontend/iris-frontend
```
2. Install the Node.js dependencies:
```
npm install
```
3. Start the React development server:
```
npm start
```

### Run with Docker
1. Build the Docker images:
```
docker build -t ml-in-prod-backend -f app/Dockerfile ./app
docker build -t ml-in-prod-frontend -f frontend/iris-frontend/Dockerfile ./frontend/iris-frontend
```
2. Start the containers:
```
docker-compose up
```

### Access the Application (locally)
- **Frontend**: Visit [http://localhost:3000](http://localhost:3000).
- **Backend**: API documentation is available at [http://localhost:8000/docs](http://localhost:8000/docs).

## Network Access (deployement)
The application is deployed on Railway:
- **Backend**: [https://ml-in-prod-final-backend-production.up.railway.app](https://ml-in-prod-final-backend-production.up.railway.app)
- **Frontend**: [https://ml-in-prod-final-frontend-production.up.railway.app](https://ml-in-prod-final-frontend-production.up.railway.app)

## Project Structure
```
ml-in-prod-final/
├── app/                     # Backend with FastAPI
├── frontend/                # Frontend with React
├── data/                    # Dataset managed with DVC
├── .github/workflows/       # CI/CD pipelines
├── Dockerfile               # Backend Dockerfile
├── docker-compose.yml       # Docker Compose configuration
└── README.md                # Project documentation
```

## Technologies Used
- **FastAPI**: Backend API framework.
- **React**: Frontend library.
- **MLflow**: Model tracking and registry.
- **DVC**: Data version control.
- **Docker**: Containerization of services.
- **GitHub Actions**: CI/CD automation.
- **Railway**: Cloud deployment platform.

## Future Improvements
- Add user authentication for secure access.
- Enhance the frontend design.
- Scale the application using Kubernetes.

# EL FERDI Zakaria
# BELAHBIB Amine
# DIMACHKIE Remy
hshshsh
