package com.HA.studentSystem.service;

import java.util.List;

import com.HA.studentSystem.model.student;

public interface studentService {
    public student saveStudent(student student);

    public List<student> getAllStudents();
}
