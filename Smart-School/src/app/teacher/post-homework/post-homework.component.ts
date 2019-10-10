import { Component, OnInit } from '@angular/core';
import { HomeworkClass } from '../../homeworkClass';
import { PhomeworkService } from '../services/phomework.service';
import { Router } from '@angular/router';
import { isDefined } from '@angular/compiler/src/util';

@Component({
  selector: 'app-post-homework',
  templateUrl: './post-homework.component.html',
  styleUrls: ['./post-homework.component.css']
})
export class PostHomeworkComponent implements OnInit {

 // private student:StudentClass=new StudentClass(1,'','', 1,'','', new Date,'' );
    private homework:HomeworkClass= new HomeworkClass(1,'','',new Date);
  
  constructor(private stuService:PhomeworkService, private router: Router) { }


  subjectList: any[] = [
    { id: 1, Name: 'Hindi' },
    { id: 2, Name: 'English'},
    { id: 3, Name: 'Math' },
    { id: 4, Name: 'Computer'},
    { id: 5, Name: 'Science' },
    { id: 6, Name: 'Social Study'},
    { id: 7, Name: 'GK' },
    
];
curSub: any = this.subjectList[0]; // first will be selected by default by browser

setSubject(id: any): void {
  console.log(id);
  // Match the selected ID with the ID's in array
  this.curSub = this.subjectList.filter(value => value.id === parseInt(id));
  console.log(this.curSub);
}


  ngOnInit() {
   // this.homework=this.stuService.getter();
  }
  processHomeworkForm(){
  if(this.homework.homeworkId==undefined){
    
    this.stuService.createHomework(this.homework).subscribe((homework)=>{
      console.log(homework);
      this.router.navigate(['/teacher/homeworkList']);
    },(error)=>{
      console.log(error);
    });
  }else{
   console.log("updating");
    this.stuService.updateHomeworks(this.homework).subscribe((homework)=>{
      console.log(homework);
      this.router.navigate(['/teacher/homeworkList']);
    },(error)=>{
      console.log(error);
    });

  }

}
}
