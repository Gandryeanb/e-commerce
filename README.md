# E-commerce

### Installing

Follow these instruction for using this app,
open server folder and install depedencies by type this on your terminal
```
$ npm install
```

## Running the test

to start the web app, open the server folder and run ..
```
$ npm run dev
```
and then open the client folder and run this on your terminal
```
$ live-server
```
if the magic step does'nt work, you need to install the `live-server` by type this on your terminal
```
$ sudo npm install -g live-server
```
and then run the `live-server` again
and use routes ` http://localhost:8080/ `

## VALIDATION USER

### Client Side
NOT READY
| Field      | validation |
| ---------- |:----------:|  
|`fname`     | required   |
|`lname`     | None       |
|`phone`     | required, unique, Min len 10, Max len 14  |
|`email`     | required, unique, email formated |
|`password`  | required, combination Min 1 Uppercase letter, Min 1 number, Min len 8  |

### Server Side
NOT READY
| Field      | validation |
| ---------- |:----------:|  
|`fname`     | required   |
|`lname`     | None       |
|`phone`     | required, unique |
|`email`     | required, unique |
|`password`  | required   |

## TODO API REFERENCE

### :pushpin: User - Register

| URL         | Method | Description            |Data Body / Requirement                    | Data Params | Success Response | Error Response |
| ----------- |:------:|:---------------------: |:-----------------------------------------:|:-----------:|:----------------:|:--------------:|
| `/user/register`|POST| Register Account       | `fname`, `lname`, `email`, `password`     | None        | 201              | 500            |
#### Success Response
```
{
    "message": "creating User Success",
    "createdData": {
        "fname": "John",
        "lname": "Doe",
        "email": "JohnDoe@mail.com",
        "password": "$2b$07$rH60qaVWSPGGiWuvVjX2g.9iklCthkGKihZgrQMEEK1lbe7NgJd4C"
    }
}
```
### :pushpin: User - Login

| URL         | Method | Description            |Data Body / Requirement                    | Data Params | Success Response | Error Response |
| ----------- |:------:|:---------------------: |:-----------------------------------------:|:-----------:|:----------------:|:--------------:|
|`/user/login`|  POST  | Login Account          | `email`, `password`                       | None        | 200              | 500            |
#### Success Response
```
{
    "message": "login success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yjk3NGEzZjI5ZDA2ZTBmYWNjNjcyMzgiLCJmbmFtZSI6IkpvaG4iLCJlbWFpbCI6IkpvaG5Eb2VAbWFpbC5jb20iLCJpYXQiOjE1MzY2NDE3OTl9.ew7GBlNT8f2PElov3c5X8FAQkoBCDTpZwK0d7082vXc"
}
```
### :pushpin: User - Update data

| URL         | Method | Description            |Data Body / Requirement                    | Data Params | Success Response | Error Response |
| ----------- |:------:|:---------------------: |:-----------------------------------------:|:-----------:|:----------------:|:--------------:|
|`/user`      |  PUT   | Update data            | `fname`, or `lname`                       | None        | 200              | 500            |
#### Success Response
```
{
    "message": "updating data success",
    "dataUpdated": {
        "fname": "John",
        "lname": "Wick"
    }
}
```
### :pushpin: User - Delete account

| URL         | Method | Description            |Data Body / Requirement                    | Data Params | Success Response | Error Response |
| ----------- |:------:|:---------------------: |:-----------------------------------------:|:-----------:|:----------------:|:--------------:|
|`/user`      | DELETE | Update data            |  None                                     | None        | 200              | 500            |
#### Success Response
```
{
    "message": "deleting user account with Id 5b9673138bfb804370a2ec82 success"
}
```
### :pushpin: Category - Create category

| URL         | Method | Description            |Data Body / Requirement                    | Data Params | Success Response | Error Response |
| ----------- |:------:|:---------------------: |:-----------------------------------------:|:-----------:|:----------------:|:--------------:|
|`/category`  | POST   | Create category        |  `name`                                   | None        | 201              | 500            |
#### Success Response
```
{
    "message": "deleting user account with Id 5b9673138bfb804370a2ec82 success"
}
```
### :pushpin: Category - Delete category

