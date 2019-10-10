package com.tavant.smartSchool.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tavant.smartSchool.model.Homework;

@Repository
public interface HomeworkRepository extends JpaRepository<Homework, Integer>{

}
