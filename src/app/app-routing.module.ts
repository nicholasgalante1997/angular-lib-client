import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { BookShowPageComponent } from './book-show-page/book-show-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { UploadPageComponent } from './upload-page/upload-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'library/shelves', component: LibraryPageComponent, pathMatch: 'full'},
  {path: 'library/shelves/book/:id', component: BookShowPageComponent},
  {path: 'upload', component: UploadPageComponent, pathMatch: 'full'},
  {path: 'bleh', component: PageNotFoundComponent },
  {path: '**', redirectTo: 'bleh'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
