package com.api.cardservice.repository;

import java.util.List;

import com.api.cardservice.entity.Card;

import org.springframework.data.repository.CrudRepository;

public interface CardRepository extends CrudRepository<Card, Integer> {

    List<Card> findAll();
    List<Card> findByUserId(int userId);
    
}
