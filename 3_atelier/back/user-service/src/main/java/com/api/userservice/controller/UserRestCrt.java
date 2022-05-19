package com.api.userservice.controller;


import com.api.userservice.entity.User;
import com.api.userservice.service.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://127.0.0.1:8085")
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

	@GetMapping("/getid/{username}")
	public Integer getUserId(@PathVariable String username){
		return uService.getUserId(username);
	}
	
	@PostMapping("/user")
	public User addUser(@RequestBody User u){
		return uService.addUser(u);
	}
}

