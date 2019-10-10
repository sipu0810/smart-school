import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminloginService } from '../admin-login-service/adminlogin.service';
import { Router } from '@angular/router';
import { StudentClass } from '../../studentClass';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  adminloginform :FormGroup;
  validMessage :String ="";
  @Input() public name:string;
  @Input() public password:string;
  public pass;
  public nam;
  public ad;
  public adminmodel : StudentClass;
  public isSubmit: boolean = false;
  constructor(private adminservice:AdminloginService,private router:Router) { }
   
  ngOnInit()
  {
  this.adminloginform = new FormGroup({
  name: new FormControl('',Validators.required),
  password :new FormControl('',Validators.required)
  });
  }
  submitData(){
  if(this.adminloginform.valid)
  {
  this.isSubmit = true;
  this.pass =this.adminloginform.get('password').value;
  this.nam =this.adminloginform.get('name').value;
  this.adminservice.getpassword(this.nam).subscribe(
  data=>this.ad=data,
  err=>console.log(err),
  ()=>{this.adminmodel=this.ad;
  if(this.pass == this.adminmodel.studentId && this.nam == this.adminmodel.studentName){
  this.router.navigate(['adminhome']);
  console.log("Success");
  return true;
  }}
  );
  }
  }


  username:string;
  password1:string;
  

  login():void{
    if(this.username=='admin' && this.password1=='admin123'){
      this.router.navigate(['/teacher']);
    }else{
      alert("invalid credentials");
    }
  }
}
