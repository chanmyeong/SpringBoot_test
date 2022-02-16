package com.example.demo.Controller;

import com.example.demo.DTO.CafeReviewDTO;
import com.example.demo.Service.CafeReviewDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*",maxAge = 3600)
@RestController
@RequestMapping("/cafe_list/{cafe_code}")
@Configuration

public class CafeReviewDetailController {

    @Autowired
    private CafeReviewDetailService cafeReviewDetailService;

    @GetMapping("/review_list/{review_code}/review_detail")
    public List<CafeReviewDTO> getCafeReview2(@PathVariable int cafe_code, @PathVariable int review_code) {
        return cafeReviewDetailService.getCafeReview2(cafe_code, review_code);
    }
}
