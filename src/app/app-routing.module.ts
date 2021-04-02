import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'library/shelves', component: LibraryPageComponent},
  {path: 'bleh', component: PageNotFoundComponent },
  {path: '**', redirectTo: 'bleh'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
