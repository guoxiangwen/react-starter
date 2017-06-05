FROM nginx:alpine
MAINTAINER guoxiansheng "297236521@qq.com"
ENV TZ=Asia/Shanghai
COPY ./build /data/apps/myapp
COPY ./nginx.conf /etc/nginx/nginx.conf