package com.api.authservice.service;

import com.api.authservice.entity.User;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AuthService {

  public Integer login(User u) {

    RestTemplate restTemplate = new RestTemplate();

    String userResourceUrl = "http://localhost:8082/user";
    String userIdResourceUrl = "http://localhost:8082/getid";

    ResponseEntity<Integer> responseUserId = restTemplate.getForEntity(userIdResourceUrl + "/" + u.getUserName(), Integer.class);
    int userId = responseUserId.getBody();

    ResponseEntity<User> responseUser = restTemplate.getForEntity(userResourceUrl + "/" + userId, User.class);
    User user = responseUser.getBody();

    if (user != null && user.getPassword().equals(u.getPassword())) {
      return user.getId();
    }
    return -1;
  }
}
