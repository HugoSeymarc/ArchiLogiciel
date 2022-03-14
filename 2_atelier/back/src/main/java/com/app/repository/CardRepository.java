package com.app.repository;

import java.util.List;

import com.app.entity.Card;

import org.springframework.data.repository.CrudRepository;

public interface CardRepository extends CrudRepository<Card, Integer> {

    List<Card> findByUserId(int userId);
    List<Card> findAll();
    
}
