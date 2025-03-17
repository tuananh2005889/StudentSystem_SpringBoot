package com.HA.studentSystem.service;

import java.util.List;

import com.HA.studentSystem.model.student;

public interface studentService {
    public student saveStudent(student student);

    public student deleteStudentByName(String name);

    public List<student> getAllStudents();

    public void deleteStudentById(Integer id);
}
