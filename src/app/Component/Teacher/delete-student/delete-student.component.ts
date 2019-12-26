import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from '../../../Service/teacher.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteStudentComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any, private stud: TeacherService, private route: Router, private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {

  }

  public delete(id) {
    
    this.stud.deleteStudent(id).subscribe(data => {
      this.dialogRef.close();
    }, err => {
      this._snackBar.open("Unable to delete student", "", {
        duration: 2000,
      });
    })
  }
}
