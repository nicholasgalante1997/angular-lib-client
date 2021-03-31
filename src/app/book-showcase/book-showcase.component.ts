import { Component, Input, OnInit } from '@angular/core';
import Author from '../models/author';
import Book from '../models/book';

@Component({
  selector: 'app-book-showcase',
  templateUrl: './book-showcase.component.html',
  styleUrls: ['./book-showcase.component.css']
})
export class BookShowcaseComponent implements OnInit {

  @Input()
  book: Book;
  @Input()
  author: Author;
  constructor() { }

  ngOnInit(): void {
  }

}
