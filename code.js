/* 

Clients vs. Servers

Request Response Cycle:
    client/web browser sends request to a server, which the server recieves the request and does operations before sending a response back to the client/web browser.

Buildig blocks of requests and responses

C.R.U.D:
    POST (Create data)
    GET (Read data)
    PATCH (Update data)
    DELETE (Delete data)

HTTP vs. HTTPS  Protocols
(un-encrypted vs. encrypted)
A protocol that allows HTML documents to be requested and displayed.
Allows the web to be interactive.
The basis for how data is exchanged over the web.

Anatomy of a URL:
example:
    https://example.org/lessons/search?course=anatomy&topic=url#example

    ^ protocol  / host/domain   / path /    query string     / fragment

Protocol: Determines which protocol to use (HTTP, HTTPS, SSH)
Host/Domain: address of the server providing resources.
Path: the path to the exact resource of the server you want to access.
Query String: parameters passed to the server providing additional information.
Fragment: identifies a specific section of the response.

Front-end:               vs.             Back-end:
What users see and intract              The parts of the web we do not see directly.
with on the browser.                    What crunches/holds data and runs logic.
Graphical user intervaces with HTML,
CSS, or JavaScript.


Status Codes:
    100s - informational responses
    200s - sucessful responses
    300s - redirects
    400s - client errors
    500s - servor errors

    *** use http.cat or http.dog to look up status codes

* very important status codes:
200 - OK
201 - GET REQUEST/CREATED
404 - NOT FOUND

Node.js
(runs on the samme engine powered by google chrome.)
Node.js is a javascript runtime enviornment that decouples javascript from a browser.
Node can run server-side code or a script apart from the web entirely.

Javascript                  vs.                 Node.js
Runs in web browser.                        - Runs outside of web browswer.
Can manipulate the DOM.                     - No access to the DOM.
Needs libraries for external code.          - Comes with a package manager: npm

npm: NODE PACKET MANAGER
** an open source library of packages, of modules.
A public directory of node modules. (libraries)

Module: single javascript file with inter-related functionality.
Package: one or more related modules packaged together.

 ***** keyword: require
 ^ imports the file/module

*/
// ^ the require keyword is the same as importing modules, it grabs the necessary functions and other code needed to run from other files/modules.

// npm init - creates the package.json file which contains metadata about a project.
// npm install - used to install a package.

// npm install snake-names

const snakeNames = require('snake-names');

console.log(snakeNames.cute);

// in terminal type npm init first, than npm nstall, than node index.js to run the code, grabbing information from the server of snake-names.

// EXAMPLE - look up (NODE-snake-project)file on github.


let http = require('http')
let server = http.createServer(function (req, res) { // uses the createServer method to send request, that has a callback function inside of it.
    res.write('Hello FSD!') // sends data with the response from server.
    res.end() // closes the connection.
});

server.listen(3000, function () { // localhost 3000
    console.log('I am awake!') // will be logged in the terminal when the server starts.
});

// parameters: ^ req = request, ^res = response

