import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './book.model';

const shortid = require('shortid');

@Injectable()
export class BooksService {
  private books: Book[] = [];

  addBook(title: string, price: number): string {
    const bookId = shortid.generate();
    const newBook = new Book(bookId, title, price);
    this.books.push(newBook);
    return newBook.id;
  }

  getBooks() {
    return [...this.books];
  }

  getBook(bookId) {
    const book = this.books.find(bk => bk.id  === bookId);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return {...book};
  }

  updateBook(bookId: string, title: string, price: number) {
    const book = this.books.find(bk => bk.id  === bookId);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    const updatedBook = {...book};
    if (title) {
      updatedBook.title = title;
    }
    if (price) {
      updatedBook.price = price;
    }
    const bookIndex = this.books.findIndex(bk => bk.id  === bookId);
    this.books[bookIndex] = {...updatedBook};
  }

  deleteBook(bookId: string) {
    const bookIndex = this.books.findIndex(bk => bk.id  === bookId);
    this.books.splice(bookIndex, 1);
  }
}
