FROM node:22

WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json .
# Install the dependencies
RUN npm ci
# Copy the source code of app
COPY src/index.js index.js
# Expose port app
EXPOSE 3000
# start app
CMD ["node", "index.js"]