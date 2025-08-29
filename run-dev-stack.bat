docker build -t jhops881/backend:dev -f ./backend/dev.dockerfile ./backend
docker push jhops881/backend:dev

docker build -t jhops881/frontend:dev -f ./frontend/dev.dockerfile ./frontend
docker push jhops881/frontend:dev

docker build -t jhops881/reverse-proxy:dev -f ./reverse-proxy/dev.dockerfile ./reverse-proxy
docker push jhops881/reverse-proxy:dev

docker compose pull
docker compose up