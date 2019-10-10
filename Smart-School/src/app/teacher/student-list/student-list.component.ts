import { Component, OnInit } from '@angular/core';
import { StuServiceService } from '../../shared/stu-service.service';
import { StudentClass } from '../../studentClass';
import { Router } from '@angular/router';
import { MarkClass } from '../../markClass';
import { PmarkService } from '../service/pmark.service';
import { StudentModel } from '../../student-model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public students;
  //data: any;

  student:StudentModel[];

  private studentsC:StudentClass[];
  data;
  _pmarkService: any;
  studentName:string;
   constructor(private _stuService:StuServiceService, private router:Router,private markService:PmarkService){}
    
   ngOnInit() {
     this.studentName="";
    this.getStudentList();

     }
     getStudentList(){
       this._stuService.getStudents().subscribe(
         data=>{this.students=data
        console.log("hello")},
         
         err=>console.error(err),
         ()=>console.log('student loaded')
       );
     }
 
 deletestudent(student){
   this._stuService.deleteStudent(student.studentId).subscribe((data)=>{
       this.data=data;
       this.router.navigate(['/teacher/updateDetails']);
     
   },(error)=>{
     console.log(error);
   });  
   
 }

 updateStudent(student){
 
   this._stuService.setter(student);
   this.router.navigate(['/teacher/updateDetails']);

 }
newStudent(){
  let student=new StudentClass(0,'','',1 ,'','', new Date,'');
  
  this._stuService.setter(student);
 
  this.router.navigate(['/teacher/updateDetails']);
}
// markStudent(){
//  let mark=new MarkClass(1,new Date,'','',1);
//  this._pmarkService.setter(mark);
//  this.router.navigate(['/teacher/markList']);
// }
addMarks(studentId){
  console.log(studentId);
  let mark=new MarkClass(studentId.studentId,studentId.studentId,'',0,new Date);
  this.markService.setter(mark);
  this.router.navigate(['/teacher/updatePerformance']);
  }

  private searchCustomers() {
    
    this._stuService.getStudentByName(this.studentName).then(student => this.student = student);
   
  }
  onSubmit(){
    this.searchCustomers();
  }
  

}
