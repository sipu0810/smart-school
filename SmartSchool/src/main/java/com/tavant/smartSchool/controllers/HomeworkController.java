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

import com.tavant.smartSchool.model.Homework;
import com.tavant.smartSchool.repository.HomeworkCrudRepo;
import com.tavant.smartSchool.repository.HomeworkRepository;


@RestController
@RequestMapping("/api/v1/homework")
@CrossOrigin()
public class HomeworkController {

	@Autowired
	private HomeworkRepository homeworkRepo;
	
	@Autowired
	private HomeworkCrudRepo crudRepo;
	
	@GetMapping
    public List<Homework> list() {
        return homeworkRepo.findAll();
        // return student;
 
    }
 
    @PostMapping("/addhomework")
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Homework home) {
        homeworkRepo.save(home);
    }
 
    @GetMapping("/{h_id}")
    public Homework get(@PathVariable("h_id") int h_id) {
        return homeworkRepo.getOne(h_id);
 
    }
 
    @DeleteMapping(value = "/{id}")
    public void deleteHomework(@PathVariable Homework id) {
     homeworkRepo.delete(id);
        // return true;
    }
 
    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public Homework updateHomework(@RequestBody Homework homework) {
        return homeworkRepo.save(homework);
    }
	
    

}
