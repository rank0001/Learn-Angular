import { NgModule } from '@angular/core';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AllBooksComponent },
  { path: ':id', component: BookDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}