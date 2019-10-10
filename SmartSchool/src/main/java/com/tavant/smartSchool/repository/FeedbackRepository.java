package com.tavant.smartSchool.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tavant.smartSchool.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer>{

}
