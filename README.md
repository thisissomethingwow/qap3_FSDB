# This is the Fullstack and Database QAP:

To start you need to change the pool in auth.js that's in services, then you run the SQL that is in sercices/SQL in PGAdmin. <br>
Then you run this to get node_modules:
```bash
npm i
```


then you run this to start the server: 
``` bash
node index
```
from there you can use the UI to navigate. <br>
or you can use the API for the authors:
```bash
curl -X GET http://localhost:3000/api/authors/
```
```bash
curl -d "fn=your&ln=name" -X POST http://localhost:3000/api/authors
```
```bash
curl -d "fn=new&fn=name" -X PUT http://localhost:3000/api/authors/id
```
```bash
curl -d "fn=new&ln=name" -X PATCH http://localhost:3000/api/authors/id
```
```bash
curl -X DELETE http://localhost:3000/api/authors/id
```
or for the books:
```bash
curl -X GET http://localhost:3000/api/books/
```
```bash
curl -d "title=name&desc=description" -X POST http://localhost:3000/api/books
```
```bash
curl -d "title=new&desc=input" -X PUT http://localhost:3000/api/books/id
```
```bash
curl -d "title=new&desc=input" -X PATCH http://localhost:3000/api/books/id
```
```bash
curl -X DELETE http://localhost:3000/api/books/id
```
