import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  {
    path:'',
    component:LoginPageComponent
  },
  {
    path:'orders',
    component:OrderListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
