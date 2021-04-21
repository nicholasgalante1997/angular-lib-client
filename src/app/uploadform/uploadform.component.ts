import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Author from '../models/author';
import Book from '../models/book';
import Genre from '../models/genre';
import { AuthorService } from '../services/author.service';
import { BookService } from '../services/book.service';
import { GenreServiceService } from '../services/genre-service.service';

@Component({
  selector: 'app-uploadform',
  templateUrl: './uploadform.component.html',
  styleUrls: ['./uploadform.component.css']
})
export class UploadformComponent implements OnInit {

  uploadForm: FormGroup;
  availableGenres: Genre[] = [];
  bookTitle: string;
  bookSynopsis: string;
  bookCoverUrl: string;
  existingGenre: string;
  customGenre: string;
  authorName: string;
  authorHonorableMention: string;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private genreService: GenreServiceService,
    private authorService: AuthorService,
    private bookService: BookService,
    private router: Router
  ) { }

  static doubleCheck(status: string): boolean {
    if (status === 'VALID') {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
        bookTitle: ['', [Validators.required, this.customBookTitleValidation]],
        bookImgUrl: ['', Validators.required],
        bookSynopsis: ['', [Validators.minLength(22), Validators.required]],
        genre: ['', Validators.required],
        authorName: ['', [Validators.required, this.customAuthorNameValidation]],
        authorHonorableMention: ['', [Validators.required, Validators.minLength(4)]]
    });
    this.genreService.getGenres().subscribe(
      (genres: Genre[]) => {
        for (let genre of genres){
          this.availableGenres.push(genre);
        }
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
    // stop the force reloading
    $event.preventDefault();
    // set loading indicator
    this.isLoading = true;
    // validate fprm data
    if (!UploadformComponent.doubleCheck(this.uploadForm.status)){
      alert('Woops, the form is filled out incorrectly.');
      return;
    }
    // new genre creation
    const genreObject: Genre = new Genre(this.uploadForm.controls.genre.value);
    const newGenreId: string = await this.genreService.create(genreObject).toPromise();
    // new author creation
    const authorObject: Author =
      new Author(this.uploadForm.controls.authorName.value,
      this.uploadForm.controls.authorHonorableMention.value);
    const newAuthorId: string = await this.authorService.create(authorObject).toPromise();
    // new book creation
    const bookObject: Book = new Book(
      parseInt(newAuthorId, 10),
      parseInt(newGenreId, 10),
      this.uploadForm.controls.bookTitle.value,
      this.uploadForm.controls.bookSynopsis.value,
      this.uploadForm.controls.bookImgUrl.value
    );
    const newBookId: string = await this.bookService.create(bookObject).toPromise();
    // navigate to the successful upload page
    this.router.navigate(['post', 'success', newBookId]);
    // turn off loading indicator && reset form
    this.isLoading = false;
    this.uploadForm = undefined;
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

  onBackPress(current: string): void {
    switch (current) {
      case 'imageUrl':
        this.bookTitle = undefined;
        break;
      case 'synopsis':
        this.bookCoverUrl = undefined;
        break;
      case 'genre':
        this.bookSynopsis = undefined;
        break;
      case 'author':
        this.existingGenre = undefined;
        break;
      default:
        this.authorHonorableMention = undefined;
        this.authorName = undefined;
        return;
    }
  }
}
