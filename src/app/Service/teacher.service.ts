import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {students} from '../Model/studList';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  apiurl = 'api/student';     
  constructor(private http:HttpClient) { }
  httpOptions ={
    headers:new HttpHeaders({
     'Content-Type':'application/json'
    })    
  }
  getStudents(): Observable<any> {
    return this.http.get(this.apiurl)
  }
  deleteStudent(id:string):Observable<any>{
    return this.http.delete(`${this.apiurl}/${id}`)
  }
  updateStudent(user:students,id:string):Observable<any>{
    return this.http.put(`${this.apiurl}/${id}`,user,this.httpOptions)
  }

}