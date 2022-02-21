package com.example.demo.Service;

import com.example.demo.DTO.CafeReviewPost;
import com.example.demo.Mapper.CafeReviewWriteMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CafeReviewWriteServiceImpl implements CafeReviewWriteService{

        @Autowired
        private CafeReviewWriteMapper cafeReviewWriteMapper;

        @Override
        public List<CafeReviewPost> getList() {
                return cafeReviewWriteMapper.getList();
        }

        @Override
        public void insertReview(CafeReviewPost review) {
            cafeReviewWriteMapper.insertReview(review);
        }
}
