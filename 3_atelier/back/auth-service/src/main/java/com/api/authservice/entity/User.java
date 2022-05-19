package com.api.authservice.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {
    
    @Id
    @GeneratedValue
    private Integer id;
    private String userName;
    private String password;
    private float amount;

    
    public User() {
	}

    public User(int id,String userName, String password, float amount) {
		super();
		this.id=id;
		this.userName = userName;
		this.password = password;
		this.amount = amount;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }
}
