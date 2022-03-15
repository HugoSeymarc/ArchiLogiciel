package com.app.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import com.app.entity.Card;
import com.app.entity.User;
import com.app.repository.CardRepository;
import com.app.repository.UserRepository;

import org.springframework.stereotype.Service;

@Service
public class CardService {
    private final CardRepository cRepository;
	private final UserRepository uRepository;

	public CardService(CardRepository cRepository, UserRepository uRepository) {
		this.cRepository = cRepository;
		this.uRepository = uRepository;
	}

	public Card getCard(int id) {
		Optional<Card> cOpt = cRepository.findById(id);
		return cOpt.get();
	}

	public List<Card> getCards() {
		List<Card> cL = new ArrayList<Card>();
		for (Card c : cRepository.findAll()) {
			if(c.getUser() == null) {
				cL.add(c);
			}
		}

		return cL;

	}

	public Collection<Card> getUserCards(int id) {
		List<Card> cL = new ArrayList<Card>();
		for (Card c : cRepository.findByUserId(id)) {
			cL.add(c);
		}

		return cL;
	}

	public Card addCard(Card c) {
		Optional<User> uOpt = uRepository.findById(c.getUser().getId());
		User user = uOpt.get();
		c.setUser(user);
		return cRepository.save(c);
	}
}