| URL         | Method | Description            |Data Body / Requirement                    | Data Params | Success Response | Error Response |
| ----------- |:------:|:---------------------: |:-----------------------------------------:|:-----------:|:----------------:|:--------------:|
|`/category`  | DELETE | Delete category        |   `name`                                  | None        | 200              | 500            |
#### Success Response
```
{
    "message": "deleting user account with name Tools success"
}
```
### :pushpin: Item - Create item

| URL         | Method | Description            |Data Body / Requirement                    | Data Params | Success Response | Error Response |
| ----------- |:------:|:---------------------: |:-----------------------------------------:|:-----------:|:----------------:|:--------------:|
|`/item`      | POST   | Create Item            | `name` , `price`, `amount`, `categoryId`, (`description` optional)| None|201| 500            |
#### Success Response
```
{
    "message": "creating new item is complete"
}
```
### :pushpin: Item - Update item

| URL         | Method | Description            |Data Body / Requirement                    | Data Params | Success Response | Error Response |
| ----------- |:------:|:---------------------: |:-----------------------------------------:|:-----------:|:----------------:|:--------------:|
|`/item/:id`  | PUT    | Update Item            | `name` , or `price`, or `amount`, or `categoryId`, or `description`| `id`|200| 500          |
#### Success Response
```
{
    "message": "updating data item success",
    "dataUpdated": {
        "name": "Cereal Sugar"
    }
}
```
### :pushpin: Item - Delete item

| URL         | Method | Description            |Data Body / Requirement                    | Data Params | Success Response | Error Response |
| ----------- |:------:|:---------------------: |:-----------------------------------------:|:-----------:|:----------------:|:--------------:|
|`/item/:id`  | DELETE | Delete Item            |                                           |    `id`     |200               | 500            |
#### Success Response
```
{
    "message": "deleting Item with Id 5b974e4329d06e0facc67239 success"
}
```
### :pushpin: Item - Find all item

| URL         | Method | Description            |Data Body / Requirement                    | Data Params | Success Response | Error Response |
| ----------- |:------:|:---------------------: |:-----------------------------------------:|:-----------:|:----------------:|:--------------:|
|`/item    `  | GET    | Find all Item          |                                           |             |200               | 500            |
#### Success Response
```
{
    "data": [
        {
            "_id": "5b9688ae40d09c55780fbd64",
            "name": "Bread",
            "price": "13000",
            "amount": 1,
            "description": "new brand brown and fresh bread in town",
            "categoryId": "5b9685237761b5533c4d7c92",
            "createdAt": "2018-09-10T15:07:26.170Z",
            "updatedAt": "2018-09-11T04:31:36.845Z",
            "__v": 0
        },
        {
            "_id": "5b971f368f467f681bd5f75b",
            "name": "Chocolate Tobleron",
            "price": "23000",
            "amount": 85,
            "description": "Tobleron Premium",
            "categoryId": "5b9685237761b5533c4d7c92",
            "createdAt": "2018-09-11T01:49:42.790Z",
            "updatedAt": "2018-09-11T04:32:16.547Z",
            "__v": 0
        },
        {
            "_id": "5b971f608f467f681bd5f75c",
            "name": "Nasi Uduk",
            "price": "12000",
            "amount": 50,
            "description": "bikin kenyang",
            "categoryId": "5b9685237761b5533c4d7c92",
            "createdAt": "2018-09-11T01:50:24.821Z",
            "updatedAt": "2018-09-11T01:50:24.821Z",
            "__v": 0
        }
    ]
}
```
### :pushpin: Item - Find all item by categories

