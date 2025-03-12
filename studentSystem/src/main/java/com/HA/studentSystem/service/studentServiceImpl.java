package com.HA.studentSystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HA.studentSystem.model.student;
import com.HA.studentSystem.repo.studentRepo;

@Service
public class studentServiceImpl implements studentService {

    @Autowired
    private studentRepo studentRepo;

    @Override
    public student saveStudent(student student) {
        return studentRepo.save(student);
    }

}
