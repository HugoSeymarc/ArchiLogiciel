TO DO: Renommer user-service

	RestTemplate restTemplate = new RestTemplate();
	String userResourceUrl
	  = "http://localhost:8080/users";
	ResponseEntity<String> response
	  = restTemplate.getForEntity(userResourceUrl, String.class);


- 8080 = card
- 8081 = market
- 8082 = user
- 8083 = auth
- 8084 = room
- 8085 = play