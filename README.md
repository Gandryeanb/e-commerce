# e-commerce
# TodoApp

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

### :pushpin: User - Get User data

| URL         | Method | Description            |Data Body / Requirement                    | Data Params | Success Response | Error Response |
| ----------- |:------:|:---------------------: |:-----------------------------------------:|:-----------:|:----------------:|:--------------:|
| `/user`     |   GET  | Get user data          | None                                      | None        | 200              | 500            |
#### Success Response
```
{
    "data": [
        {
            "lName": null,
            "password": "facebook-gstandrianb@gmail.com",
            "facebookLogin": 1,
            "googleLogin": 0,
            "_id": "5b95907f3076841759d96686",
            "email": "gstandrianb@gmail.com",
            "fName": "Gusti Andryean",
            "phone": "facebook-gstandrianb@gmail.com",
            "createdAt": "2018-09-09T21:28:31.860Z",
            "updatedAt": "2018-09-09T21:28:31.860Z",
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
