import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centerlogin',
  templateUrl: './centerlogin.component.html',
  styleUrls: ['./centerlogin.component.css']
})
export class CenterloginComponent implements OnInit {

  constructor(private router:Router) { }
  username:string;
  password:string;
  ngOnInit() {
  }

  login():void{
    if(this.username=='admin' && this.password=='admin123'){
      this.router.navigate(['/teacher']);
    }else{
      alert("invalid credentials");
    }
  }
}
