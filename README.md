# CodingChallengeWebApplication

![Project Image](public/images/screenshots/loginpagewebapp.JPG)
---

## Description
Created simple web application to handle user registration and login feature using several different technologies stack for front-end(reactJs) and back-end development(nodeJs, mongoDB and express)

This project used the following techologies
- React and React-spring for front-end development
- NodeJs and Express for the back-end development
- MongoDB for the database

## Prerequisites

These are the following technologies that you should already have install on your machine before running the app.
- Node.js  https://nodejs.org/en/download/
- NPM      https://www.npmjs.com/get-npm
- React    https://react-cn.github.io/react/downloads.html
- MongoDB Atlas https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_united_states_search_core_brand_atlas_desktop&utm_term=mongo%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624338&gclid=CjwKCAiAyc2BBhAaEiwA44-wW8qW2op46O3QB-ga7wIPTgfUd-qUqHa3-UZ6-lMPL3t7LKPc8K75mxoCxMAQAvD_BwE

#### Installation
Clone the repository

```
 https://github.com/blackprogrammer234/CodingChallengeWebApplication.git
```
Run the index.js to start the server 

```
 node index.js
```
Note
-The following command above will also start the monoDB server too.

Install the packages to start running the client side

```
 npm install
```

Run the client 

```
 npm start
```
The application should be running at http://localhost:3000/

![](public/images/loginPage.gif)
#### Runing the app

![](public/images/screenshots/registrationpage.JPG)

#### FOLDER STRUCTURE 
These are all the files and folder that exist in my project

```
CodingChallengeWebApplication
    dist/
                index.html
                main.js
    models/
                Users.js
    node_models/
    public/
    routes/
                login.js
                signup.js
    src/
            components/
                Login/
                    LoginPage.js
                    LoginServices.js
                Register/   
                    RegisterPage.js
                    RegisterServices.js 
            App.js
            stylesheet.css
        index.html
        index.js
    .babelrc
    .dockerignore
    .gitignore
    config.json
    Dockerfile
    index.js
    package-lock.json
    package.json
    webpack.config.js
```
- `CodingChallengeWebApplication/index.js` is the main file handling most of the back-end functionality of the application including running the server -
- `src/components` is the folder containing most of the files for running the client-side

[Back To The Top](#read-me-template)

---

## References
[Back To The Top](#read-me-template)

---

## License

MIT License

Copyright (c) [2017] [James Q Quick]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back To The Top](#read-me-template)

---

## Author Info

- Twitter - [@jamesqquick](https://twitter.com/jamesqquick)
- Website - [James Q Quick](https://jamesqquick.com)

[Back To The Top](#read-me-template)
