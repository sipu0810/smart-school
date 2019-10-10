package com.tavant.smartSchool.model;

import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Student {
	 @Id
	    @GeneratedValue(strategy=GenerationType.AUTO)
	    private int studentId;
	    private String studentName;
	    private String fatherName;
	    private String mobileNumber;
	    
	    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-mm-dd")
	    private Date dateOfBirth;    
	    private String gender;
	    private int className;
	    private String address;
	    
	    @OneToMany
	    @JoinColumn(name="id")
	    private List<Marks> marks;
	 
	    
	    public List<Marks> getMarks() {
	        return marks;
	    }
	    public void setMarks(List<Marks> marks) {
	        this.marks = marks;
	    }    
	   
	    
	    public int getStudentId() {
			return studentId;
		}
		public void setStudentId(int studentId) {
			this.studentId = studentId;
		}
		
		public String getStudentName() {
			return studentName;
		}
		public void setStudentName(String studentName) {
			this.studentName = studentName;
		}
		
		public String getFatherName() {
			return fatherName;
		}
		public void setFatherName(String fatherName) {
			this.fatherName = fatherName;
		}
		
		public String getMobileNumber() {
			return mobileNumber;
		}
		public void setMobileNumber(String mobileNumber) {
			this.mobileNumber = mobileNumber;
		}
		
		public Date getDateOfBirth() {
			return dateOfBirth;
		}
		public void setDateOfBirth(Date dateOfBirth) {
			this.dateOfBirth = dateOfBirth;
		}
		
		public String getGender() {
	        return gender;
	    }
	    public void setGender(String gender) {
	        this.gender = gender;
	    }
	    
	    public int getClassName() {
	        return className;
	    }
	    public void setClassName(int className) {
	        this.className = className;
	    }

	    public String getAddress() {
	        return address;
	    }
	    public void setAddress(String address) {
	        this.address = address;
	    }
	    
	    
	    
	    

}
