import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookservicesService } from 'src/services/bookservices/bookservices.service';
import { DialogboxComponent } from 'src/app/dialogbox/dialogbox/dialogbox.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-getbooks',
  templateUrl: './getbooks.component.html',
  styleUrls: ['./getbooks.component.scss']
})
export class GetbooksComponent implements OnInit {

  BookQuanity: number = 0;
  booksArray: any;
  @Input() card: any
  constructor(private service: BookservicesService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBooks();
  }


  getBooks() {
    this.service.getallBook('Books').subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.data;
      // this.booksArray.reverse();
      console.log(this.booksArray);

    });
  }

  openDialog(card: any) {
    let diaLogRef = this.dialog.open(DialogboxComponent, {
      width: "700px",
      maxWidth: "auto",
      data: card

    });
    console.log(card)
  }
}