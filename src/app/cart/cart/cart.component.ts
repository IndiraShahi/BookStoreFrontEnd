import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from 'src/services/AddressService/address.service';
import { CartservicesService } from 'src/services/cartservices/cartservices.service';
import { CommunicateService } from 'src/services/communicateSevices/communicate.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: any;
  addresses: any;
  displayAddress = true;
  displayCart = true;


  constructor(private cartService: CartservicesService,
    private addressService: AddressService) { }

  ngOnInit(): void
  {
    this.displayCartBooks();
  }

  displayCartBooks()
  {
    this.cartService.getCartBooks('Cart').subscribe((response: any) =>
    {
      console.log(response);
      this.cart = response.data;
      console.log(this.cart);
    })
  }

  removeFromCart(id: any)
  {
    this.cartService.removeFromCart(id).subscribe((response: any) =>
    {
      console.log(response);
      this.ngOnInit();
    });
  }

  getAddress()
  {
    this.addressService.getCustomerAddress('Address').subscribe((response: any) =>
    {
      console.log(response);
      this.addresses = response.data;
      console.log(this.addresses);
      this.displayAddress = !this.displayAddress;
    })
  }

  submit()
  {
    this.displayCart = !this.displayCart;
  }
}