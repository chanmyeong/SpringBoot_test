package com.example.demo.DTO;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestDAO {
    List<TestDTO> getTestData();
}
