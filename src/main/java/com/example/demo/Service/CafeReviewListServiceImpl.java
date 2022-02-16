package com.example.demo.Service;

import com.example.demo.DTO.CafeReviewDTO;
import com.example.demo.Mapper.CafeReviewListMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor

public class CafeReviewListServiceImpl implements CafeReviewListService{

    @Autowired
    private CafeReviewListMapper cafeReviewMapper;

    @Override
    public List<CafeReviewDTO> getCafeReview(int cafe_code) {
        return cafeReviewMapper.getCafeReview(cafe_code);
    }

}