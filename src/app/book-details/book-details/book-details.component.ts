import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookservicesService } from 'src/services/bookservices/bookservices.service';
import { CartservicesService } from 'src/services/cartservices/cartservices.service';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  // data: any;
  booksArray: any;
  card: any
  bookId: any;
  book : any;

  constructor(private router: Router,
    private snackBar: MatSnackBar,
    public cart: CartservicesService,
    private service: BookservicesService,
    private dataservice : DataService) {

  }

  ngOnInit(): void {
   this.dataservice.receiveAllBooks.subscribe((response:any)=>
   {
    console.log(response);
    this.book=response;
   })
  }

  addToCart() {
    let data = {
      bookId: this.book.bookId,
    }
    console.log(data)
    this.cart.addToCart(data).subscribe((response: any) => {
      console.log(response);
      this.snackBar.open('Book Added To Cart', 'close')._dismissAfter(2000);
    },
      (error: any) => {
        this.snackBar.open('Error while adding book to cart', 'close')._dismissAfter(2000);
        console.log(error);
      })
  }
  addWishList() {
    let data = {
      bookId: this.book.bookId,
    }
    console.log(data)
    this.cart.addToWishlist(data).subscribe((response: any) => {
      console.log(response);
      this.snackBar.open('Book Added To WishList', 'close')._dismissAfter(2000);
    },
      (error: any) => {
        this.snackBar.open('Error while adding book to WishList', 'close')._dismissAfter(2000);
        console.log(error);
      })
  }

}
