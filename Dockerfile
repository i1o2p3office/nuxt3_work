FROM node:18-alpine

# 創建並前往根目錄
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# 將src底下檔案全部複製到 /
# 左邊是本機目標，右邊為容器路徑
COPY src/. .

RUN npm ci && npm cache clean --force
RUN npm run build

# customize port 80
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]