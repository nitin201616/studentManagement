import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { 

  }

  url = 'http://localhost:3000/students';

  getAllStudents(){
    return this.http.get(this.url);
  }

  addStudent(data:any){
    return this.http.post(this.url,data);
  }

  deleteStudent(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }

  getStudentByID(id:any){
    return this.http.get(`${this.url}/${id}`);
  }

  editStudent(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data);
  }


}

