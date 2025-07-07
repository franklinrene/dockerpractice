# build stage
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci

COPY src src
COPY tsconfig.json tsconfig.json

RUN npm run build

# deps stage ensure dependencies only for runtime
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json .
RUN npm ci --only=production

# distroless stage
FROM gcr.io/distroless/nodejs22
WORKDIR /app
COPY --from=deps /app/node_modules node_modules
COPY --from=builder /app/dist dist

ENV PORT=3000

CMD ["dist/index.js"]

