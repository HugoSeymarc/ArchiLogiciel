package com.app.service;

import com.app.entity.User;
import com.app.repository.UserRepository;

import org.springframework.stereotype.Service;

@Service
public class AuthService {

  private final UserRepository uRepository;

  public AuthService(UserRepository uRepository) {
    this.uRepository = uRepository;
  }

  public Integer login(User u) {
    User user = uRepository.findByUserName(u.getUserName());
    if (user != null && user.getPassword().equals(u.getPassword())) {
      return user.getId();
    }
    return -1;
  }
}
