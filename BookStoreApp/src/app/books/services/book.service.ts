import { Injectable } from '@angular/core';
import { BookModel } from '../models/BookModel';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}
  private _booksList: BookModel[] = [
    {
      id: 1,
      title: 'book 1',
      totalPages: 50,
      Author: 'Shakespeare',
      price: { currency: 'Bdt', value: 75 },
    },
    {
      id: 2,
      title: 'book 2',
      totalPages: 150,
      Author: 'Shakespeare',
      price: { currency: 'Bdt', value: 75 },
    },
    {
      id: 3,
      title: 'book 3',
      totalPages: 50,
      Author: 'Shakespeare',
      price: { currency: 'Bdt', value: 75 },
    },
    {
      id: 4,
      title: 'book 4',
      totalPages: 50,
      Author: 'Shakespeare',
      price: { currency: 'Bdt', value: 75 },
    },
    {
      id: 5,
      title: 'book 5',
      totalPages: 50,
      Author: 'Shakespeare',
      price: { currency: 'Bdt', value: 75 },
    },
    {
      id: 6,
      title: 'book 6',
      totalPages: 50,
      Author: 'Shakespeare',
      price: { currency: 'Bdt', value: 75 },
    },
    {
      id: 7,
      title: 'book 7',
      totalPages: 50,
      Author: 'Shakespeare',
      price: { currency: 'Bdt', value: 75 },
    },
    {
      id: 8,
      title: 'book 8',
      totalPages: 50,
      Author: 'Shakespeare',
      price: { currency: 'Bdt', value: 75 },
    },
    {
      id: 9,
      title: 'book 9',
      totalPages: 50,
      Author: 'Shakespeare',
      price: { currency: 'Bdt', value: 75 },
    },
  ];

  public addBooks(book: BookModel) {
    this._booksList.push(book);
  }

  getBooks(): BookModel[] {
    return this._booksList;
  }
}
