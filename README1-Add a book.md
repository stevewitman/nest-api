## Post Route to add a new book

Add the following to `books.controller.ts`

Add import for `Post` and `Body` and import the `books service`. 

```ts
import { Controller, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';
```

Add a constructor to inject the `books service`.

```ts
constructor(private readonly booksService: BooksService) {}
```

Add the `Post` route handler

```ts
@Post()
addBook(
  @Body('title') bookTitle: string,
  @Body('price') bookPrice: number,
): {id: string} {
  const bookId = this.booksService.addBook(bookTitle, bookPrice);
  return {id: bookId};
}
```

`npm` install a package that gererates unique IDs

`$ npm i shortid`

Add the following to `books.service.ts`

```ts
import { Book } from './book.model';

const shortid = require('shortid');
```

Create an empty array to hold our `book` objects

```ts
private books: Book[] = [];
```

Add the `addBook()` method to the books service

```ts
addBook(title: string, price: number): string {
  const bookId = shortid.generate();
  const newBook = new Book(bookId, title, price);
  this.books.push(newBook);
  return newBook.id;
}
```

In Postman, select `Post` and use `http://localhost:3000/books` for the url.

Click `body`, select `raw`, and select `JSON` then add something an object to the body similar to the following.

```json
{
	"title": "NestJS",
	"price": 49.99
}
```

This should return the generated Id after adding the book object to the array of books (in our case, only persisted in memory)


[PREVIOUS - Project Setup](https://github.com/stevewitman/nest-api/blob/master/README.md) | [NEXT - Get all books](https://github.com/stevewitman/nest-api/blob/master/README2-Get%20all%20books.md)

