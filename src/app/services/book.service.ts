import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Book from '../models/book';

@Injectable({providedIn: 'root'})
export class BookService {
  private baseEndpoint: string = 'books';
}
