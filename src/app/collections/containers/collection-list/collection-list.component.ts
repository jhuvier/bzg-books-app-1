import { Component, OnInit } from '@angular/core';
import { BookShelvesListService } from "../../services/list/bookshelves-list.service";

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {

  bookShelvesList: any[];

  constructor(private bookShelvesListService: BookShelvesListService) { 
    this.bookShelvesList = [];
  }

  ngOnInit() {
    this.bookShelvesListService.getBookShelvesList()
    .subscribe(
      (bookShelves:any) => {
        if(bookShelves){
          this.bookShelvesList = bookShelves.items;
        }
      }
    );
  }
}
