//package com.example.demo.Controller;
//
//import com.example.demo.DTO.CafeReviewDTO;
//import com.example.demo.Service.CafeReviewWriteService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@CrossOrigin(origins = "*",maxAge = 3600)
//@RestController
//@RequestMapping("/cafe_list/{cafe_code}")
//@Configuration
//public class CafeReviewWriteController {
//    @Autowired
//    private CafeReviewWriteService cafeReviewWriteService;
//
//    @GetMapping("/review_write")
//    public List<CafeReviewDTO> getCafeReview(@PathVariable int cafe_code) {
//        return cafeReviewWriteService.getCafeReview(cafe_code);
//    }
//
//}
