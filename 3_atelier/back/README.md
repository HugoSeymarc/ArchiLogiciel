"http://localhost:8080/users";

Pour modifier les acces BDD:
- Aller dans chaque micro-service -> src/main/resources/application.properties
- Modifier spring.datasource.username et spring.datasource.password qui sont les accès à vottre base de données

Il faut ensuite créer pour chaque micro service la bdd qui correspond. EX: room-service

- 8080 = card
- 8081 = market
- 8082 = user
- 8083 = auth
- 8084 = room
- 8085 = play