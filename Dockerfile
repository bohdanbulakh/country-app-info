FROM node:22-alpine AS alpine

WORKDIR /app
COPY . .
RUN npm install
RUN npx prisma generate
RUN npm run build

FROM node:22-alpine AS runnner

COPY --from=alpine /app/dist /app/dist
COPY --from=alpine /app/generated /app/generated
COPY --from=alpine /app/node_modules /app/node_modules
WORKDIR /app

CMD node dist/main
