'use strict';

const express = require('express');

const port = 8000;
const host = '0.0.0.0';

const app = express();

app.get('/', (request, response) => {
    response.send('Hello world. From GitHub.');
});

app.listen(port, host);

console.log(`Running on ${host}:${port}`);
