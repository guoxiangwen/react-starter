# [![Build Status](https://travis-ci.org/guoxiangwen/react-starter.svg?branch=webpack2)](https://travis-ci.org/guoxiangwen/react-starter)

## react-starter

> 基于react webpack2 es6 less babel jest

## 准备工作

* 1.安装nodejs[传送门](https://nodejs.org/en/)
* 2.设置淘宝镜像(`npm config set registry https://registry.npm.taobao.org`翻墙的话，可以忽略)
* 3.安装docker.

## Build Setup

### 安装依赖

npm install --安装(注意:chromedriver如果没有翻墙的话，是安装不成功的,需要单独安装
npm install chromedriver--chromedriver_cdnurl=`https://npm.taobao.org/mirrors/chromedriver`))

### 启动

npm start

### 打包

npm run build

### 单元测试

npm run unit

### e2e测试

npm run e2e

### 所有测试

npm test

### 发布运行

npm run deploy

完成之后打开浏览器输入`localhost:8080`

```bash
docker build -t spa/nginx .
docker run --name react-starter -d -p 8080:8080 spa/nginx
```

### 相关阅读

* 1.[NightWatch](http://nightwatchjs.org/)
* 2.[selenium](www.seleniumhq.org/)
