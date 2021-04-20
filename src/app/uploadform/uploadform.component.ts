import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Author from '../models/author';
import Book from '../models/book';
import Genre from '../models/genre';
import { AuthorService } from '../services/author.service';
import { GenreServiceService } from '../services/genre-service.service';

@Component({
  selector: 'app-uploadform',
  templateUrl: './uploadform.component.html',
  styleUrls: ['./uploadform.component.css']
})
export class UploadformComponent implements OnInit {

  uploadForm: FormGroup;
  bookTitle: string;
  bookSynopsis: string;
  bookCoverUrl: string;
  existingGenre: string;
  customGenre: string;
  authorName: string;
  authorHonorableMention: string;

  constructor(
    private formBuilder: FormBuilder,
    private genreService: GenreServiceService,
    private authorService: AuthorService
  ) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
        bookTitle: ['', [Validators.required, this.customBookTitleValidation]],
        bookImgUrl: ['', Validators.required],
        bookSynopsis: ['', [Validators.minLength(22), Validators.required]],
        genre: ['', Validators.required],
        authorName: ['', [Validators.required, this.customAuthorNameValidation]],
        authorHonorableMention: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit($event): void {
    $event.preventDefault();
    console.log(this.uploadForm);
  }

  customBookTitleValidation(bookControl: FormControl) {
    const regexp = /^([a-zA-z0-9 ]+)$/;
    return regexp.test(bookControl.value) ? null : {
      titleErr: {
        message: 'Title must be solely alphanumeric characters!'
      }
    };
  }

  customAuthorNameValidation(bookControl: FormControl) {
    const regexp = /^([A-Z]{1})([a-z]+) ([A-Z]{1})([a-z]+)$/;
    return regexp.test(bookControl.value) ? null : {
      authorNameErr: {
        message: 'Author Name must follow this format \nex. \'Nadir Dabit'
      }
    };
  }

  async onFormSubmission($event) {
    $event.preventDefault();

    console.log(this.uploadForm);
    // const genreObject: Genre = new Genre(this.uploadForm.controls.genre.value);
    // const newGenreId: string = await this.genreService.create(genreObject).toPromise();
    // console.log(newGenreId);

    // const authorObject: Author =
    //   new Author(this.uploadForm.controls.authorName.value,
    //   this.uploadForm.controls.authorHonorableMention.value);
    // console.log(authorObject, 'prior');
    // const authorId: string = await this.authorService.create(authorObject).toPromise();
    // console.log(authorId, 'post');

    // const bookObject: Book = new Book(this.uploadForm.controls.bookTitle.value,
    //   this.uploadForm.)
  }

  onNextPress(current: string): void {
    switch (current) {
      case 'title':
        this.bookTitle = this.uploadForm.controls.bookTitle.value;
        break;
      case 'imageUrl':
        this.bookCoverUrl = this.uploadForm.controls.bookImgUrl.value;
        break;
      case 'synopsis':
        this.bookSynopsis = this.uploadForm.controls.bookSynopsis.value;
        break;
      case 'genre':
        this.existingGenre =
          this.uploadForm.controls.genre.value === 'Other' ?
            this.customGenre :
            this.uploadForm.controls.genre.value;
        break;
      case 'author':
        this.authorName = this.uploadForm.controls.authorName.value;
        this.authorHonorableMention = this.uploadForm.controls.authorHonorableMention.value;
        break;
      default:
        return;
    }
  }
}
