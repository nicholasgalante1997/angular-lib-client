import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchValue: string;
  @Output() searchPressEvent = new EventEmitter<string>();

  constructor() { }

  onSearchPress(): void {
    this.searchPressEvent.emit(this.searchValue);
  }

  ngOnInit(): void {
  }

  onInput(): void {
    console.log(this.searchValue);
  }

}
