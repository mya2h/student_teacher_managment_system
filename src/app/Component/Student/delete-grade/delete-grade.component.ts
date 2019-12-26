import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../../Service/student.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-delete-grade',
  templateUrl: './delete-grade.component.html',
  styleUrls: ['./delete-grade.component.css']
})
export class DeleteGradeComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteGradeComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any, private stud: StudentService, private route: Router, private _snackBar: MatSnackBar
  ) { }
  ngOnInit() {

  }
  public delete(id) {
    this.stud.deleteGradeInfo(id).subscribe(data => {
      this.dialogRef.close();
    }, err => {
      this._snackBar.open("Unable to delete student", "", {
        duration: 2000,
      });
    })
  }
}
