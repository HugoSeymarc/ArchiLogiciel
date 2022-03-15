package com.app.controller;

import java.util.Collection;
import java.util.List;

import com.app.entity.Card;
import com.app.service.CardService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://127.0.0.1:8081")
@RestController
public class CardRestCrt {

    private final CardService cService;
	
	public CardRestCrt(CardService cService) {
		this.cService=cService;
	}
    
    @GetMapping("/cards")
    public List<Card> getCards(){
		return cService.getCards();	
	}

	@GetMapping("/cards/{userid}")
    public Collection<Card> getUserCards(@PathVariable String userid){
		int current_id=Integer.valueOf(userid);
		return cService.getUserCards(current_id);
	}

    @GetMapping("/card/{id}")
	public Card getCard(@PathVariable String id){
		int current_id=Integer.valueOf(id);
		return cService.getCard(current_id);
	}
	
	@PostMapping("/card")
	public Card addCard(@RequestBody Card c){
		return cService.addCard(c);
	}
}
