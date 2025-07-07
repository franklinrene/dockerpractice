# 1. Build our production bundle

# Het is altijd goed om te beginnen met een lichte basis image
FROM node:22-alpine AS build

# Selecteren van de directory waar de boel naar toe geschreven moet worden
WORKDIR /app

# Kopieer de package.json en package-lock.json bestanden naar de werkdirectory
# Dit zorgt ervoor dat we de dependencies kunnen installeren zonder de hele app te kopiëren
# Dit versnelt de build omdat Docker deze laag kan cachen
# en alleen opnieuw hoeft te bouwen als deze bestanden veranderen
# Dit is een goede praktijk om de build tijd te verkorten
# en de image kleiner te maken
COPY package*.json .
# Installeren van de dependencies
RUN npm ci

# Kopieer de rest van de applicatie code naar de werkdirectory
COPY . .
# Dit zal de React app bouwen en de output plaatsen in de build directory
# Dit is de standaard output directory voor Create React App
RUN npm run build

# 2. Serve the bundle with an HTTP server
FROM nginx:1.27.0

COPY --from=build /app/build /usr/share/nginx/html