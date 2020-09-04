docker stop sb-nginx &> /dev/null
docker rm sb-nginx &> /dev/null
docker run $1 -v $(pwd)/conf:/etc/nginx/conf.d -v $(pwd)/data:/data -p 8080:80 --name sb-nginx nginx:latest
