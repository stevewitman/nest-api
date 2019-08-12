## Patch Route to update a book

Add the following to `books.controller.ts`

Add import for `Patch`

```ts
import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
```

Add the `Patch` route handler

```ts
@Patch(':id')
updateBook(
  @Param('id') bookId: string,
  @Body('title') bookTitle: string,
  @Body('price') bookPrice: number,
  ) {
  this.booksService.updateBook(bookId, bookTitle, bookPrice);
  return null;
}
```

Add the following to `books.service.ts`

Add the `updateBook()` method to the books service

```ts
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
```

In Postman, select `Patch` and use `http://localhost:3000/xxxxx` for the url (replace `xxxxx` with a valid id from one of the added books).

Click `body`, select `raw`, and select `JSON` then add something an object to the body similar to the following.

```json
{
	"price": 19.99
}
```

or

```json
{
	"title": "Some new title"
}
```

or 

```json
{
  "title": "Some new title",
	"price": 19.99
}
```

This should return null.

Note: Since the server restarts after every change in code, you will need to use the Post route to first add one or more books and also to get an Id from one of the books to use in the Patchx route.
