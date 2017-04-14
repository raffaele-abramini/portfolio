const express = require('express');
const path = require('path');
const app = express();
const htmlFile = path.join(__dirname, "index.html");


app.use('/assets', express.static('dist'));

app.get('*', (req, res) => res.sendFile(htmlFile)).listen(8080);
