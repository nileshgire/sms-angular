import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./common/footer/footer.component";
import { NavbarComponent } from "./common/navbar/navbar.component";
import { SidebarComponent } from "./common/sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";


@NgModule({
    declarations: [
        HomeComponent,
        FooterComponent,
        NavbarComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})

export class LayoutModule { }