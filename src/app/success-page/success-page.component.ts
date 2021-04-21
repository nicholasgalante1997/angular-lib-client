import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Book from '../models/book';
import Genre from '../models/genre';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements OnInit {

  uploadedBook: Book;

  async handleBookAssignment(id: number) {
    try {
      const b: Book = await this.bookService.getBookById(id).toPromise();
      this.uploadedBook = b;
    } catch (e) {
      alert(e.message);
    }
  }

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params['id'], 10);
    this.handleBookAssignment(id);
  }

}
