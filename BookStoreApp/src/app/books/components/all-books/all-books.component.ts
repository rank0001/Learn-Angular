import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/BookModel';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css',
})
export class AllBooksComponent {
  constructor(private bookService: BookService) {}
  public books: BookModel[] = [];
  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
}
