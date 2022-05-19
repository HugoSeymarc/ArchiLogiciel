package com.api.roomservice.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Room {
    
    @Id
    @GeneratedValue
    private Integer id;
    private Integer userId;
    private String userName;
    private float bet;

    
    public Room() {
	}

    public Room(int id,int userId, String userName, float bet) {
		super();
		this.id=id;
		this.userName = userName;
		this.userId = userId;
		this.bet = bet;
	}

    public Integer getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public float getBet() {
        return bet;
    }

    public void setBet(float bet) {
        this.bet = bet;
    }
}
