FROM node:18-alpine

# 前往根目錄 /
WORKDIR /

# 將src底下檔案全部複製到 /
# 左邊是本機目標，右邊為容器路徑
COPY src/. ./

RUN npm install
RUN npm run build

# customize port 80
ENV HOST 0.0.0.0
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]