import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  user : String | null;
  title = 'sms';
  constructor (private router:Router) {
    this.user = sessionStorage.getItem("user");
    if(this.user == null){
      this.router.navigate(["auth/login"]);
    }
  }
}
