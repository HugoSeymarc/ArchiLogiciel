package com.api.playservice.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Play {
    
    @Id
    @GeneratedValue
    private Integer id;
    private Integer user1Id;
    private Integer user2Id;
    private Integer user1CardId;
    private Integer user2CardId;

    
    public Play() {
	}

    public Play(int id,Integer user1Id, Integer user2Id, Integer user1CardId, Integer user2CardId) {
		super();
		this.id=id;
		this.user1Id = user1Id;
		this.user2Id = user2Id;
		this.user1CardId = user1CardId;
        this.user2CardId = user2CardId;
	}

    public Integer getId() {
        return id;
    }

    public Integer getUser1CardId() {
        return user1CardId;
    }

    public void setUser1CardId(Integer user1CardId) {
        this.user1CardId = user1CardId;
    }

    public Integer getUser1Id() {
        return user1Id;
    }

    public void setUser1Id(Integer user1Id) {
        this.user1Id = user1Id;
    }

    public Integer getUser2CardId() {
        return user2CardId;
    }

    public void setUser2CardId(Integer user2CardId) {
        this.user2CardId = user2CardId;
    }

    public Integer getUser2Id() {
        return user2Id;
    }

    public void setUser2Id(Integer user2Id) {
        this.user2Id = user2Id;
    }
}
