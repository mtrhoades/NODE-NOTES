/* 

Clients vs. Servers

Request Response Cycle:
    client/web browser sends request to a server, which the server recieves the request and does operations before sending a response back to the client/web browser.

Buildig blocks of requests and responses

C.R.U.D:
    GET (Create data)
    POST (Read data)
    PATCH (Update data)
    DELETE (Delete data)

HTTP vs. HTTPS  Protocols
(un-encrypted vs. encrypted)

Anatomy of a URL:
example:
    https://exmaple.org/lessons/search?course=anatomy&topic=url#example

^ protocol  / host/domain   / path /      query string     / fragment

Protocol: Determines which protocol to use (HTTP, HTTPS, SSH)
Host/Domain: address of the server providing resources.
Path: the path to the exact resource of the server you want to access.
Query String: parameters passed to the server providing additional information.
Fragment: identifies a specific section of the response.

Front-end vs. Back-end

Status Codes:
    100s - informational responses
    200s - sucessful responses
    300s - redirects
    400s - client errors
    500s - servor errors

    *** use http.cat or http.dog to look up status codes

* very important status codes:
200 - OK
201 - GET REQUEST
404 - NOT FOUND



Node.js
(runs on the samme engine powered by google chrome.)

- Runs outside of web browswer
- No access to the DOM
- Comes with a package manager: npm

npm: NODE PACKET MANAGER
** an open source library of packages, of modules.

Module: single javascript file with inter-related functionality.
Package: one or more related modules packaged together.

 ***** keyword: require
 ^ imports the file/module

*/

// npm install snake-names

const snakeNames = require('snake-names');

// ^ the require keyword is the same as importing modules, it grabs the necessary functions and other code needed to run from other files/modules.

console.log(snakeNames.cute);

// in terminal type node code.js to run the code, grabbing information from the server of snake-names.

// EXAMPLE - look up (NODE-snake-project)file on github.



