import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FeedbackClass } from '../feedback-class';


const options={
  headers : new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable()
export class FeedbackService {

  private feedback: FeedbackClass;
  constructor(private _http:HttpClient) { }

  createFeedback(feedback:FeedbackClass){
    
    console.log("Post Feedback");
    let body= JSON.stringify(feedback);
    return this._http.post('http://localhost:8080/api/v1/feedback/addfeedback',body,options); 
  }

  // setter(feedback:FeedbackClass){
  //   this.feedback=feedback;
  // }
  //   getter(){
  //     return this.feedback;
  //   }

}
