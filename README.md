## REFERENCES

[NestJS](https://nestjs.com) documentation

[Learn Nest.js from Scratch by building an API (by Maximilian Schwarzmüller)](https://www.youtube.com/watch?v=F_oOtaxb0L8) YouTube - Academind (Published on Jun 26, 2019)

[NestJS Crash Course (by Brad Traversy)](https://www.youtube.com/watch?v=wqhNoDE6pb4) YouTube - Traversy Media (Published on Mar 25, 2019)

[Amazing Backends for Angular Devs with NestJS (by Ely Lucas)](https://www.youtube.com/watch?v=XkEA8L_4IUY) YouTube - ng-conf (Published on May 6, 2019)

[Going Full Stack Angular with NestJS (by Stephen Fluin)](https://www.youtube.com/watch?v=y24fC9Pqr8I)
YouTube - Demos With Angular (Published on May 22, 2019)

## Demo Project Setup

Follow the [NestJS documentation](https://nestjs.com) to for installation

Use the `Nest CLI` to start a new project

```
$ nest new nest-api
``` 

Select `npm` (default) for the package manager (or selectr yarn) when prompted.

```
$ cd nest-api
```

Open the project in code editor of your choice.

Start a server using nodemon

```
$ npm run start:dev
```

Open another terminal window and generate `books module`, `books controller`, and `books service` using the Nest CLI

```
$ nest generate module books
```

```
$ nest generate controller books
```

```
$ nest generate service books
```

I will delete the spec files (`books.controller.spec.ts`, `books.service.spec.ts`, and `app.controller.spec.ts`) simply to make the file structure a little easier to see during the presentation, but you can leave them them if you want to use for testing later.

Create a new file called `books.model.ts` inside the `src/books/` directory and add the following code.

```ts
export class Book {
  constructor(
    public id: string,
    public title: string,
    public price: number,
  ) {}
}
```

## See additional README's for API routes

[NEXT - Add a book](https://github.com/stevewitman/nest-api/blob/master/README1-Add%20a%20book.md)

[Get all books](https://github.com/stevewitman/nest-api/blob/master/README2-Get%20all%20books.md)

[Get one book](https://github.com/stevewitman/nest-api/blob/master/README3-Get%20one%20book.md)

[Update a book](https://github.com/stevewitman/nest-api/blob/master/README4-Update%20a%20book.md)

[Delete a book](https://github.com/stevewitman/nest-api/blob/master/README5-Delete%20a%20book.md)

[NestJS ng-universal](https://github.com/stevewitman/nest-api/blob/master/README6-Nest-ng-universal.md)
