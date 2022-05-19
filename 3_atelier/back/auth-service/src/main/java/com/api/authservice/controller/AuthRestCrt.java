package com.api.authservice.controller;


import com.api.authservice.entity.User;
import com.api.authservice.service.AuthService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://127.0.0.1:8085")
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