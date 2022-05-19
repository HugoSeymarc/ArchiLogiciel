package com.api.cardservice.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import com.api.cardservice.entity.Card;
import com.api.cardservice.repository.CardRepository;

import org.springframework.stereotype.Service;

@Service
public class CardService {
	private final CardRepository cRepository;

	public CardService(CardRepository cRepository) {
		this.cRepository = cRepository;
	}

	public List<Card> getCards() {
		List<Card> cL = new ArrayList<Card>();
		for (Card c : cRepository.findAll()) {
			cL.add(c);
		}
		return cL;

	}

	public Card getCard(int id) {
		Optional<Card> cOpt = cRepository.findById(id);
		return cOpt.get();
	}

	public Collection<Card> getUserCards(int id) {
		List<Card> cL = new ArrayList<Card>();
		for (Card c : cRepository.findByUserId(id)) {
			cL.add(c);
		}

		return cL;
	}

	public Card addCard(Card c) {
		return cRepository.save(c);
	}
}
