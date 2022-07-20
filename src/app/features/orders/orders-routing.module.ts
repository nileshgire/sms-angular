import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';

const routes: Routes = [
  { path: '', redirectTo:'view', pathMatch: 'full'},
  { path: 'create', component: CreateOrderComponent },
  { path: 'view', component: ViewOrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
