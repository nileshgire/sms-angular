import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userId !: string;
  email !: string;
  password !: string;

  users: user[] = []; 

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    const user = {
      id : this.userId,
      pass : this.password,
      email : this.email
    }
    this.users.push(user);
    sessionStorage.setItem("user", JSON.stringify(this.users));
  }

}
