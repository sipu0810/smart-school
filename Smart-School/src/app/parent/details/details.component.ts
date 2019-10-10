import { Component, OnInit } from '@angular/core';
import {StuServiceService} from '../../shared/stu-service.service';
import {StudentClass} from '../../studentClass';
import {Router} from '@angular/router';
import { StoredData } from '../../shared/storedData';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

 public students;
  //data: any;
  private studentsC:StudentClass[];
  data;
  
 sid;
   constructor(private _stuService:StuServiceService, private router:Router,private centraldata:StoredData){
   
   }
    
   ngOnInit() {
    this.sid=this.centraldata.data.studentId;
    console.log(this.sid);
    this.getStudentList();
     }
     getStudentList(){
       this._stuService.getStudent(this.sid).subscribe(
         data=>{this.students=data
          console.log(this.students);
        console.log("hello" +this.sid)},
         
         err=>console.error(err),
         ()=>console.log('student loaded')
       );
     }
    
 
//  deletestudent(student){
//    this._stuService.deleteStudent(student.id).subscribe((data)=>{
//     this.studentsC.splice(this.studentsC.indexOf(student),1);
//    // this.data=data;
//      console.log("beta");
//      this.router.navigate(['/parent/details']);
     
//    },(error)=>{
//      console.log(error);
//    });


   
   
//  }
//  updateStudent(student){
//    this._stuService.setter(student);
//    this.router.navigate(['/studentregisteration']);

//  }
// newStudent(){
//   let student=new StudentClass(1,'','',1 ,'','', new Date,'');
//   this._stuService.setter(student);
//   this.router.navigate(['/studentregisteration']);
// }
  
}
