package com.api.userservice.service;

import java.util.Optional;

import com.api.userservice.entity.User;
import com.api.userservice.repository.UserRepository;

import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository uRepository;

	public UserService(UserRepository uRepository) {
		this.uRepository = uRepository;
	}

	public User getUser(int id) {
		Optional<User> uOpt = uRepository.findById(id);
		return uOpt.get();
	}

	public User addUser(User u) {
		return uRepository.save(u);
	}

    public Integer getUserId(String username) {
        User uOpt = uRepository.findByUserName(username);
		return uOpt.getId();
    }
}
