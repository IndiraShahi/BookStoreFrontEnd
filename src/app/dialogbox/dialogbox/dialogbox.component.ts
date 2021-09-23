import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BookservicesService } from 'src/services/bookservices/bookservices.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
export class DialogboxComponent implements OnInit {

  booksArray:any;
card:any
bookId:any;
constructor(@Inject(MAT_DIALOG_DATA) public data: any,private service: BookservicesService,
 private snackBar :MatSnackBar,private route:ActivatedRoute, private cart: DialogboxComponent) {
  console.log("this is my card", data)
}

  ngOnInit(): void {
    this.addToCart();
  }
  getBooks() {
    this.service.getallBook('Books').subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.result;
      // this.booksArray.reverse();
      console.log(this.booksArray);

    });
  }
  addToCart(){
    let data = {
      BookId: this.data.bookId
    }
  }
    // console.log (data )
    // this.cart.addToCart(data).subscribe((response:any)=>{
    //   console.log(response);
    //   this.snackBar.open('Book Added To Cart', 'close')._dismissAfter(2000);
    // },
    //   (error: any) => {
    //     this.snackBar.open('Error while adding book to cart', 'close')._dismissAfter(2000);
    //     console.log(error);
    //   })  
  } 
