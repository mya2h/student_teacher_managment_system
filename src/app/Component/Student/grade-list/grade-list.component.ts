import { Component, OnInit, ViewChild } from '@angular/core';
import {StudentService} from '../../../Service/student.service'
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { studentGrade } from '../../../Model/gradeList'
import {DeleteGradeComponent} from '../delete-grade/delete-grade.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.css']
})
export class GradeListComponent implements OnInit {
  public displayedColumns = ['id', 'subject', 'creditHour',
    'instructor', 'grade','delete'];
  public dataSource = new MatTableDataSource<studentGrade>();

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private stud: StudentService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getCoursesInfo();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  getCoursesInfo() {
    this.stud.getGradeInfo().subscribe(res => {
      console.log(res);
      this.dataSource.data = res as studentGrade[];
      console.log(this.dataSource.data);
    })
  }
  public redirectToDelete(id) {
    console.log(id);
    this.dialog.open(DeleteGradeComponent,{
      width:'500px',
      data:{
        id:id
      }
    }).afterClosed()
    .subscribe(result=>{
      this.getCoursesInfo()
    })
  }
}


