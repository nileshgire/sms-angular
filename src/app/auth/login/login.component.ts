import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  isValid = true;

  demoUser : user = {
      id : "Hello",
      email : "hello@gmail.com",
      pass : "123456"
  }

  id = "Hello";
  email !: string;
  password !: string;
  User !: user;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  login(){
    this.User = {
      id : this.id,
      email : this.email,
      pass : this.password
    }
    if(JSON.stringify(this.User) === JSON.stringify(this.demoUser)){
      sessionStorage.setItem("user", JSON.stringify(this.User));
      this.router.navigate(["home"]);
    }else{
      this.isValid = false;
    }
  }

}
