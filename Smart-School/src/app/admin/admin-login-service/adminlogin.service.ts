import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class AdminloginService {
constructor(private http:HttpClient)
{ }
 
getpassword(id:number)
{
return this.http.get('http://localhost:8080/api/v1/students/' + id );
}
}