| URL         | Method | Description            |Data Body / Requirement                    | Data Params | Success Response | Error Response |
| ----------- |:------:|:---------------------: |:-----------------------------------------:|:-----------:|:----------------:|:--------------:|
|`/item/category`| GET | Find all Item by categories |                                      |  `id`       |200               | 500            |
#### Success Response
```
{
    "data": [
        {
            "_id": "5b975a5e50f91d1b488948fb",
            "name": "T-Shirt",
            "price": "40000",
            "amount": 20,
            "description": "Brand New Items",
            "categoryId": "5b9685357761b5533c4d7c94",
            "createdAt": "2018-09-11T06:02:06.095Z",
            "updatedAt": "2018-09-11T06:02:06.095Z",
            "__v": 0
        }
    ]
}
```
### :pushpin: Item - Create Transaction

| URL         | Method | Description            |Data Body / Requirement                    | Data Params | Success Response | Error Response |
| ----------- |:------:|:---------------------: |:-----------------------------------------:|:-----------:|:----------------:|:--------------:|
|`/transaction`| POST  | Create Transaction     |  `userId`, `itemId`, `itemId`, ....       |             |201               | 500            |
#### Success Response
```
{
    "messge": "creating transaction success",
    "data": {
        "userId": "5b9731328cc32c775a6c011d",
        "itemsId": "5b971f368f467f681bd5f75b"
    }
}
```
### :pushpin: Item - Find Transaction

| URL         | Method | Description            |Data Body / Requirement                    | Data Params | Success Response | Error Response |
| ----------- |:------:|:---------------------: |:-----------------------------------------:|:-----------:|:----------------:|:--------------:|
|`/transaction/:id`| GET   | Find all User transaction by Id User |                         |    `id`     |200               | 500            |
#### Success Response
```
{
    "data": [
        {
            "itemsId": [
                {
                    "_id": "5b9688ae40d09c55780fbd64",
                    "name": "Bread"
                },
                {
                    "_id": "5b9688ae40d09c55780fbd64",
                    "name": "Bread"
                },
                {
                    "_id": "5b971f368f467f681bd5f75b",
                    "name": "Chocolate Tobleron"
                }
            ],
            "_id": "5b9753d80290cc1848f371dd",
            "userId": "5b9731328cc32c775a6c011d",
            "createdAt": "2018-09-11T05:34:16.842Z",
            "updatedAt": "2018-09-11T05:34:16.842Z",
            "totalPrice": 49000,
            "__v": 0
        },
        {
            "itemsId": [
                {
                    "_id": "5b971f368f467f681bd5f75b",
                    "name": "Chocolate Tobleron"
                }
            ],
            "_id": "5b9753f40290cc1848f371de",
            "userId": "5b9731328cc32c775a6c011d",
            "createdAt": "2018-09-11T05:34:44.162Z",
            "updatedAt": "2018-09-11T05:34:44.162Z",
            "totalPrice": 23000,
            "__v": 0
        }
    ]
}
```


## Built With

* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Utitilty for generate token app
* [live-server](https://www.npmjs.com/package/live-server) - Utitilty for run the server client
* [nodemailer](https://www.npmjs.com/package/mongoose) - Utility for sending an E-mail to user
* [mongoose](https://www.npmjs.com/package/mongoose) - ODM
* [express](https://www.npmjs.com/package/express) - The web framework used
* [nodemon](https://www.npmjs.com/package/nodemon) - Utility that will monitor for any changes in source and automatically restart server
* [postman](https://www.getpostman.com) - Utitilty for accessing HTTP API
* [dotenv](https://www.npmjs.com/package/dotenv) - Utitilty for loads environent variable
* [bcrypt](https://www.npmjs.com/package/bcrypt) - Utitilty for encrypt and decrypt data user
* [axios](https://www.npmjs.com/package/axios) - Utitilty for make request to 3rd API
* [nexmo](https://www.npmjs.com/package/nexmo) - Utility for sending sms notification to user
* [cors](https://www.npmjs.com/package/cors) - Utitilty for providing a Connect/Express middleware that can be used to enable CORS with various options
* [MLab](https://www.mlab.com) - Database

## Authors

* **Gusti Andryean B** - *Hacktive8 - Student* - [gandryeanb](https://github.com/Gandryeanb)

## Acknowledgments

* Inspiration
* etc
