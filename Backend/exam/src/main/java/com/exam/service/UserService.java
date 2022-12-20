package com.exam.service;

import com.exam.entity.User;
import com.exam.service.impl.UserServiceImpl;

public interface UserService {
    public boolean createUser(User user);
}
