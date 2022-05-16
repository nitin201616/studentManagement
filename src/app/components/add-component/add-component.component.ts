import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {
  message = false;
  studentAdded:any;
  allStudent:any;
  recordExists=false;
  addStudent = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email])
  });

  get f() { return this.addStudent.controls; }

  constructor(private studentServ:StudentsService, private route:Router) { }

  ngOnInit(): void {

    
  }

  removeAlert(){
    this.message = false;
    this.addStudent.reset();
  }

  onSubmit(){
    debugger;
    this.studentServ.getAllStudents().subscribe(data => {
      this.allStudent = data;
      this.recordExists = this.allStudent.some((item:any) => item.email === this.addStudent.value.email);
      if (!this.recordExists) {
        this.studentServ.addStudent(this.addStudent.value).subscribe(result => {
          this.studentAdded = result;
          this.message= true;
          console.log(result);
        });
      }
    });

    
  }
}