/* Global npm installs: means the package will be available across your entire machine.
* typically you do NOT want to install something globally except when you hava tool you like to use during development such as nodemon.
- npm install -g nodemon
^ ** nodemon monitors code for changes and automatically restarts your server as needed.

**** ctrl. C - stops the server process

//************  ^ EXAMPLE - look up file on github - (NODE-my-server)*******************
// ***** also look on index.js for EXAMPLE **********

/* Node Modules: REVIEW
    Install it  =>  Require it  =>  Use it

Core Modules: already installed.
    http: creating web servers
    url: methods for url parsing
    path: methos for parsing file paths
    fs: methods for dealing with file I/O


JSX: Javascript XML
    - allows you to write a mishmash of javascript and HTML.
    - new syntax makes it easier to build dynamic webpages based on data.

Unavailable syntax - for loops, and if statements are REPLACED with:
                    .map() method, and ternary operators respectively.

Web frameworks:
    Server-side web frameworks are software 
    frameworks that make it easier to write, maintain, 
    and scale web applications. They provide tools and 
    libraries that simplify common web development 
    tasks.

Popular webframeworks:
    - Express = Node.js
    - Flask = Python
    - Django = Python
    - Spring boot = Java
    - Laravel = PHP

Monolithic          vs.               Modular
- many built in features.            - highly customizable.
- preset/expected configurations.    - choice configurations.

* Node.Express is a modular framework

npm install express

*********************************************************************
*********************************************************************

NODE.EXPRESS CHECKLIST:
    - make directory
    - create index.js file
    - npm init -y
    - npm install express
    - open index.js
    - require express
    - initialize the app variable
        - call app.get()
        - set '/' as the path (1st argument)
        - write callback function with req, res
        - call res.send('hello world')
    - call app.listen(port#) to keep server open

***********************************************************************
***********************************************************************

Routing: finding your way around

Environment variables:
    - Avoid hard-coded data in code.
    - Protect privatae data like API keys.
    - Abstract machine-specific settings (like your choice of port).

How to use .env variables:
    - Install the node module dotenv.
    - Require it cand call the config() method.
    - Access the .env variable using the global variable process.

******** look at github file - NODE-rainbow-routes for .env practice ********

How does a client generate a GET request?
- Typing into the browsers address bar.
- Clicking a hyperlink
- Submitting a form that uses the GET method

How does a server interpret the data the client sends on a GET request?
- The method(http verb)
- The path(url part)
- The data(query)

GET               vs.                 POST
- visible data                          - data not visible
- not encrypted                         - encrypted
- good for public info.(google searches)- good for private info.(passwords)

Path for both GET and POST requests:    /auth/login

Introducting Controllers: You can organize related routes into controllers. Controllers allow you to put routes in another file besides index.js and help keep them organized by their purpose.

To make a controller, call,
    - express.Router()
& attach routes.

Postman: tool for scaling


MODEL VIEW CONTROLLER:

**************************************************************************************************

Client (request)------> Controller (request)-------> Model (collects data from data base) (response)------> Controller (response)-------> View (response)------> Client

***************************************************************************************************

MVC is:
•A software architecture that is commonly used for web applications.
•Creates an easily understandable and maintainable pattern.
•Separates concerns, allowing for better sustainability.

Models: Data and Data Logic
    •E.g., user information
    •Validating user information (valid birthday, etc.)
    •Part of the back-end

Views:  User Interaction/User Experience
    •E.g., how a user would see their information on a webpage
    •Providing an error message for the user to update some data
    •Part of the front-end

Controllers:
    •Manages the interaction between models and views
    •Provides an error message for the user to update data
    •Is this the front-end or back-end? - facilitates the back-end to the front-end and vice versa.

Programmatic webpage:
    SSR: Server Side Rendering
        - a method of loading your website's javascript on your own server.

Bread/CRUD:

- Mkdir
- touch files
- npm init -y   
- npm i express dotenv
- code .

- in vs.code:
    - in a .env file write:
        * PORT=3003
    * const express = require('express')
    - configuration: 
        * require('dotenv').config()
        * const PORT = process.env.PORT
        * const app = express()
    * const app = express()
    - Routes:
        * app.get('/', (req, res) => {
            res.send('Welcome to an Awesome App about Breads')
            })
    - Listen for server:
        * app.listen(PORT, () => {
            console.log('nomming at port', PORT);
            })
    - Create controller folder in terminal:
            * mkdir controllers
            * touch controllers/breads
    - Inside breads file in controllers folder:
            * const express = require('express')
            * const breads = express.Router()
    - Index for breads: breads.get() (shows list of breads)
    - export breads: module.exports = breads
    - Inside server.js: Routes, create breads controller variable
    - Create models folder and touch bread.js
    - put in data as array of objects inside bread.js and export using: module.exports = data
    - require it in controllers_breads.js file
    - SHOW in controllers_breads.js file with breads.get(/:arrayIndex)
            ^ grabbing what the user is passing to us. It makes it able to see each individual bread using the index of the array of objects from the breads list of data in models_bread.js to use in the url. example: localhost:3003/breads/0
    - Install middleware on server.js file
    - add directory views, views/layouts and touch views/index.jsx, views/layouts/defaults.jsx



query parameters         vs.        query strings
- after the / in the path            - starts with ? in the path
- no variables in code               - has variables in code


* always add the error routes (404...) as the last route after all other routes on the page.

Go over JSX - html and javascript combined. (uses REACT framework)

Rest API: A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services. REST stands for representational state transfer and was created by computer scientist Roy Fielding.

REST: representational, state, transfer

REST in practice:
    Action:     HTTP METHOD:        Example Route:
    INDEX       GET                 /breads
    SHOW        GET                 /breads/:id
    CREATE      POST                /breads
    NEW         GET                 /breads/new
    EDIT        GET                 /breads/:id/edit
    UPDATE      PUT                 /breads/id
    DESTROY     DELETE              /breads/:id


MongoDB:
- keeps updated changes for next server load

MongoDB-Compass:
    Compass is a MongoDB GUI that allows you to visually explore and interact with your Mongo databases.

What is a connection string?
    A string that identifies where to connect to a specific databaseThis is similar to how a home address tells you where your friend lives. A connection string tells you where your data lives.

SQL: structured query language

vs. noSQL: stores data in a flexible JSON-like document structure.

* SQL databases are relational, while NoSQLs are non-relational.

BSON: Binary JSON

Mongo can store many databases

A database is made up of many collections that are made up of sets of documents which is the basic unit of data.

locally vs. the cloud installations

Mongodb-compass:
    - show dbs                                       - shows databases
    - use "database name"                            - creates/uses previously created database
    - db.createCollection('collection name')         - creates collection inside database
    - db.collection name.insertOne({object data})    - creates a document
    - db.collection name.find()                      - shows the collection or specified part of documents
    - db.collection name.updatedOne({object data})   - updates the document using $set:
    - db.collection name.deleteOne({object data})    - deletes part of the data in document
    - $gt                                            - greater than
    - $lt                                            - less than
    - $gte                                           - greater than or equal to
    - $lte                                           - less than or equal to

* To open mongoDB in terminal:
            - mongodb-compass & disown
    * ^ "& disown" opens the application and keeps it seperate from terminal so you can keep using the terminal without the program crashing.


* JASKIS activity on github - API-JASKIS


ODM: Object Data Mapper
    - allows for performing CRUD operations and queries within appoication code rather than in the mongo shell.
    - helps model data, providing structure and consistency to documents.
    - makes document validation easier with built-in methods.

Mongoose: an ODM for mongoDB
    * works between the database and node.express
            - simplifies interacting with a mongo database within node apps.
            - essentially translates mongo doucments into javascript objects and vice versa.

* Mongoose Cycle:
    client application (JSX) ----> node.express (server) ----> mongoose -----> mongoDB -----> mongoose -----> node.express ----> client application

* Mongoose models allow us to 
interact with a Mongo database.Models are objects that provide access to a 
corresponding collection in Mongo.
    
    * classes in javascript is creating new objects

* Schemas are like a blueprint. They 
determine the structure of documents 
within a collection.
    
* Where documents are the basic unit 
of data in Mongo, schemas are the 
basic building block in Mongoose.

* After defining a schema, we need to 
convert it into a model to interact 
with a Mongo database.

Models are Objects:
    * Creating a new Mongoose model 
generates an object.The object contains helper methods for 
performing typical database actions.


Helper Methods:

options object helper method:
Destination.find({}, [], { sort: { tickets_available: 1 } })
            ^using an options objet to sort the returned data in ascending numerical order of tickets_available.
Destination.findByIdAndUpdate(req.params.id, { tickets_available: 0 }, { new: true })
            ^using the options object to ensure it returns the updated document.

Schema validation:
            - the validators are the properties of the object.
            - built-in validators
            - "unique" validator property - accepts boolean values, false is the default.

Custom helper methods:
instance: can only be used on instances of a model (a document).
          can only be used after a document has been retrieved from the database.
static:   can only be utilized on a model (a collection).
          can be used before documents have been retrieved from the database.

          Equivalent Terms:
Mongoose        vs.         MongoDB 
Instance    same as...      Document
Model       same as...      Collection

Defining instance methods:
userSchema.methods.fullName = function () {

}
    ^ userSchema: Schema on which to define the insance method.
    ^ methods: tell mongoose you want to define an instance method.
    ^ fullName: what you want to name the method.

Defining static methods:
userSchema.static.getHighScorers = function () {

}
    ^ userSchema: Schema on which to define the static method.
    ^ static: tell mongoose you want to define a static method.
    ^ getHighScorers: what you want to name the method.




*/










