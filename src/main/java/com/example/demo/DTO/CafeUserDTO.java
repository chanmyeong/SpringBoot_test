package com.example.demo.DTO;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class CafeUserDTO {
    private int user_code;
    private String user_id;
    private String user_password;
    private String user_name;
    private String user_gender;
    private String user_email;
    private int user_age;
    private String user_ishost;
    private String user_password_question;
    private String user_password_answer;
}
