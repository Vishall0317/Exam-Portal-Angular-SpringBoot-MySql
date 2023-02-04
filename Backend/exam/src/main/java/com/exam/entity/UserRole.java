package com.exam.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "userrole")
public class UserRole {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userRoleId;

    @ManyToOne(fetch = FetchType.EAGER)
    private User user;
}
