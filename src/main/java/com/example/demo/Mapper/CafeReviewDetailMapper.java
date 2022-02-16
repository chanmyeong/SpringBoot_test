package com.example.demo.Mapper;

import com.example.demo.DTO.CafeReviewDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CafeReviewDetailMapper {
    List<CafeReviewDTO> getCafeReview2(int cafe_code, int review_code);
}
