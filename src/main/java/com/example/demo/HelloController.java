package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class HelloController {
    @GetMapping("/hello/world")
    public String hello() {
        return "HelloWorld " + new Date() + "\n";
    }
}
