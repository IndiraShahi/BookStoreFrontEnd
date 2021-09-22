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
  loginUser(url: any, data: any) {

    return this.http.post(this.BaseUrl + url, data);
  }

  SignUpUser(url: any, data: any) {
    return this.http.post(this.BaseUrl + url, data);
  }
}
