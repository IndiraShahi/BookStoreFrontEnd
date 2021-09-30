import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import { LoginSignupComponent } from './login-signup/login-signup/login-signup.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { GetbooksComponent } from './getbooks/getbooks/getbooks.component';
import { CartComponent } from './cart/cart/cart.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword/forgetpassword.component';
import { WishlistComponent } from './wishlist/wishlist/wishlist.component';
import { BookDetailsComponent } from './book-details/book-details/book-details.component';
import { OrderComponent } from './order/order/order.component';

const routes: Routes = [
  {path: '',component: LoginSignupComponent,
  children: [
    { path: 'register', component: SignupComponent },
    { path: 'login', component: LoginComponent }
  ],},
  { path: 'forget-password', component: ForgetpasswordComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'books', pathMatch: 'full' },
      { path: 'books', component: GetbooksComponent },
      { path: 'cart',component: CartComponent},
      { path: 'wishlist', component: WishlistComponent }
      
      
    ],
  },
  {path: 'bookdetails', component: BookDetailsComponent},
  { path: 'order', component: OrderComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
