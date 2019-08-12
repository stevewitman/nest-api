## Get Route to get all books

Add the following to `books.controller.ts`

Add import for `Get`

```ts
import { Controller, Post, Body, Get } from '@nestjs/common';
```

Add the `Get` route handler

```ts
@Get()
getBooks() {
  return this.booksService.getBooks();
}
```

Add the following to `books.service.ts`

Add the `getBooks()` method to the books service

```ts
getBooks() {
  return [...this.books];
}
```

In Postman, select `Get` and use `http://localhost:3000` for the url.

This should return an array of all book objects.

Note: Since the server restarts after every change in code, you will need to use the Post route to first add one or more books before using the Get route.

[PREVIOUS - Add a book](https://github.com/stevewitman/nest-api/blob/master/README1-Add%20a%20book.md) | [NEXT - Get one book](https://github.com/stevewitman/nest-api/blob/master/README3-Get%20one%20book.md)