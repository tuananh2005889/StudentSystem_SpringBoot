package com.HA.studentSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import com.HA.studentSystem.model.student;
import com.HA.studentSystem.service.studentService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:3000")
public class studentContro {

  @Autowired
  private studentService studentService;

  @PostMapping("/add")
  public String addStudent(@RequestBody student student) {
    studentService.saveStudent(student);
    return "New student added";
  }

  @DeleteMapping("/delete/{id}")
  public String deleteStudent(@PathVariable Integer id) {
    try {
      studentService.deleteStudentById(id);
      return "Student deleted successfully";
    } catch (RuntimeException e) {
      return e.getMessage();
    }
  }

  @GetMapping("/getAll")
  public List<student> getAllstudent() {
    return studentService.getAllStudents();
  }
}