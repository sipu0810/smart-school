import { Component, OnInit } from '@angular/core';
import { FeedbackClass } from '../../feedback-class';
import { Router } from '@angular/router';
import { FeedbackService } from '../../feedbacks/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  private feedback: FeedbackClass=new FeedbackClass();
  constructor(private router: Router,private feedbackService:FeedbackService) { }

  ngOnInit() {
   // this.feedback=this.feedbackService.getter();
  }

processFeedbackForm(){
  if(this.feedback.feedbackId==undefined){
    this.feedbackService.createFeedback(this.feedback).subscribe((feedback)=>{
      console.log(feedback);
           
      alert('Posted');
      this.router.navigate(['parent/details']);
    },(error)=>{
      alert('Please try again!');
      console.log("error");
      console.log(error);
    });
  }


}

}
