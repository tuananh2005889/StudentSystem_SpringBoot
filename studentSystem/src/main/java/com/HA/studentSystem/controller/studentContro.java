package com.HA.studentSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HA.studentSystem.model.student;
import com.HA.studentSystem.service.studentService;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/student")
public class studentContro {

  @Autowired
  private studentService studentService;

  @PostMapping("/add")
  public String addStudent(@RequestBody student student) {
    studentService.saveStudent(student);
    return "New student added";
  }

  @GetMapping("/getAll")
  public List<student> getAllstudent() {
    return studentService.getAllStudents();
  }
}