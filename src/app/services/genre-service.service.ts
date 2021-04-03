import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Genre from '../models/genre';
import env from '../../../env';

@Injectable({
  providedIn: 'root'
})
export class GenreServiceService {

  private baseEndpoint = 'genres';
  constructor(private http: HttpClient) { }

  getGenres(): Observable<Genre[]> {
    const adjustedEndpoint = `${env.API_DOMAIN}/${this.baseEndpoint}`;
    return this.http.get<Genre[]>(adjustedEndpoint);
  }

  getByGenre(genreId: number): Observable<Genre> {
    const adjustedEndpoint = `${env.API_DOMAIN}/${this.baseEndpoint}/${genreId}`;
    return this.http.get<Genre>(adjustedEndpoint);
  }
}
