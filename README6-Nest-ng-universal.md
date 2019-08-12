## Nest Server Side Rendering integrated with front end app 

From the root of an existing Angular app, run the following schematic

```
$ ng add @nestjs/ng-universal
```

When prompted, enter the name of your existing Angular app.

Change the port number from 4000 to 4200 in the `server/main.ts` file.

CD into the `server` directory

```
$ cd sever
```

```
$ nest generate controller whatever
```

In that `server/src/whatever/whatever.controller.ts` file, add the import for `Get` and add some simple code to handle a Get request.

```ts
  @Get()
  getWhatever() {
    return {status: 'Get whatever'};
  }
```

CD back one folder back to the root folder of the Angular app and start a server.

```
$ npm run serve
```

In a browser or in Postman, visit `http://localhost:4200/api/books`

It should return the following ... 

```json
{
  "status": "Get all books"
}
```

