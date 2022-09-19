import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating App';

  users: any;

  ngOnInit(){
    this.getUsers();
  }
  
  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error)
      
    });
  }

  constructor(private http: HttpClient){
  }
}
//
/*
The main reason of Dependency Injection is to avoid the hard dependency between classes 
and the decoupling of object creation from using of this objects enables you to 
replace dependencies without changing the class which is using them.

Injector - Responsible for creating of objects and inject it into the constructor of the class 
*/