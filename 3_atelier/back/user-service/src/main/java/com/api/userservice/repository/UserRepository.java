package com.api.userservice.repository;

import com.api.userservice.entity.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Integer> {
    User findByUserName(String userName);
}
