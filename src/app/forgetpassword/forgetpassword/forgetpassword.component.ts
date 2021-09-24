import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/services/userservices/userservices.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  forgetPasswordForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserservicesService,
    private route: Router) { }

  ngOnInit(): void
  {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() { return this.forgetPasswordForm.controls; }

  onSubmit()
  {
    this.submitted = true;

    if (this.forgetPasswordForm.invalid)
    {
      return;
    }

    let requestFields = {
      email: this.forgetPasswordForm.value.email
    }

    this.userService.forget(requestFields).subscribe(response => console.log(response));
  }

  onSignup()
  {
    this.route.navigateByUrl('register');
  }
}