import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentsService } from 'src/app/students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {
  message = false;
  studentEdited:any;
  initialValue = '';

  editStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private studentServ:StudentsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.studentServ.getStudentByID(this.route.snapshot.params['id']).subscribe(result => {
      this.editStudent.get('name')?.setValue( JSON.parse(JSON.stringify(result)).name );
      this.editStudent.get('email')?.setValue( JSON.parse(JSON.stringify(result)).email );
      this.initialValue = this.editStudent.get('name')?.value;
    })
  }

  removeAlert(){
    this.message = false;
    this.editStudent.reset();
  }

  onSubmit(){
    this.studentServ.editStudent(this.route.snapshot.params['id'],this.editStudent.value).subscribe(result => {
      this.studentEdited = result;
      this.message= true;
    });
  }


}
