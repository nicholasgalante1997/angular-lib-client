import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BookShowcaseComponent } from './book-showcase/book-showcase.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { BookComponent } from './book/book.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { GenreBarComponent } from './genre-bar/genre-bar.component';
import { CommonModule } from '@angular/common';
import { BookShowPageComponent } from './book-show-page/book-show-page.component';
import { RecommendedBookcaseComponent } from './recommended-bookcase/recommended-bookcase.component';
import { SearchPipe } from './search.pipe';
import { GenrePipe } from './genre.pipe';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { UploadformComponent } from './uploadform/uploadform.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    BookShowcaseComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    LibraryPageComponent,
    BookComponent,
    SearchBarComponent,
    GenreBarComponent,
    BookShowPageComponent,
    RecommendedBookcaseComponent,
    SearchPipe,
    GenrePipe,
    UploadPageComponent,
    UploadformComponent,
    SuccessPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
