import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Author from '../models/author';
import env from 'env';

@Injectable({providedIn: 'root'})
export class AuthorService {
  private baseEndpoint = 'authors';
  constructor(private http: HttpClient) {}

  getAuthors(): Observable<Author[]>{
    const adjustedEndpoint = `${env.API_DOMAIN}/${this.baseEndpoint}`;
    return this.http.get<Author[]>(adjustedEndpoint);
  }

}