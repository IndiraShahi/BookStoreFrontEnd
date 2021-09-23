import { Injectable } from '@angular/core';
import { HttpservicesService } from '../httpservices/httpservices.service';

@Injectable({
  providedIn: 'root'
})
export class BookservicesService {

  constructor(private http: HttpservicesService) {   }
 
  getallBook(url: any) {
    console.log("given data is", url);
    return this.http.getallBook(url);
  }
}