package com.example.demo.Controller;

import com.example.demo.DTO.CafeReviewPost;
import com.example.demo.Service.CafeReviewWriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*",maxAge = 3600)
@RestController
@RequestMapping("/cafe_list")
@Configuration
public class CafeReviewWriteController {

    @Autowired
    private CafeReviewWriteService cafeReviewWriteService;

//    @GetMapping("{cafe_code}/review_list/review_write")
//    public List<CafeReviewDTO> getCafeReview(@PathVariable int cafe_code) {
//        return cafeReviewListService.getCafeReview(cafe_code);
//    } 카페번호 알아내는 cafeListservice가 필요할듯

    @PostMapping("review_list/review_write")
    public String insertReview(@Validated @RequestBody CafeReviewPost review) {
        System.out.println("data controller post");
        cafeReviewWriteService.insertReview(review);
        return "redirect:/{cafe_code}/review_list";
    }
}
