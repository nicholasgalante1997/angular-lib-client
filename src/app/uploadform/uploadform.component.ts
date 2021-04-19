import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Book from '../models/book';
import Genre from '../models/genre';
import { GenreServiceService } from '../services/genre-service.service';

@Component({
  selector: 'app-uploadform',
  templateUrl: './uploadform.component.html',
  styleUrls: ['./uploadform.component.css']
})
export class UploadformComponent implements OnInit {

  uploadForm: FormGroup;
  customGenre: string;
  constructor(private formBuilder: FormBuilder, private genreService: GenreServiceService) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
        bookTitle: ['', [Validators.required, this.customBookTitleValidation]],
        bookImgUrl: ['', Validators.required],
        genre: ['', Validators.required],
        authorName: ['', [Validators.required, this.customAuthorNameValidation]],
        authorHonorableMention: ['', Validators.required]
    });
  }

  onSubmit($event): void {
    $event.preventDefault();
    console.log(this.uploadForm);
  }

  customBookTitleValidation (bookControl: FormControl) {
    const regexp = /^([a-zA-z0-9 ]+)$/;
    return regexp.test(bookControl.value) ? null : {
      titleErr: {
        message: 'Title must be solely alphanumeric characters!'
      }
    };
  }

  customAuthorNameValidation (bookControl: FormControl) {
    const regexp = /^([A-Z]{1})([a-z]+) ([A-Z]{1})([a-z]+)$/;
    return regexp.test(bookControl.value) ? null : {
      authorNameErr: {
        message: "Author Name must follow this format \nex. 'Nadir Dabit"
      }
    }
  }

  async onFormSubmission($event) {
    $event.preventDefault();
    const genreObject: Genre = new Genre(this.uploadForm.controls.genre.value);
    const newGenreId: string = await this.genreService.create(genreObject).toPromise();
    console.log(newGenreId);
  }
}
