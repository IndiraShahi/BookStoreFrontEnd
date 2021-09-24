import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {
  BaseUrl = environment.LOGIN_URL;
  https = new HttpHeaders();

  constructor(private http: HttpClient) { }

  Post(url: any, data: any, token: any, headers: boolean)
  {
    return this.http.post(this.BaseUrl + url, data);
  }
  loginUser(url: any, data: any) {

    return this.http.post(this.BaseUrl + url, data);
  }

  SignUpUser(url: any, data: any) {
    return this.http.post(this.BaseUrl + url, data);
  }
  getallBook(url:any){
    return this.http.get(this.BaseUrl + url);
  }
  getCarts(url:any){
    let token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(this.BaseUrl + url, options);
  }
 
  addToCart(url: any, data: any) {
    let token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.BaseUrl + url, data, options);
  }
}

