import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/services/userservices/userservices.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  hide:boolean = true;
  submitted:boolean = false;
  registerForm!: FormGroup;
  constructor( private formBuilder: FormBuilder,
    private service: UserservicesService,
    private router:Router,
    private snackBar :MatSnackBar) {
     }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nameFull: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      mobileNo: ['', [Validators.required, Validators.minLength(10)]]
    })
  }
  get f() { return this.registerForm.controls; }
  
  submit() {
    this.submitted = true;
    
    if (this.registerForm.invalid) {
        return;
    }
    let data = { 
      fullName: this.registerForm.value.nameFull,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      mobileNumber: this.registerForm.value.mobileNo,
    }
    this.service.signUpUser(data).subscribe((response:any) =>{ 
      console.log(response);
      this.snackBar.open("Registration successfull.....", " ", { duration: 2000 });
      this.router.navigate(['login']);
    }, error => {
      console.log("error in register", error);
      this.snackBar.open("Registration fail.....", " ", { duration: 2000 });
    });
  }
}