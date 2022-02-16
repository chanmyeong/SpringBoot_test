package com.example.demo.Mapper;

import com.example.demo.DTO.CafeReviewDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CafeReviewListMapper {
    List<CafeReviewDTO> getCafeReview(int cafe_code);
}
