import { Component, OnInit } from '@angular/core';
import { CartservicesService } from 'src/services/cartservices/cartservices.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  token: any
  wishlistBook: Array<any> =[];

  constructor(private cart : CartservicesService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('Token')
    this.getwishlist();
  }
  getwishlist() {
    console.log("get wishlist api");
    this.cart.getWishlist("Wishlist").subscribe((response: any) => {
      console.log(response);
      this.wishlistBook = response.data;
      console.log("returning data", this.wishlistBook);
    })
  }

  removeFromWishlist(id: any)
  {
    this.cart.removeFromWishlist(id).subscribe((response: any) =>
    {
      console.log(response);
      this.ngOnInit();
    });
  }
}