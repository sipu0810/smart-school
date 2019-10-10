import { Component, OnInit } from '@angular/core';
import { StudentService } from '../studentservice/student.service';
import  {Student}from '../studentmodel/student';
import {clone} from 'lodash';
import { Router } from '@angular/router';
import { StudentClass } from '../../studentClass';
import { StuServiceService } from '../../shared/stu-service.service'; 
import { empty } from 'rxjs/Observer';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {
  //students:Student[];
  //newStudent:any={}; 
  
  private student:StudentClass=new StudentClass(1,'','', 1,'','', new Date,'' );
  profileForm: FormGroup;

  
  constructor(private stuService:StuServiceService, private router: Router) { }

  ngOnInit() {
    
    this.profileForm = new FormGroup({
    sname: new FormControl('',Validators.required),
    parentname :new FormControl('',Validators.required),
    parentmob: new FormControl('',Validators.required),
    className :new FormControl('',Validators.required),
    dob: new FormControl('',Validators.required),
    gender :new FormControl('',Validators.required),
    address: new FormControl('',Validators.required)     
    });
    


    //this.student=this.stuService.getter();
  }




  processForm(){
  if(this.student.studentId==undefined){
    this.stuService.createStudents(this.student).subscribe((student)=>{
      console.log(student);
      this.router.navigate(['/centerlogin']);
    },(error)=>{
      console.log(error);
    });
  }else{
    this.stuService.updateStudents(this.student).subscribe((student)=>{
      console.log(student);
      this.router.navigate(['/centerlogin']);
    },(error)=>{
      console.log(error);
    });

  }
}
}
  // registerStudent=function(student:Student){
   
  //    this.studentService.addStudent(student);
  //     this.router.navigate(['/studentview']);
  // }

