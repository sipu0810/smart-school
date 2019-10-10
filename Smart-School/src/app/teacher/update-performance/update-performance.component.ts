import { Component, OnInit } from '@angular/core';
import { MarkClass } from '../../markClass';
import { Router } from '@angular/router';
import { PmarkService } from '../service/pmark.service';

@Component({
  selector: 'app-update-performance',
  templateUrl: './update-performance.component.html',
  styleUrls: ['./update-performance.component.css']
})
export class UpdatePerformanceComponent implements OnInit {

  private mark:MarkClass=new MarkClass(1,1,'',0,new Date);
  constructor(private router:Router,private markService:PmarkService) { }

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
    this.mark=this.markService.getter();
  }
  processMarksForm(){
    if(this.mark.m_id==undefined){
      this.markService.createMarks(this.mark).subscribe((mark)=>{
        console.log(mark);
        this.router.navigate(['/studentList']);
      },(error)=>{
        console.log(error);
      });
      
    }else{
      this.markService.updateMarks(this.mark).subscribe((mark)=>{
        console.log("Hello",mark);
        this.router.navigate(['/studentList']);
      },(error)=>{
        console.log(error);
      });
    }
  }

}
