import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-uploadform',
  templateUrl: './uploadform.component.html',
  styleUrls: ['./uploadform.component.css']
})
export class UploadformComponent implements OnInit {

  uploadForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      book: this.formBuilder.group({
        bookTitle: ['', Validators.required],
        bookImgUrl: ['', Validators.required],
        genre: ['', Validators.required]
      }),
      authorName: ['', Validators.required],
      authorHonorableMention: ['', Validators.required]
    });
  }

  onSubmit($event): void {
    $event.preventDefault();
    console.log(this.uploadForm);
  }
}
