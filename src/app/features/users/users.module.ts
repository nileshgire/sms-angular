import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { UsersRoutingModule } from "./users-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        CreateUserComponent,
        ViewUsersComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        FormsModule
    ]
})

export class UsersModule { }