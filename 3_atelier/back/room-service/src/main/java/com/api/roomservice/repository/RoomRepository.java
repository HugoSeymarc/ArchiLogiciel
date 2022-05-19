package com.api.roomservice.repository;

import java.util.List;

import com.api.roomservice.entity.Room;

import org.springframework.data.repository.CrudRepository;

public interface RoomRepository extends CrudRepository<Room, Integer> {

    List<Room> findAll();
    
}
