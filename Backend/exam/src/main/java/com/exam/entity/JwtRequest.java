package com.exam.entity;

public class JwtRequest {

    private String userName;
    private String passsword;

    public JwtRequest(String userName, String passsword) {
        this.userName = userName;
        this.passsword = passsword;
    }

    public JwtRequest() {
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPasssword() {
        return passsword;
    }

    public void setPasssword(String passsword) {
        this.passsword = passsword;
    }
}
