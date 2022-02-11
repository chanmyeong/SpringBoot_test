package com.example.demo.Controller;

import com.example.demo.DTO.TestDAO;
import com.example.demo.DTO.TestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/hello")
@Configuration
@ComponentScan(basePackages = {"com.example.demo.DTO"})
public class DBConnectTestCtrl implements TestDAO {

    @Autowired
    private TestDAO testDAO;

    @GetMapping("/world")
    public List<TestDTO> getTestData() { return testDAO.getTestData(); }
}
