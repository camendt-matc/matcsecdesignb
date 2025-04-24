cd ./www/backend
call gradlew.bat build --no-daemon
cd ../..

docker build -t jhops881/www-backend:dev -f ./www/backend/dev.dockerfile ./www/backend
docker push jhops881/www-backend:dev

docker build -t jhops881/www-frontend:dev -f ./www/frontend/dev.dockerfile ./www/frontend
docker push jhops881/www-frontend:dev

docker build -t jhops881/reverse-proxy:dev -f ./reverse-proxy/dev.dockerfile ./reverse-proxy
docker push jhops881/reverse-proxy:dev

docker compose pull
docker compose up