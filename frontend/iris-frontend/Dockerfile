# 1) Étape de build (on utilise Node)
FROM node:16-alpine AS build

# 2) Définir le WORKDIR
WORKDIR /app

# 3) Copier package.json et package-lock.json
COPY package*.json ./

# 4) Installer dépendances
RUN npm install

# 5) Copier tout le code du front
COPY . .

# 6) Construire l’app React (cela crée un dossier "build/")
RUN npm run build

# 7) Étape finale : servir avec Nginx
FROM nginx:alpine
# On copie le contenu du build généré à l'étape précédente
COPY --from=build /app/build /usr/share/nginx/html
# Expose le port 80 (celui de Nginx)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
