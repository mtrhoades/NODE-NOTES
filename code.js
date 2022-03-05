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


// JSX: Javascript XML
    - allows you to write a mishmash of javascript and HTML.
    - new syntax makes it easier to build dynamic webpages based on data.

Unavailable syntax - for loops, and if statements are REPLACED with:
                    .map() method, and ternary operators.


