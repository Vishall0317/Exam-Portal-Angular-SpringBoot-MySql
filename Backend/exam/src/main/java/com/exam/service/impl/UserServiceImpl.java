package com.exam.service.impl;

import com.exam.entity.User;
import com.exam.repository.UserRepo;
import com.exam.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepo userRepo;

    public boolean createUser(User user) {
        userRepo.save(user);
        return true;
    }
}
