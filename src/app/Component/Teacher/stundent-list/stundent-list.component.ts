import { Component, OnInit, ViewChild } from '@angular/core';
import { TeacherService } from '../../../Service/teacher.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { students } from '../../../Model/studList';
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
  getStudentInfo() {
    this.stud.getStudents().subscribe(res => {
      console.log(res);
      this.dataSource.data = res as students[];
      console.log(this.dataSource.data);
    })
  }
  public redirectToDelete(id) {
    console.log(id);
    // this.dialog.open(DeleteComponent,{
    //   width:'500px',
    //   data:{
    //     id:id
    //   }
    // }).afterClosed()
    // .subscribe(result=>{
    //   this.getStudentInfo()
    // })

  }
  public redirectToUpdate(id) {
    console.log(id);
    // console.log(id);
    // this.dialog.open(UpdateComponent,{
    //   width:'500px',
    //   data:{
    //     id:id
    //   }
    // }).afterClosed()
    // .subscribe(result=>{
    //   this.getStudentInfo()
    // })
  }
}
