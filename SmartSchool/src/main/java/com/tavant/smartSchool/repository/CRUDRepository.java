package com.tavant.smartSchool.repository;

import org.springframework.data.repository.CrudRepository;

import com.tavant.smartSchool.model.Student;

public interface CRUDRepository extends CrudRepository<Student, Integer> {

}
