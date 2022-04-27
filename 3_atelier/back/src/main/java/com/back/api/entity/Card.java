package com.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Card {

    @Id
    @GeneratedValue
    private Integer id;
    private String familyName;
    private String imgSrc;
    private String name;
    private String description;
    private float hp;
    private float energy;
    private float attack;
    private float defence;
    private float price;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    public Card() {
	}

    public Card(int id,String familyName, String imgSrc, String name, String description, float hp, float energy, float attack, float defence, float price, User user) {
		super();
		this.id=id;
		this.familyName = familyName;
		this.imgSrc = imgSrc;
		this.name = name;
		this.description = description;
        this.hp = hp;
        this.energy = energy;
        this.attack = attack;
        this.defence = defence;
        this.price = price;
        this.user = user;
	}

    public Integer getId() {
        return id;
    }
    
    public String getFamilyName() {
        return familyName;
    }

    public void setFamilyName(String familyName) {
        this.familyName = familyName;
    }

    public String getImgSrc() {
        return imgSrc;
    }

    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getHp() {
        return hp;
    }

    public void setHp(float hp) {
        this.hp = hp;
    }

    public float getEnergy() {
        return energy;
    }

    public void setEnergy(float energy) {
        this.energy = energy;
    }

    public float getAttack() {
        return attack;
    }

    public void setAttack(float attack) {
        this.attack = attack;
    }

    public float getDefence() {
        return defence;
    }

    public void setDefence(float defence) {
        this.defence = defence;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
