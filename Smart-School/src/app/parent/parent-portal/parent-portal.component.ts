import { Component, OnInit } from '@angular/core';
import { StuServiceService } from '../../shared/stu-service.service';


@Component({
  selector: 'app-parent-portal',
  templateUrl: './parent-portal.component.html',
  styleUrls: ['./parent-portal.component.css']
})
export class ParentPortalComponent implements OnInit {
  
  studentviewForm:boolean=false;
  viewStudent=function(){
    this.studentviewForm=!this.studentviewForm;
  }

 
  
   constructor(){
  
   }
  
   ngOnInit() {
   
     }

}
