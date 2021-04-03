import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Book from '../models/book';
import env from 'env';

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
    const adjustedEndpoint: string = `${env.API_DOMAIN}/${this.baseEndpoint}/7`;
    return this.http.get<Book>(adjustedEndpoint);
  }

  getBookById(bookId: number): Observable<Book> {
    const adjustedEndpoint: string = `${env.API_DOMAIN}/${this.baseEndpoint}/${bookId}`;
    return this.http.get<Book>(adjustedEndpoint);
  }
}
