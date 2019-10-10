package com.tavant.smartSchool.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.tavant.smartSchool.model.Student;
import com.tavant.smartSchool.repository.CRUDRepository;
import com.tavant.smartSchool.repository.StudentRepository;

@RestController
@RequestMapping("/api/v1/students")
@CrossOrigin()
public class StudentController {
	
	@Autowired
	private StudentRepository studentRepo;
	@Autowired
	private CRUDRepository crudRepo;
	
	@GetMapping
	public List<Student> list(){
		return studentRepo.findAll();
		//return student;		
	}
	
	@PostMapping("/addStudent")
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Student stu){
		studentRepo.save(stu);
	}
	@GetMapping("/{id}")
	public Student get(@PathVariable("id") int id){
		
//		if (!Student.isPresent())
//			throw new StudentNotFoundException("id-" + id);
		
		return studentRepo.getOne(id);
		
	}
	@DeleteMapping("/{id}")
	public void deleteStudent(@PathVariable Student id) {
		 crudRepo.delete(id);
	//	 return true;
	}
	

	@RequestMapping(value = "/update", method = RequestMethod.PUT)
	public Student updateStudent(@RequestBody Student student){
		return studentRepo.save(student);
	}
	

}
