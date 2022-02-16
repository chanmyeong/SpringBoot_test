package com.example.demo.Service;

import com.example.demo.DTO.CafeReviewDTO;
import com.example.demo.Mapper.CafeReviewDetailMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor

public class CafeReviewDetailServiceImpl implements CafeReviewDetailService {
    @Autowired
    private CafeReviewDetailMapper cafeReviewDetailMapper;

    @Override
    public List<CafeReviewDTO> getCafeReview2(int cafe_code, int review_code) {
        return cafeReviewDetailMapper.getCafeReview2(cafe_code, review_code);
    }
}
