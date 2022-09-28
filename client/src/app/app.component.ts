import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating App';

  users: any;

  constructor(private accountService: AccountService){
  }

  ngOnInit(){
    this.setCurrentUser();
  }
  
  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }
}
//
/*
The main reason of Dependency Injection is to avoid the hard dependency between classes 
and the decoupling of object creation from using of this objects enables you to 
replace dependencies without changing the class which is using them.

Injector - Responsible for creating of objects and inject it into the constructor of the class 
*/