//startin express app
const express = require('express');
const app = express();
const studentRead = require('./src/controller/read');
const bodyParser = require('body-parser');

// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/:npm', studentRead.getStudent);
app.get('/:npm/*', studentRead.getStudent);

app.listen(3001, () => {
    console.log('Reader Server is running on port 3001')
});
