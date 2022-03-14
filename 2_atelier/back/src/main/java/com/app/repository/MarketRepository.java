package com.app.repository;

import com.app.entity.Market;

import org.springframework.data.repository.CrudRepository;

public interface MarketRepository extends CrudRepository<Market,Integer> {
    
}
