FROM node
WORKDIR /app

RUN npm i -g pnpm
COPY ./package.json ./pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .

EXPOSE 3000

RUN pnpm build

CMD ["pnpm", "start"]
