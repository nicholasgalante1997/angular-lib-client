import { Component, OnInit } from '@angular/core';
import Book from '../models/book';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  bookOfTheDay: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
