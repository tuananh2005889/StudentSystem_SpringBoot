package com.HA.studentSystem.service;

import java.util.List;

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

    @Override
    public List<student> getAllStudents() {
        return studentRepo.findAll();
    }

    // @Override
    // public student deleteStudentByName(String name) {
    // student studentToDelete = studentRepo.findByName(name);
    // if (studentToDelete != null) {
    // studentRepo.delete(studentToDelete);
    // return studentToDelete;
    // }
    // return null;
    // }

    @Override
    public void deleteStudentById(Integer id) {
        if (studentRepo.existsById(id)) {
            studentRepo.deleteById(id);
        } else {
            throw new RuntimeException("Not found: " + id);
        }
    }

}
