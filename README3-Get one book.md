## Get Route w/Route Param to get one book

Add the following to `books.controller.ts`

Add import for `Param`

```ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
```

Add the `Get` with `URL Param` route handler

```ts
@Get(':id')
getBook(
  @Param('id') bookId: string) {
  return this.booksService.getBook(bookId);
}
```

Add the following to `books.service.ts`

Add import for `NotFoundException`

```ts
import { Injectable, NotFoundException } from '@nestjs/common';
```

Add the `getBook()` method to the books service

```ts
getBook(bookId) {
  const book = this.books.find(bk => bk.id  === bookId);
  if (!book) {
    throw new NotFoundException('Book not found');
  }
  return {...book};
}
```

In Postman, select `Get` and use `http://localhost:3000/xxxxx` for the url (replace `xxxxx` with a valid id from one of the added books).

This should return one book object associated with the id privided.

Note: Since the server restarts after every change in code, you will need to use the Post route to first add one or more books and also to get an Id from one of the books to use in the Get w/param route.

[PREVIOUS - Get all books](https://github.com/stevewitman/nest-api/blob/master/README2-Get%20all%20books.md) | [NEXT - Update a book](https://github.com/stevewitman/nest-api/blob/master/README4-Update%20a%20book.md)