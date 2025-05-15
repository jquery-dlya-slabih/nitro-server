FROM node:22-slim AS build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY . .

EXPOSE 3000

RUN pnpm install && pnpm build

FROM node:22-slim

RUN corepack enable

WORKDIR /app

ENV NODE_ENV=produdction

COPY --from=build /app/package.json /app/pnpm-lock.yaml /app/

RUN pnpm install --prod

COPY --from=build /app/.output /app/.output

CMD ["pnpm", "prod"]
