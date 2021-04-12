import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { GenreServiceService } from '../services/genre-service.service';

@Component({
  selector: 'app-recommended-bookcase',
  templateUrl: './recommended-bookcase.component.html',
  styleUrls: ['./recommended-bookcase.component.css']
})
export class RecommendedBookcaseComponent implements OnInit {

  constructor(private bookService: BookService, private genreService: GenreServiceService) { }

  ngOnInit(): void {
  }

}
