package com.app.controller;

import com.app.entity.Market;
import com.app.service.MarketService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://127.0.0.1:8081")
@RestController
public class MarketRestCrt {

    private final MarketService mService;
	
	public MarketRestCrt(MarketService mService) {
		this.mService=mService;
	}

    @RequestMapping("/buy")
	public Market buy(@RequestBody Market m){
		return mService.buy(m);
	}

	@RequestMapping("/sell")
	public Market sell(@RequestBody Market m){
		return mService.sell(m);
	}
}
