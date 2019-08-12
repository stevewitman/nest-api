import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';

import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  addBook(
    @Body('title') bookTitle: string,
    @Body('price') bookPrice: number,
  ): {id: string} {
    const bookId = this.booksService.addBook(bookTitle, bookPrice);
    return {id: bookId};
  }

  @Get()
  getBooks() {
    return this.booksService.getBooks();
  }

  @Get(':id')
  getBook(@Param('id') bookId: string) {
    return this.booksService.getBook(bookId);
  }

  @Patch(':id')
  updateBook(
    @Param('id') bookId: string,
    @Body('title') bookTitle: string,
    @Body('price') bookPrice: number,
    ) {
    this.booksService.updateBook(bookId, bookTitle, bookPrice);
    return null;
  }

  @Delete(':id')
  deleteBook(@Param('id') bookId: string) {
    this.booksService.deleteBook(bookId);
    return null;
  }

}
