package com.api.marketservice.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Market {

    @Id
    @GeneratedValue
    private Integer id;
    private String type;
    private Date date;
    private Integer cardId;
    private Integer userId;

    public Market() {
	}

    public Market(int id,String type, Date date, int cardId, int userId) {
		super();
		this.id=id;
		this.type = type;
		this.date = date;
        this.cardId = cardId;
        this.userId = userId;
	}

    public Integer getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getCardId() {
        return cardId;
    }

    public void setCardId(Integer cardId) {
        this.cardId = cardId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}
