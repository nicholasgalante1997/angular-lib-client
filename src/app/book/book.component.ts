import { Component, OnInit, Input } from '@angular/core';
import Author from '../models/author';
import Book from '../models/book';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  book: Book;
  author: Author;

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.authorService.getAuthorById(this.book.authorId).subscribe(
      (author) => this.author = author,
      err => alert(err.message)
    );
  }

}
