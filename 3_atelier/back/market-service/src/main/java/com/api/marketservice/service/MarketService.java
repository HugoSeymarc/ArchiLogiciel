package com.api.marketservice.service;

import java.util.Date;

import com.api.marketservice.entity.Card;
import com.api.marketservice.entity.Market;
import com.api.marketservice.entity.User;
import com.api.marketservice.repository.MarketRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MarketService {
    private final MarketRepository mRepository;

	public MarketService(MarketRepository mRepository) {
        this.mRepository = mRepository;
	}

    public Market buy(Market m) {
        
        RestTemplate restTemplate = new RestTemplate();

        String cardResourceUrl
          = "http://localhost:8080/card";

        String userResourceUrl
          = "http://localhost:8082/user";

        ResponseEntity<Card> responseCard
          = restTemplate.getForEntity(cardResourceUrl+ "/"+ m.getCardId(), Card.class);

        ResponseEntity<User> responseUser1
          = restTemplate.getForEntity(userResourceUrl+ "/"+ m.getUserId(), User.class);
        
          
        Card card = responseCard.getBody();
        User user1 = responseUser1.getBody();
          
        ResponseEntity<User> responseUser2
          = restTemplate.getForEntity(userResourceUrl+ "/"+ card.getUserId(), User.class);

        User user2 = responseUser2.getBody();

        System.out.println(card);

        if(user1.getAmount() >= card.getPrice()){
            m.setType("buy");
            m.setDate(new Date());
            card.setUserId(user1.getId());
            m.setUserId(user1.getId());
            
            user2.setAmount(user2.getAmount() + card.getPrice());
            user1.setAmount(user1.getAmount() - card.getPrice());
            m.setCardId(card.getId());
            
            return mRepository.save(m);
        }
        return null;
	}

    public Market sell(Market m) {

        RestTemplate restTemplate = new RestTemplate();

        String cardResourceUrl
          = "http://localhost:8080/card";

        String userResourceUrl
          = "http://localhost:8080/user";

        ResponseEntity<Card> responseCard
          = restTemplate.getForEntity(cardResourceUrl+ "/"+ m.getCardId(), Card.class);

        ResponseEntity<User> responseUser1
          = restTemplate.getForEntity(userResourceUrl+ "/"+ m.getUserId(), User.class);
        
          
        Card card = responseCard.getBody();
        User user1 = responseUser1.getBody();

        m.setType("sell");
        m.setDate(new Date());
        m.setUserId(user1.getId());
        m.setCardId(card.getId());
        card.setUserId(null);

        return mRepository.save(m);
	}
}
