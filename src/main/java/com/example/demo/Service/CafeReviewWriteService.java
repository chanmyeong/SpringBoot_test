package com.example.demo.Service;

import com.example.demo.DTO.CafeReviewPost;

import java.util.List;

public interface CafeReviewWriteService {
    List<CafeReviewPost> getList();
    void insertReview(CafeReviewPost review);
}
