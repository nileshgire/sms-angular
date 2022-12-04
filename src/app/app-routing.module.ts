import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';

export const routes: Routes = [
  { path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component : HomeComponent,
    children : [
      {
        path: 'orders',
        loadChildren: () => import('./features/orders/orders.module').then(m => m.OrdersModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
