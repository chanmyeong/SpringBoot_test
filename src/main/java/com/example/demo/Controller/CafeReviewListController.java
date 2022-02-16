package com.example.demo.Controller;

import com.example.demo.DTO.CafeReviewDTO;
import com.example.demo.Service.CafeReviewListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*",maxAge = 3600)
@RestController
@RequestMapping("/cafe_list/{cafe_code}")
@Configuration
//@ComponentScan(basePackages = {"com.example.demo.DTO"})
public class CafeReviewListController {

    @Autowired
    private CafeReviewListService cafeReviewListService;

    @GetMapping("/review_list")
    public List<CafeReviewDTO> getCafeReview(@PathVariable int cafe_code) {
        return cafeReviewListService.getCafeReview(cafe_code);
    }
}
