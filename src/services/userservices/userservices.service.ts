import { Injectable } from '@angular/core';
import { HttpservicesService } from '../httpservices/httpservices.service';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  constructor(private http: HttpservicesService) { }
  loginUser(data: any) {
    //console.log("given data is", data)
    return this.http.loginUser('User/login', data);
  }
   //login user  http service
   signUpUser(data: any) {
    //console.log("given data is", data)
    return this.http.SignUpUser('User/Register', data);
   }
   forget(data: any)
   {
     return this.http.Post("User/forgetpassword", data, null, false);
   }
  }

