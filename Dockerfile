# 第一阶段：构建阶段
FROM node:20 AS builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 以利用 Docker 缓存机制
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制应用程序源代码
COPY . .

# 构建应用程序
RUN npm run build

# 第二阶段：生产阶段
FROM nginx

# 复制构建好的文件到 Nginx 的默认服务目录
COPY --from=builder /app/build /usr/share/nginx/html

# 复制自定义 Nginx 配置
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
