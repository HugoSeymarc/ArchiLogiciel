package com.app.controller;


import com.app.entity.User;
import com.app.service.AuthService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthRestCrt {

    private final AuthService aService;
	
	public AuthRestCrt(AuthService aService) {
		this.aService=aService;
	}
	
	@PostMapping("/login")
	public Integer login(@RequestBody User u){
		return aService.login(u);
	}
}