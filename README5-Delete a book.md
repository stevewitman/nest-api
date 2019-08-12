## Delete Route to delete a book

Add the following to `books.controller.ts`

Add import for `Delete`

```ts
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
```

Add the `Delete` route handler

```ts
@Delete(':id')
deleteBook(@Param('id') bookId: string) {
  this.booksService.deleteBook(bookId);
  return null;
}
```

Add the following to `books.service.ts`

Add the `deleteBook()` method to the books service

```ts
deleteBook(bookId: string) {
  const bookIndex = this.books.findIndex(book => book.id  === bookId);
  this.books.splice(bookIndex, 1);
}
```

In Postman, select `Delete` and use `http://localhost:3000/xxxxx` for the url (replace `xxxxx` with a valid id from one of the added books).

This should return null.

Note: Since the server restarts after every change in code, you will need to use the Post route to first add one or more books and also to get an Id from one of the books to use in the Delete route.
