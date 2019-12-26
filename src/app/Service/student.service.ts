import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {studentGrade} from '../Model/gradeList'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiurl = 'api/studentGrade';     
  constructor(private http:HttpClient) { }
  httpOptions ={
    headers:new HttpHeaders({
     'Content-Type':'application/json'
    })    
  }
  getGradeInfo(): Observable<any> {
    return this.http.get(this.apiurl)
  }
  deleteGradeInfo(id:string):Observable<any>{
    return this.http.delete(`${this.apiurl}/${id}`)
  }
}
