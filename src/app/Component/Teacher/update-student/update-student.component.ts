import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TeacherService } from '../../../Service/teacher.service'
import { Router } from '@angular/router';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import {students} from '../../../Model/studList'
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  public updateStud: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<UpdateStudentComponent>,
    @Inject(MAT_DIALOG_DATA)public data: any, private stud:TeacherService,private route:Router
  ) { }

  ngOnInit() {
    this.updateStud = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email:new FormControl('', [Validators.required]),
      contact:new FormControl('',[Validators.required]),
      grade:new FormControl('',[Validators.required])
    });
  }
  public submitForm = (student,id) => {
   const stud:students={
    id:id, 
    name:student.name,
    email:student.email,
    contact:student.contact,
    grade:student.grade
   }
   this.stud.updateStudent(stud,id).subscribe(data=>{
    this.dialogRef.close
   })
  }

}
