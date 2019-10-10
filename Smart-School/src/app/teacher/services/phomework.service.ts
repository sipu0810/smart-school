import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { HomeworkClass } from '../../homeworkClass';




const options={
  headers : new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable()
export class PhomeworkService {
  private homework:  HomeworkClass;
  baseUrl:string='http://localhost:8080/api/v1/homework';

  constructor(private _http:HttpClient) { }
 
  getHomeworks(){
    //return this._http.get(this.baseUrl,this.options).map((response:Response)=>response.json());
  //  .catch(this.errorHandler);
  return this._http.get('http://localhost:8080/api/v1/homework');
  //options).map((response:Response)=>response.json());
  }
 
  getHomework(id:number){
  //  return this._http.get(this.baseUrl + id,this.options).map((response:Response)=>response.json());
    //.catch(this.errorHandler);
    return this._http.get('http://localhost:8080/api/v1/homework/'+id);
  }

  deleteHomework(id:number){
    //return this._http.delete(this.baseUrl+'/students/'+id,this.options).map((response:Response)=>response.json());
    //.catch(this.errorHandler);
   
    console.log("Beeta");
    return this._http.delete('http://localhost:8080/api/v1/homework/'+id,options).map((response:Response)=>response.json());
    
  }

  createHomework(homework:HomeworkClass){
    //return this._http.post(this.baseUrl+'/students',JSON.stringify(studnet), this.options).map((response:Response)=>response.json());
    //.catch(this.errorHandler);
    console.log("Post Homework");
    let body= JSON.stringify(homework);
    return this._http.post('http://localhost:8080/api/v1/homework/addhomework',body,options); 
  }

  updateHomeworks(Homework:HomeworkClass){
    //return this._http.put(this.baseUrl+'/Homeworks',JSON.stringify(studnet), this.options).map((response:Response)=>response.json());
    //.catch(this.errorHandler);
    console.log("update Homework");

    let body= JSON.stringify(Homework);
    return this._http.put('http://localhost:8080/api/v1/homework/update/',body,options); 
  }

  errorHandler(error:Response){
   console.log(error);
   // return Observable.throw(error||"Server Error");
    //return Observable.throw(error||"server Error");
  }

setter(Homework:HomeworkClass){
  this.homework=Homework;
}
  getter(){
    return this.homework;
  }

}
