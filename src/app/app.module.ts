import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CreateUserComponent } from './features/users/create-user/create-user.component';
import { ViewUsersComponent } from './features/users/view-users/view-users.component';


@NgModule({
  declarations: [
    AppComponent,
    // CreateUserComponent,
    // ViewUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
