# Fase de build com Java 21 e Maven
FROM maven:3.9.6-eclipse-temurin-21 AS build

COPY src /app/src
COPY pom.xml /app

WORKDIR /app
RUN mvn clean install -DskipTests

# Fase de runtime com JRE 21
FROM eclipse-temurin:21-jre

COPY --from=build /app/target/*.jar /app/app.jar

WORKDIR /app
EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
