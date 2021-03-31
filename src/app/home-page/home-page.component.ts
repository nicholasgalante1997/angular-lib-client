import { AfterContentChecked, AfterContentInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import Book from '../models/book';
import Author from '../models/author'
import { BookService } from '../services/book.service';
import { AuthorService } from '../services/author.service';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy, AfterContentInit {

  bookOfTheDay: Book;
  author: Author;
  bookSubsciption: Subscription;
  authorSubscription: Subscription;
  requestError: string;

  constructor(private bookService: BookService, private authorService: AuthorService) { }

  getBookOfTheDay(): void {
    this.bookSubsciption = this.bookService.getBookOfTheDay()
    // tslint:disable-next-line: deprecation
    .subscribe(
      (book) => this.bookOfTheDay = book,
      (err) => this.requestError = err.message);
  }

  getAuthorOfTheDay(): void {
    this.authorService.getAuthors()
    .subscribe(
      (authors) => this.author = authors.filter(a => a.authorId === this.bookOfTheDay.authorId)[0],
      (err) => this.requestError = err.message
    );
  }


  ngOnInit(): void {
    this.getBookOfTheDay();
  }

  ngAfterContentInit(): void {
    this.getAuthorOfTheDay();
  }


  ngOnDestroy(): void{
    this.bookSubsciption.unsubscribe();
  }


}
