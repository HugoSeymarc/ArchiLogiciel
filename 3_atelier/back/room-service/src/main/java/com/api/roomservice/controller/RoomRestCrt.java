package com.api.roomservice.controller;


import com.api.roomservice.entity.Room;

import java.util.List;
import com.api.roomservice.service.RoomService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://127.0.0.1:8085")
@RestController
public class RoomRestCrt {

    private final RoomService rService;
	
	public RoomRestCrt(RoomService rService) {
		this.rService=rService;
	}

    @GetMapping("/rooms")
    public List<Room> getRooms(){
		return rService.getRooms();	
	}

	@PostMapping("/room")
	public Room addRoom(@RequestBody Room r){
		return rService.addRoom(r);
	}

}