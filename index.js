
const express = require('express');
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
const morgan =  require('morgan');

const router = require('./routes');


const app = express();


const PORT  = process.env.PORT || 8000

mongoose.connect('mongodb+srv://prueba2:prueba2@cluster0-vp6hz.mongodb.net/blog?retryWrites=true');


app.use(bodyParser.json())
app.use(morgan('dev'));

app.use('/api/v1',router);

//http://localhost:8000/api/v1/prueba

app.listen(PORT,() =>{
	console.log(`Works in port ${PORT}`)
});

module.exports = app;
