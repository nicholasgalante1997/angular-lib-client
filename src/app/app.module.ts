import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
