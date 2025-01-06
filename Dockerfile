# 1. Choix de l'image de base
FROM python:3.9-slim

# 2. Définir le working directory
WORKDIR /app

# 3. Copier requirements et installer les dépendances
COPY app/requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

# 4. Copier le code
COPY app/ /app/

# 5. Exposer le port (optionnel, utile pour la doc)
EXPOSE 8000

# 6. Commande de démarrage
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
