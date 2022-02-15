package com.sp.model;
public class CardFormDTO  {
	private String name;
    private String description;
    private String family;
    private String affinity;
    private String imgUrl;
    private String energy;
    private String hp;
    private String defence;
    private String attack;
    private String price;

	public CardFormDTO() {
		this.name = "";
        this.description = "";
        this.family = "";
        this.affinity = "";
		this.imgUrl="";
        this.energy = "";
        this.hp = "";
        this.defence = "";
        this.attack = "";
        this.price = "";
	}

	public CardFormDTO(String name,String description,String family,String affinity,String imgUrl, String energy, String hp, String defence, String attack, String price) {
		this.name = name;
        this.description = description;
        this.family = family;
        this.affinity = affinity;
		this.imgUrl= imgUrl;
        this.energy = energy;
        this.hp = hp;
        this.defence = defence;
        this.attack = attack;
        this.price = price;
	}

    public String getAffinity() {
        return affinity;
    }

    public void setAffinity(String affinity) {
        this.affinity = affinity;
    }

    public String getAttack() {
        return attack;
    }

    public void setAttack(String attack) {
        this.attack = attack;
    }
    public String getDefence() {
        return defence;
    }
    public void setDefence(String defence) {
        this.defence = defence;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getEnergy() {
        return energy;
    }
    public void setEnergy(String energy) {
        this.energy = energy;
    }
    public String getFamily() {
        return family;
    }
    public void setFamily(String family) {
        this.family = family;
    }
    public String getHp() {
        return hp;
    }
    public void setHp(String hp) {
        this.hp = hp;
    }
    public String getImgUrl() {
        return imgUrl;
    }
    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getPrice() {
        return price;
    }
    public void setPrice(String price) {
        this.price = price;
    }

}