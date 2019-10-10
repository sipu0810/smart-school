package com.tavant.smartSchool.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
import com.tavant.smartSchool.repository.MarksRepository;
import com.tavant.smartSchool.repository.StudentRepository;

@RestController
@RequestMapping("/api/v1/students")
@CrossOrigin()
public class StudentController {
	
	@Autowired
	private StudentRepository studentRepo;
	
	@Autowired
    private MarksRepository marksRepo;
//	@Autowired
//	private CRUDRepository crudRepo;
	
	@GetMapping
	public List<Student> list(){
		return studentRepo.findAll();
		//return student;		
	}
	
	
//	@GetMapping(value="/findByName/{studentName}",  produces=MediaType.APPLICATION_JSON_VALUE)
//	public List<Student> findByName(@PathVariable String studentName) {
//
//		List<Student> student = studentRepo.findByName(studentName);
//	//	return studentRepo.findByName(studentName);
//		return student;
//	}
	
	@GetMapping(value="/findByName/{studentName}", produces=MediaType.APPLICATION_JSON_VALUE)
	public Student getStudentByName(@PathVariable("studentName") String studentName){
		return studentRepo.findByName(studentName);
	}
	
	
	
	@PostMapping("/addStudent")
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Student stu){
		studentRepo.save(stu);
	}
	
	
	@GetMapping("/{id}")
	public Student get(@PathVariable("id") int id){

		return studentRepo.getOne(id);
	}
	
	@GetMapping("/login/{id}")
    public Student getLogin(@PathVariable("id") int id)
    {
        return studentRepo.login(id);
    }
	
	
	@DeleteMapping("/{id}")
	public void deleteStudent(@PathVariable Student id) {
		//crudRepo.delete(id);
		 studentRepo.delete(id);
	}
	

	@RequestMapping(value = "/update", method = RequestMethod.PUT)
	public Student updateStudent(@RequestBody Student student){
		return studentRepo.save(student);
	}
	
	@PostMapping("/addMarks")
    public void addMarks(@RequestBody Student stu){
        marksRepo.saveAll(stu.getMarks());
        studentRepo.save(stu);
    }
    
    
    
    
    @RequestMapping(value="updateMarks",method=RequestMethod.PUT)
    public void updatemarks(@RequestBody Student student){
         marksRepo.saveAll(student.getMarks());
         studentRepo.save(student);
        
    }
    
	

}
