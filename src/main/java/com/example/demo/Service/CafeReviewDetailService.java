package com.example.demo.Service;

import com.example.demo.DTO.CafeReviewDTO;

import java.util.List;

public interface CafeReviewDetailService {
    List<CafeReviewDTO> getCafeReview2(int cafeCode, int cafe_code);
}
