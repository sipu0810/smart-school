package com.tavant.smartSchool.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.tavant.smartSchool.model.Feedback;
import com.tavant.smartSchool.model.Student;
import com.tavant.smartSchool.repository.FeedbackRepository;
import com.tavant.smartSchool.repository.StudentRepository;

@RestController
@CrossOrigin()
@RequestMapping("api/v1/feedback")
public class FeedbackController {
	@Autowired
    private FeedbackRepository feedbackRepo;
//	@Autowired
//	private StudentRepository studentRepo;
//	
	@GetMapping
    public List<Feedback> getFeedback(){
        return feedbackRepo.findAll();
        
    }
	
	@PostMapping("/addfeedback")
    @ResponseStatus(HttpStatus.OK)
	public Feedback create(@RequestBody Feedback feedback){
		 return feedbackRepo.save(feedback);
	}
//	@PutMapping("/update")
//	public Feedback updateFeedback(@RequestBody Feedback feedback){
//		return feedbackRepo.save(feedback);
//	}
	
	
	
//     @PostMapping("/addfeedback/{s_id}")
//     @ResponseStatus(HttpStatus.OK)
//     public void create(@RequestBody Feedback feed,@PathVariable("s_id") String s_id) {
//
//         Student student = studentRepo.findById(Integer.valueOf(s_id)).get();
//         student.getFeedback().add(feed);
//         feedbackRepo.save(feed);
//         studentRepo.save(student);
//         
//        }
     
//        @GetMapping("")
//        public Feedback get(@PathVariable("s_id") int s_id) {
//            return feedbackRepo.findById(s_id).get();
//     
//        }
//     
//        @DeleteMapping(value = "/{s_id}")
//        public void deleteFeedback(@PathVariable Feedback s_id) {
//            feedbackRepo.delete(s_id);
//            // return true;
//        }
//     
//        @RequestMapping(value = "/update", method = RequestMethod.PUT)
//        public Feedback updateFeedback(@RequestBody Feedback feed) {
//            return feedbackRepo.save(feed);
//        }
//        

}
