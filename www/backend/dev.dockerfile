FROM gcr.io/distroless/java21-debian12
ARG JAR_FILE=./build/libs/www-app.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT [ "java", "-jar", "/app.jar", "--spring.profiles.active=dev" ]