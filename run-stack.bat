cd ./www
call gradlew.bat build --no-daemon
cd ..

cd ./api
call gradlew.bat build --no-daemon
cd ..

docker build -t jhops881/www-server-image:dev ./www
docker push jhops881/www-server-image:dev

docker build -t jhops881/api-server-image:dev ./api
docker push jhops881/api-server-image:dev

docker compose pull
docker compose up