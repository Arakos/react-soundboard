docker stop sb-nginx &> /dev/null
docker rm sb-nginx &> /dev/null
docker build -t sb-nginx . 
docker run -v $(pwd)/sounds:/sounds -p 8080:80 --name sb-nginx sb-nginx
