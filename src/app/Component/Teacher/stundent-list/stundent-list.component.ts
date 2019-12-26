import { Component, OnInit, ViewChild } from '@angular/core';
import { TeacherService } from '../../../Service/teacher.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { students } from '../../../Model/studList';
import {DeleteStudentComponent} from '../delete-student/delete-student.component';
import {UpdateStudentComponent} from '../update-student/update-student.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-stundent-list',
  templateUrl: './stundent-list.component.html',
  styleUrls: ['./stundent-list.component.css']
})
export class StundentListComponent implements OnInit {
  public displayedColumns = ['id', 'name', 'email',
    'contact', 'grade', 'update', 'delete'];
  public dataSource = new MatTableDataSource<students>();

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private stud: TeacherService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getStudentInfo();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  getStudentInfo() {
    this.stud.getStudents().subscribe(res => {
      console.log(res);
      this.dataSource.data = res as students[];
      console.log(this.dataSource.data);
    })
  }
  public redirectToDelete(id) {
    console.log(id);
    this.stud.deleteStudent(id).subscribe(data=>{
      console.log(data);
    })
    this.dialog.open(DeleteStudentComponent,{
      width:'500px',
      data:{
        id:id
      }
    }).afterClosed()
    .subscribe(result=>{
      this.getStudentInfo()
    })

  }
  public redirectToUpdate(id) {
    console.log(id);
    console.log(id);
    this.dialog.open(UpdateStudentComponent,{
      width:'500px',
      data:{
        id:id
      }
    }).afterClosed()
    .subscribe(result=>{
      this.getStudentInfo()
    })
  }
}
