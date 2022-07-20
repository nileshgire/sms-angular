import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateOrderComponent } from "./create-order/create-order.component";
import { ViewOrderComponent } from "./view-order/view-order.component";
import { OrdersRoutingModule } from "./orders-routing.module";

@NgModule({
    declarations: [
        CreateOrderComponent,
        ViewOrderComponent
    ],
    imports: [
        CommonModule,
        OrdersRoutingModule
    ]
})

export class OrdersModule { }