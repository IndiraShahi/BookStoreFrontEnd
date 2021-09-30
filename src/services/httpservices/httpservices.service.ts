import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {
  BaseUrl = environment.LOGIN_URL;
  token : any;
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
  removeFromCart(data: any)
  {
    this.token = localStorage.getItem('Token');
    var headerObject = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let Options = {
      headers: headerObject,
      'Content-Type': 'application/json'
    }
    return this.http.delete(this.BaseUrl + `Cart?cartId=${data}`, Options);
  }

  getCartBooks(url: any)
  {
    this.token = localStorage.getItem('Token');
    var headerObject = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let Options = {
      headers: headerObject,
      'Content-Type': 'application/json'
    }
    return this.http.get(this.BaseUrl + url, Options);
  }

  addToCart(url: any, data: any) {
    this.token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.BaseUrl + url, data, options);
  }
  addToWishList(url: any, data: any) {
    this.token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.BaseUrl + url, data, options);
  }
  getWishlist(url:any){
    let token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    console.log(options);
    return this.http.get(this.BaseUrl + url, options);
  }
  removeFromWishlist(data: any)
  {
    this.token = localStorage.getItem('Token');
    var headerObject = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let Options = {
      headers: headerObject,
      'Content-Type': 'application/json'
    }
    return this.http.delete(this.BaseUrl + `Wishlist?wishlistId=${data}`, Options);
  }
  getAddress(url: any)
  {
    this.token = localStorage.getItem('Token');
    var headerObject = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    let Options = {
      headers: headerObject,
      'Content-Type': 'application/json'
    }
    return this.http.get(this.BaseUrl + url, Options);
  }
}