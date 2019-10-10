import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { MarkClass } from '../../markClass';
import { HttpHeaders ,HttpClient} from '@angular/common/http';

const options={
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable()
export class PmarkService {

  private mark: MarkClass;
  constructor(private http:HttpClient) { }

  createMarks(mark: MarkClass){
    let body=JSON.stringify(mark);
    return this.http.post('http://localhost:8080/api/v1/marks/addMarks',body,options);
  }

  updateMarks(mark:MarkClass){
    let body=JSON.stringify(mark);
    alert("successfully posted");
    return this.http.post('http://localhost:8080/api/v1/marks/addMarks',body,options);
  }
  setter(mark:MarkClass){
    this.mark=mark;
  }
    getter(){
      return this.mark;
    }
  
}
