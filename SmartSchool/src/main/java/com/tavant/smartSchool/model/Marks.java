package com.tavant.smartSchool.model;
 
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
 
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
 
@Entity
@JsonIgnoreProperties
public class Marks {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int markId;
    private int mark;
    private String subject;
    private String date;
    
                
    public int getMarkId() {
        return markId;
    }
    public void setMarkId(int markId) {
        this.markId = markId;
    }
    public int getMark() {
        return mark;
    }
    public void setMark(int mark) {
        this.mark = mark;
    }
    public String getSubject() {
        return subject;
    }
    public void setSubject(String subject) {
        this.subject = subject;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    
    
    
 
}
 