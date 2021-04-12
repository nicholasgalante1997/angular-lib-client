import { Component, Input, OnInit } from '@angular/core';
import Book from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-recommended-bookcase',
  templateUrl: './recommended-bookcase.component.html',
  styleUrls: ['./recommended-bookcase.component.css']
})
export class RecommendedBookcaseComponent implements OnInit {

  @Input() displayBook: Book;
  books: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(
      (books) => {console.log(books); this.books = books; },
      (err) => console.log(err),
      () => console.log('complete')
    );
  }

}
