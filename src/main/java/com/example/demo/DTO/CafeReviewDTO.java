package com.example.demo.DTO;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class CafeReviewDTO {
    private int review_code;
    private String review_title;
    private String review_text;
    private String review_image;
    private Timestamp review_time;
    private String review_hide;
    private int cafe_code;
    private int user_code;
}
