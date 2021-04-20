import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Book from '../models/book';
import env from 'env';
import { filter } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class BookService {
  private baseEndpoint = 'books';
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    // tslint:disable-next-line: no-inferrable-types
    const adjustedEndpoint: string = `${env.API_DOMAIN}/${this.baseEndpoint}`;
    return this.http.get<Book[]>(adjustedEndpoint);
  }

  getBookOfTheDay(): Observable<Book> {
    const adjustedEndpoint = `${env.API_DOMAIN}/${this.baseEndpoint}/4`;
    return this.http.get<Book>(adjustedEndpoint);
  }

  getBookById(bookId: number): Observable<Book> {
    const adjustedEndpoint = `${env.API_DOMAIN}/${this.baseEndpoint}/${bookId}`;
    return this.http.get<Book>(adjustedEndpoint);
  }

  create(book: Book): Observable<string> {
    const adjustedEndpoint: string = `${env.API_DOMAIN}/${this.baseEndpoint}`;
    return this.http.post<string>(adjustedEndpoint, {
      genreId: book.genreId,
      authorId: book.authorId,
      title: book.title,
      synopsis: book.synopsis,
      coverUrl: book.coverUrl
    });
  }
}
