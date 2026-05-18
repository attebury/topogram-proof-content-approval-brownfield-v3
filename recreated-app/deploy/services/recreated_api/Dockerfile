FROM node:22-alpine
WORKDIR /app

COPY package.json ./
RUN npm install

COPY tsconfig.json ./
COPY prisma ./prisma
COPY src ./src

RUN npm exec -- prisma generate --schema prisma/schema.prisma

ENV PORT=3100
EXPOSE 3100

CMD ["npm", "run", "dev"]
