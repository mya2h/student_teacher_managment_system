import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../Service/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private logservice:AuthService) { }

  ngOnInit() {
  }
  role:String;
  getrole(){
    this.role=this.logservice.getRole();
    if(this.role=="teacher"){
     return true;
    }
    else{
      return false;
    }
  }

}
