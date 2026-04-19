# syntax=docker/dockerfile:1
FROM node:24-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

FROM node:24-alpine AS runtime
WORKDIR /app
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000
COPY --from=builder /app/.output /app/.output
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
