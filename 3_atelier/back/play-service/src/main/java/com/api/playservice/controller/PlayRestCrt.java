package com.api.playservice.controller;


import com.api.playservice.entity.Play;
import com.api.playservice.service.PlayService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://127.0.0.1:8085")
@RestController
public class PlayRestCrt {

    private final PlayService pService;
	
	public PlayRestCrt(PlayService pService) {
		this.pService=pService;
	}

    @PostMapping("/play")
	public Play play(@RequestBody Play p){
		return pService.play(p);
	}
}

