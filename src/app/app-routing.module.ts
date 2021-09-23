import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import { LoginSignupComponent } from './login-signup/login-signup/login-signup.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { GetbooksComponent } from './getbooks/getbooks/getbooks.component';
import { CartComponent } from './cart/cart/cart.component';

const routes: Routes = [
  {path: '',component: LoginSignupComponent,
  children: [
    { path: 'register', component: SignupComponent },
    { path: 'login', component: LoginComponent }
  ],},
  {path: 'dashboard', component:DashboardComponent,
  children: [
    { path: 'books', component: GetbooksComponent },
    { path: 'cart',component: CartComponent},
  ],},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
