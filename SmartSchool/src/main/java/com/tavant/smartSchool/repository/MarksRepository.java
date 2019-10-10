package com.tavant.smartSchool.repository;
 
import org.springframework.data.jpa.repository.JpaRepository;
 
import com.tavant.smartSchool.model.Marks;
 
public interface MarksRepository extends JpaRepository<Marks, Integer> {
 
}