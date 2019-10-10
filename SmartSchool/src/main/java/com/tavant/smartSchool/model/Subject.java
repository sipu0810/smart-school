package com.tavant.smartSchool.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Subject {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int subjectId;
	private String subjectName;
	
	

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "homeworkId")
	@JsonIgnore
	private Homework homework;
	
	public Subject(){}

	public Subject(String subjectName) {
		this.subjectName = subjectName;
	}
	
	public int getSubjectId() {
		return subjectId;
	}

	public void setSubjectId(int subjectId) {
		this.subjectId = subjectId;
	}

	public String getSubjectName() {
		return subjectName;
	}

	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}
	
	
	@Override
	public String toString() {
		return subjectName;
	}

	public Homework getHomework() {
		return homework;
	}

	public void setHomework(Homework homework) {
		this.homework = homework;
	}
	
	

}
