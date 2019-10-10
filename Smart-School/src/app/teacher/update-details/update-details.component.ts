import { Component, OnInit } from '@angular/core';
import { StudentClass } from '../../studentClass';
import { StuServiceService } from '../../shared/stu-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  profileForm = new FormGroup({
    studentName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    // fatherName: new FormControl('',[Validators.required]),
    // email:new FormControl('',[Validators.required,Validators.email]),
    // phoneNumber:new FormControl('',[Validators.required,Validators.maxLength(10)])
    });
    // onSubmit() {
    // // TODO: Use EventEmitter with form value
    // console.warn(this.profileForm.value);
    // }
     
 
  private student:StudentClass=new StudentClass(1,'','', 1,'','', new Date,'' );

  
  constructor(private stuService:StuServiceService, private router: Router) { }

  ngOnInit() {
    
    this.student=this.stuService.getter();
    
  }
  processForm(){
  if(this.student.studentId==undefined){
    this.stuService.createStudents(this.student).subscribe((student)=>{
      console.log(student);
      alert('added successfully');
      this.router.navigate(['teacher/studentList']);
    },(error)=>{
      alert('Not added. Please try again');
      console.log(error);
    });
  }else {
    this.stuService.updateStudents(this.student).subscribe((student)=>{
      console.log(student);
      alert('added successfully');
      this.router.navigate(['teacher/studentList']);
    },(error)=>{
      alert('Not added. Please try again');
      console.log(error);
      console.warn(this.profileForm.value);

    });

  }

}

}
