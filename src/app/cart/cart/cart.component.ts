import { Component, OnInit } from '@angular/core';
import { CartservicesService } from 'src/services/cartservices/cartservices.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  quantity:number=1;
  getBook:any
  card:any
  constructor(private cart: CartservicesService) { }

  ngOnInit(): void {
    this.getCarts();
  }
  getCarts() {
    throw new Error('Method not implemented.');
  }

}
