import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup/signup.component';
import { LoginComponent } from './login/login/login.component';
import { LoginSignupComponent } from './login-signup/login-signup/login-signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule ,  FormsModule} from '@angular/forms';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { GetbooksComponent } from './getbooks/getbooks/getbooks.component';
import { DialogboxComponent } from './dialogbox/dialogbox/dialogbox.component';
import { CartComponent } from './cart/cart/cart.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword/forgetpassword.component';
import { AuthguardService } from 'src/services/authguard/authguard.service';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LoginSignupComponent,
    DashboardComponent,
    GetbooksComponent,
    DialogboxComponent,
    CartComponent,
    ForgetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ScrollingModule,
    FlexLayoutModule,
    MatDialogModule,
    FormsModule,
    MatToolbarModule
  ],
  providers: [
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
