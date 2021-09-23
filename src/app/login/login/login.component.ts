import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';
import { UserservicesService } from 'src/services/userservices/userservices.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  submitted: boolean = false;
  loginForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
    private user:UserservicesService,
    private snackBar:MatSnackBar,
    private router:Router,
    private route:ActivatedRoute) { }

    ///for oepn snackbar
    openSnackBar(message: string, duration: number) {
      let config = new MatSnackBarConfig();
      if (duration != 0)
      {
        config.duration = duration; 
      }
      this.snackBar.open(message, undefined, config);
    } 

    
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
 
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }

  let requestData = {
    email: this.loginForm.value.email,
    password: this.loginForm.value.password
  }
 
  this.user.loginUser(requestData).subscribe(
    (response: any) => {
      console.log(requestData);
      localStorage.setItem('Token', response['token']);
      this.openSnackBar('Login success', 2000);
      this.router.navigate(['dashboard/books']);
      console.log(response);
  })    
  }
}
