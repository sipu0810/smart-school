import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../studentservice/student.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminloginService } from '../../admin/admin-login-service/adminlogin.service';
import { StudentModel } from '../../student-model';
import { StoredData } from '../../shared/storedData';
import { StudentClass } from '../../studentClass';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {

 // constructor(private router:Router) { }
  // username:string;
  // password:string;
  // ngOnInit() {
  // }

  // login():void{
  //   if(this.username=='admin' && this.password=='admin123'){
  //     this.router.navigate(['/parent']);
  //   }else{
  //     alert("invalid credentials");
  //   }
  // }


  adminloginform1 :FormGroup;
  validMessage :String ="";
  // @Input() public name:string;
  // @Input() public password:string;
  @Input() public id:number;
   @Input() public mob:number;
  public stuId;
  public mobile;
  public ad;
  public adminmodel :StudentClass;
  public isSubmit: boolean = false;
  constructor(private adminservice:StudentService,private router:Router,private centraldata:StoredData) { }
   
  ngOnInit()
  {
  this.adminloginform1 = new FormGroup({
  id: new FormControl('',Validators.required),
  mob :new FormControl('',Validators.required)
  });
  }

  submitData(){
  if(this.adminloginform1.valid)
  {  
  this.isSubmit = true;
  
  this.stuId=this.adminloginform1.get('id').value;
  this.mobile =this.adminloginform1.get('mob').value;
  
  // console.log(this.s_id);
  // console.log(this.mobile);
  

  console.log("Success");
  this.adminservice.getpassword(this.stuId).subscribe(
  data=>{this.ad=data
    console.log(this.ad);
    {this.adminmodel=this.ad;
      console.log("Success");
      
      
      if(this.stuId == this.adminmodel.studentId && this.mobile == this.adminmodel.mobileNumber){
         this.centraldata.data=this.ad;
      this.router.navigate(['/parent']);
      
      return true;
      }
      else{
        alert("id and password not matched");
      }
    }
  }  ,
    
  
      (err)=>{console.log(err),
        alert("invalid credentials");
      }
  

  );
  }
  }


}
