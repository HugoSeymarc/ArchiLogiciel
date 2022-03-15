package com.app.service;

import java.util.Date;
import java.util.Optional;

import com.app.entity.Card;
import com.app.entity.Market;
import com.app.entity.User;
import com.app.repository.CardRepository;
import com.app.repository.MarketRepository;
import com.app.repository.UserRepository;

import org.springframework.stereotype.Service;

@Service
public class MarketService {
    private final CardRepository cRepository;
	private final UserRepository uRepository;
    private final MarketRepository mRepository;

	public MarketService(CardRepository cRepository, UserRepository uRepository, MarketRepository mRepository) {
		this.cRepository = cRepository;
		this.uRepository = uRepository;
        this.mRepository = mRepository;
	}

    public Market buy(Market m) {
        Optional<Card> cOpt = cRepository.findById(m.getCard().getId());
		Card c = cOpt.get();

        Optional<User> uOpt = uRepository.findById(m.getUser().getId());
		User u = uOpt.get();

        if(m.getUser().getAmount() >= c.getPrice()){
            m.setType("buy");
            m.setDate(new Date());
            c.setUser(u);
            m.setUser(u);
            
            User u2 = c.getUser();
            u2.setAmount(u2.getAmount() + c.getPrice());
            u.setAmount(u.getAmount() - c.getPrice());
            m.setCard(c);
            
            return mRepository.save(m);
        }
        return null;
	}

    public Market sell(Market m) {
        Optional<Card> cOpt = cRepository.findById(m.getCard().getId());
		Card c = cOpt.get();

        Optional<User> uOpt = uRepository.findById(m.getUser().getId());
		User u = uOpt.get();

        m.setType("sell");
        m.setDate(new Date());
        m.setUser(u);
        m.setCard(c);
        c.setUser(null);

        return mRepository.save(m);
	}

}
