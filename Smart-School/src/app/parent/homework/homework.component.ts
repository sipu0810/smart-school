import { Component, OnInit } from '@angular/core';
import { HomeworkClass } from '../../homeworkClass';
import { Router } from '@angular/router';
import { PhomeworkService } from '../../teacher/services/phomework.service';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {

  public homework;
data;
  constructor(private homeService:PhomeworkService ,private router: Router) { }

  ngOnInit() {
    this.getHomework();
  }
  getHomework(){
    this.homeService.getHomeworks().subscribe(
      data=>{this.homework=data
      console.log("homework")},
      err=>console.error(err),
      ()=>console.log("getting data")
      
    );
  }

}
