import { Pipe, PipeTransform } from '@angular/core';
import Book from './models/book';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {
  public transform(items: [], genreId: number): Book[] {
    if (!items){
      return [];
    }
    if (!genreId){
      return items;
    }
    return items.filter((book: Book) => book.genreId === genreId);
  }
}
