import { Injectable } from '@angular/core';
import  {Student}from '../studentmodel/student';


import {STUDENTS_PERSONS} from '../studentmodel/student-data';
import { findIndex } from 'lodash';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StudentService {

  // constructor() { }
  
  

  private spersons=STUDENTS_PERSONS;

  getStudentsFromData():Student[]{
    console.log(this.spersons);
    return this.spersons;
  }
  
  addStudent(student:Student){
    this.spersons.push(student);
    console.log(this.spersons);
    

  }

  updateStudent(student:Student){
    let index=findIndex(this.spersons,(u:Student)=>{
      return u.name=== student.name;
    })
    this.spersons[index]=student;
  }
   deleteStudent(student:Student){
    this.spersons.splice(this.spersons.indexOf(student),1);
    console.log(this.spersons);
  }
  
  constructor(private http:HttpClient)
  { }
   
  getpassword(id:number)
  {
  return this.http.get('http://localhost:8080/api/v1/students/login/' + id );
  }

}
