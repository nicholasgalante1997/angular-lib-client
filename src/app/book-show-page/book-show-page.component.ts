import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Author from '../models/author';
import Book from '../models/book';
import Genre from '../models/genre';
import { AuthorService } from '../services/author.service';
import { BookService } from '../services/book.service';
import { GenreServiceService } from '../services/genre-service.service';

@Component({
  selector: 'app-book-show-page',
  templateUrl: './book-show-page.component.html',
  styleUrls: ['./book-show-page.component.css']
})
export class BookShowPageComponent implements OnInit, AfterViewChecked {

  routeParamId: number;
  book: Book;
  genre: Genre;
  author: Author;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private genreService: GenreServiceService,
    private authorService: AuthorService,
    private bookService: BookService,
  ) { }

  ngAfterViewChecked(): void {
    if (this.book && this.genre === undefined){
      this.genreService.getByGenre(this.book.genreId).subscribe(
        (genre) => { console.log(genre); this.genre = genre; },
        (err) => console.log(err),
      );
      this.authorService.getAuthorById(this.book.authorId).subscribe(
        (author) => { console.log(author); this.author = author; },
        (err) => console.log(err.message),
      );
    }
  }

  ngOnInit(): void {
   this.routeParamId = this.route.snapshot.params['id'];
   this.bookService.getBookById(this.routeParamId).subscribe(
     (book) => { console.log(book); this.book = book; },
     (err) => alert(err.message)
   );
  }

}
