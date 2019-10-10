package com.tavant.smartSchool.controllers;
 
import java.util.List;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
 
import com.tavant.smartSchool.model.Marks;
import com.tavant.smartSchool.repository.MarksRepository;
 
@RestController
@CrossOrigin()
@RequestMapping("/api/v1/marks")
public class MarksController {
    
    @Autowired
    private MarksRepository markRepo;
    
    @GetMapping
    public List<Marks> list(){
        return markRepo.findAll();
        
    }
    
    @GetMapping("/{id}")
    public Marks get(@PathVariable("id") int id){
        
        return markRepo.getOne(id);
        
    }
    
    
    @PostMapping("/addMarks")
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Marks m ){
        markRepo.save(m);
    }
    
    @RequestMapping(value="/updateMarks", method=RequestMethod.PUT)
    public Marks update(@RequestBody Marks m){
        return markRepo.save(m);
    }
 
}
 
 