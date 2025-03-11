package com.HA.studentSystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HA.studentSystem.model.student;

@Repository
public interface studentRepo extends JpaRepository<student, Integer> {

}
