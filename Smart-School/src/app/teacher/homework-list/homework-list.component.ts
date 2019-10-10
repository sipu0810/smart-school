import { Component, OnInit, Pipe } from '@angular/core';
import { HomeworkClass } from '../../homeworkClass';
import { PhomeworkService } from '../services/phomework.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-homework-list',
  templateUrl: './homework-list.component.html',
  styleUrls: ['./homework-list.component.css']
  
})
@Pipe({
  name: 'dateFormat'
})

export class HomeworkListComponent implements OnInit {

  
  public homework;
  //data: any;
  private work:HomeworkClass[];
  data;
 
  constructor(private homeworkService: PhomeworkService, private router: Router) {
    
   }

  ngOnInit() {
    this.getHomeworkList();
  }

getHomeworkList(){
       this.homeworkService.getHomeworks().subscribe(
         data=>{this.homework=data
        console.log("homework")},
         
         err=>console.error(err),
         ()=>console.log('homework loaded')
       );
     }
 
 deletehomework(homeworkId){
   this.homeworkService.deleteHomework(homeworkId).subscribe((data)=>{
    this.work.splice(this.work.indexOf(homeworkId),1);
    this.data=data;
    alert("Deleted !");
     console.log("beta");
     this.router.navigate(['/details']);
     window.location.reload();
     
   },(error)=>{
     console.log(error);
   });


   
   
 }
updateHomework(homeworks){
 // this.homeworkService.setter(homeworks);
   this.homeworkService.updateHomeworks(homeworks);
   this.router.navigate(['/teacher/postHomework']);
 }
  addHomework(){
    
    let homeworks=new HomeworkClass(1,'','',new Date);
    this.homeworkService.createHomework(homeworks);
    this.router.navigate(['/teacher/postHomework']);
  }

}
