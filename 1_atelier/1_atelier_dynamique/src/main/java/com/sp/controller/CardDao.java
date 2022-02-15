package com.sp.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.sp.model.Card;

@Service
public class CardDao {
	private List<Card> cardList;

	public CardDao() {
		cardList=new ArrayList<>();
	}

	public List<Card> getCardList() {
		return this.cardList;
	}
	public Card getCardByName(String name){
		for (Card cardBean : cardList) {
			if(cardBean.getName().equals(name)){
				return cardBean;
			}
		}
		return null;
	}

	public Card addCard(String name,String description,String family,String affinity,String imgUrl, String energy, String hp, String defence, String attack, String price) {
		Card p=new Card(name, description, family, affinity, imgUrl, energy, hp, defence, attack, price);
		this.cardList.add(p);
		return p;
	}
}

