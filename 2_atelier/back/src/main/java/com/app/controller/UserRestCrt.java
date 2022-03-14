package com.app.controller;


import com.app.entity.User;
import com.app.service.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserRestCrt {

    private final UserService uService;
	
	public UserRestCrt(UserService uService) {
		this.uService=uService;
	}

    @GetMapping("/user/{id}")
	public User getUser(@PathVariable String id){
		int current_id=Integer.valueOf(id);
		return uService.getUser(current_id);
	}
	
	@PostMapping("/user")
	public User addUser(@RequestBody User u){
		return uService.addUser(u);
	}
}

