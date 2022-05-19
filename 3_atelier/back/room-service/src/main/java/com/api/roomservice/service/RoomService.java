package com.api.roomservice.service;

import java.util.List;
import java.util.ArrayList;

import com.api.roomservice.entity.Room;
import com.api.roomservice.repository.RoomRepository;

import org.springframework.stereotype.Service;


@Service
public class RoomService {

	private final RoomRepository rRepository;

	public RoomService(RoomRepository rRepository) {
		this.rRepository = rRepository;
	}

	public List<Room> getRooms() {
		List<Room> rL = new ArrayList<Room>();
		for (Room r : rRepository.findAll()) {
			rL.add(r);
		}
		return rL;

	}

	public Room addRoom(Room r) {
		return rRepository.save(r);
	}
}
