package com.example.demo.Mapper;

import com.example.demo.DTO.CafeReviewPost;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CafeReviewWriteMapper {
    List<CafeReviewPost> getList();
    void insertReview(CafeReviewPost review);
}

