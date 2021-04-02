import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import Book from '../models/book';
import Author from '../models/author';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent implements OnInit {

  books: Book[] = [];
  // tslint:disable-next-line: no-inferrable-types
  searchedTerm: string = '';

  setSearchedTerm(str: string): void {
    this.searchedTerm = str;
  }

  constructor(private bookService: BookService, private authorService: AuthorService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.bookService.getAllBooks().subscribe(
      (books) =>  { console.log(books); this.books = books; },
      (err) => alert(err.message)
    );
  }

}
