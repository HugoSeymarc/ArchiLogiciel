package com.api.playservice.service;

import java.util.Optional;

import com.api.playservice.entity.Card;
import com.api.playservice.entity.User;
import com.api.playservice.entity.Play;
import com.api.playservice.repository.PlayRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PlayService {
	private final PlayRepository pRepository;

	public PlayService(PlayRepository pRepository) {
		this.pRepository = pRepository;
	}

	public Play play(Play p) {

		RestTemplate restTemplate = new RestTemplate();
	
		String cardResourceUrl = "http://localhost:8080/card";
	
		String userResourceUrl = "http://localhost:8082/user";
	
		ResponseEntity<Card> responseUser1Card = restTemplate.getForEntity(cardResourceUrl + "/" + p.getUser1CardId(), Card.class);
	
		ResponseEntity<User> responseUser1 = restTemplate.getForEntity(userResourceUrl + "/" + p.getUser1Id(), User.class);

		ResponseEntity<Card> responseUser2Card = restTemplate.getForEntity(cardResourceUrl + "/" + p.getUser2CardId(), Card.class);
	
		ResponseEntity<User> responseUser2 = restTemplate.getForEntity(userResourceUrl + "/" + p.getUser2Id(), User.class);

		Card card1 = responseUser1Card.getBody();
        User user1 = responseUser1.getBody();
		Card card2 = responseUser2Card.getBody();
        User user2 = responseUser2.getBody();

		Integer players;

		

		return p;
	}
}
