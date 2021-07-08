const fetch = require('node-fetch');
const express = require('express');

const app = express();

let status = 404;

app.get('/', (req, res) => {
    res.status(status).send('HEY!');
    console.log('Ping!');
});

const port = process.env.PORT || 4200;

app.listen(port);
console.log(port);
setInterval(async () => {
    const response = await fetch('https://24-7-Discord-Music-Bot.m1liti421.repl.co');
    console.log(`Status - ${response.status}`);
    status = response.status;
}, 30e4);
