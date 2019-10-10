package com.tavant.smartSchool.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tavant.smartSchool.model.Subject;

public interface SubjectRepository extends JpaRepository<Subject, Integer> {

}
