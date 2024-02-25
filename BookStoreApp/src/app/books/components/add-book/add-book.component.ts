import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/BookModel';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css',
})
export class AddBookComponent implements OnInit {
  @ViewChild('myForms') myForms!: ElementRef;
  constructor(private bookService: BookService) {}
  ngOnInit(): void {}
  saveBook(value: any): void {
    let book = new BookModel();
    book.Author = value.Author;
    book.title = value.title;
    book.totalPages = value.totalPages;
    book.price = { currency: 'bdt', value: value.price };
    this.bookService.addBooks(book);
  }
}
