import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  studentList:any;
  dtOptions: DataTables.Settings = {};
  constructor(private studentServ: StudentsService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5,10,15,50],
      processing: true
    };
    this.studentServ.getAllStudents().subscribe(studentList => {
      console.log('jjasjdalskhdjsahfjdsahfdsa')
      this.studentList = studentList;
    })
  }

  deleteStudent(id:any){

    if(confirm("Are you sure to delete? "+ id)){
    this.studentServ.deleteStudent(id).subscribe(result => {
    });

    setTimeout(() => {
      this.ngOnInit();
    }, 1000)
  }
  
  }

}
