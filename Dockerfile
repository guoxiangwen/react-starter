FROM nginx:alpine
MAINTAINER guoxiansheng "297236521@qq.com"
ENV TZ=Asia/Shanghai
COPY ./build /build
COPY ./nginx.conf /etc/nginx/nginx.conf