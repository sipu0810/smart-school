import { Injectable } from '@angular/core';
import {Http, Response,Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { StudentClass } from '../studentClass';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { StudentModel } from '../student-model';


const options={
  headers : new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable()
export class StuServiceService {
    private student:  StudentClass;
  constructor(private _http:HttpClient,private router:Router,private http: Http) { }
 
  getStudents(){
    //return this._http.get(this.baseUrl,this.options).map((response:Response)=>response.json());
  //  .catch(this.errorHandler);
  return this._http.get('http://localhost:8080/api/v1/students');
  //options).map((response:Response)=>response.json());
  }
 
  getStudent(id:number){
  //  return this._http.get(this.baseUrl + id,this.options).map((response:Response)=>response.json());
    //.catch(this.errorHandler);
    return this._http.get('http://localhost:8080/api/v1/students/'+id);
  }

  deleteStudent(id:number){
    //return this._http.delete(this.baseUrl+'/students/'+id,this.options).map((response:Response)=>response.json());
    //.catch(this.errorHandler);
    // console.log("Beeta");
    alert('deleted successfully');
    // this.router.navigate(['/teacher']);
    return this._http.delete('http://localhost:8080/api/v1/students/'+id,options);
    //.map((response:Response)=>response.json());
    
  }

  createStudents(student:StudentClass){
    //return this._http.post(this.baseUrl+'/students',JSON.stringify(studnet), this.options).map((response:Response)=>response.json());
    //.catch(this.errorHandler);
    // alert('created successfully');
    // console.log("create Stuedent");
    let body= JSON.stringify(student);
    return this._http.post('http://localhost:8080/api/v1/students/addStudent',body,options); 
  }

  updateStudents(student:StudentClass){
    //return this._http.put(this.baseUrl+'/students',JSON.stringify(studnet), this.options).map((response:Response)=>response.json());
    //.catch(this.errorHandler);

    // console.log("update database");
    
    let body= JSON.stringify(student);
    return this._http.put('http://localhost:8080/api/v1/students/update/',body,options); 
  }

  errorHandler(error:Response){
   console.log(error);
   // return Observable.throw(error||"Server Error");
    //return Observable.throw(error||"server Error");
  }


  getStudentByName(studentName: string): Promise<StudentModel[]> {
    
    const url = `http://localhost:8080/api/v1/students/findByName/${studentName}`;
    console.log("searching");
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as StudentModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    alert("No Such Student found"); //for demo purpose only
   // console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

setter(student:StudentClass){
  this.student=student;
}
  getter(){
    return this.student;
  }

}
