import { Injectable } from '@angular/core';
import { HttpservicesService } from '../httpservices/httpservices.service';

@Injectable({
  providedIn: 'root'
})
export class CartservicesService {

  constructor(private http: HttpservicesService) { }
 
  getCarts(url: any) {
    console.log("given data is", url);
    return this.http.getCarts(url);
  }
  addToCart(data:any){
    return this.http.addToCart("Cart", data);
  }
}