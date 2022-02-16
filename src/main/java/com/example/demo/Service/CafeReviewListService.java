package com.example.demo.Service;

import com.example.demo.DTO.CafeReviewDTO;

import java.util.List;

public interface CafeReviewListService {
    List<CafeReviewDTO> getCafeReview(int cafe_code);
}