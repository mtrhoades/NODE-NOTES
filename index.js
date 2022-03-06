// let http = require('http')
// let server = http.createServer(function (req, res) {
//     res.writeHeader(206)
//     res.write('<h1>Bark!</h1><img src="https://httpstatusdogs.com/img/206.jpg" alt="206">')
//     res.end()
// })

// server.listen(3000, function () {
//     console.log('I am awake!')
// })



// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     console.log('Hit route path');
//     res.send('Pow! You just hit the web server');
//     console.log('Server is running!')
// });

// app.listen(3000);


require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('You just hit the server!');
});

app.use('/auth', require('./controllers/auth'));

app.get('*', (req, res) => {
    res.send('This page does NOT exist');
});

app.listen(process.env.PORT, () => {
    console.log('Server is running!');
});
