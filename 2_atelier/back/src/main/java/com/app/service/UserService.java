package com.app.service;

import java.util.Optional;

import com.app.entity.User;
import com.app.repository.UserRepository;

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
}
