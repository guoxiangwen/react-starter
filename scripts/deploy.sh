#!/bin/bash
echo "准备docker build run"
docker build -t spa/nginx .
docker run --name react-starter -d -p 8080:8080 spa/nginx