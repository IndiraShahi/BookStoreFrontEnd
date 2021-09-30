import { Injectable } from '@angular/core';
import { HttpservicesService } from '../httpservices/httpservices.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpService: HttpservicesService) { }

  getCustomerAddress(url: any)
  {
    return this.httpService.getAddress(url);
  }
}
