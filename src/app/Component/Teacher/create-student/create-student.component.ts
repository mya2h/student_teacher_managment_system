import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TeacherService } from '../../../Service/teacher.service'
import { Router } from '@angular/router';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import {students} from '../../../Model/studList'
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  public addStud: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CreateStudentComponent>,
    @Inject(MAT_DIALOG_DATA)public data: any, private stud:TeacherService,private route:Router
  ) { }

  ngOnInit() {
    this.addStud = new FormGroup({
      id:new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      email:new FormControl('', [Validators.required]),
      contact:new FormControl('',[Validators.required]),
      grade:new FormControl('',[Validators.required])
    });
  }
  public submitForm = (student) => {
   const stud:students={
    id:student.id, 
    name:student.name,
    email:student.email,
    contact:student.contact,
    grade:student.grade
   }
   this.stud.createStudent(stud).subscribe(data=>{
    this.dialogRef.close
   })
  }


}
