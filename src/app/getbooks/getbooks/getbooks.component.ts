import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookservicesService } from 'src/services/bookservices/bookservices.service';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-getbooks',
  templateUrl: './getbooks.component.html',
  styleUrls: ['./getbooks.component.scss']
})
export class GetbooksComponent implements OnInit {

 
  BookQuanity: number = 0;
  booksArray: any;
  @Input() card: any;
  id: any;

  constructor(private bookservice: BookservicesService,
     private router: Router,
     public dialog: MatDialog,
     private dataService : DataService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {
    this.bookservice.getallBook('Books').subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.data;
      // this.booksArray.reverse();
      console.log(this.booksArray);
    });
  }
  toBookDetails( book : any)
  {
    this.dataService.sendBooks(book);
    this.router.navigateByUrl("bookdetails");
  }
}