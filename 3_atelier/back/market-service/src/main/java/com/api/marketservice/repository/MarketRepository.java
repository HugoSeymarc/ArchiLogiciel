package com.api.marketservice.repository;

import com.api.marketservice.entity.Market;

import org.springframework.data.repository.CrudRepository;

public interface MarketRepository extends CrudRepository<Market,Integer> {
    
}
