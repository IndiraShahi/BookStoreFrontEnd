import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpservicesService } from '../httpservices/httpservices.service';
@Injectable({
  providedIn: 'root'
})
export class CartservicesService {

  constructor(private http: HttpservicesService) { }
  url = environment.LOGIN_URL;

  getCartBooks(url: any)
  {
    return this.http.getCartBooks('Cart');
  }
  
  addToCart(data:any){
    return this.http.addToCart("Cart",data);
  }
  addToWishlist(data:any){
    return this.http.addToWishList("Wishlist" ,data);
  }
  removeFromCart(data: any)
  {
    return this.http.removeFromCart(data);
  }
  
  getWishlist(url: any)
  {
    console.log("given data is", url);
    return this.http.getWishlist(url);
  }
  removeFromWishlist(data: any)
  {
    return this.http.removeFromWishlist(data);
  }
}
