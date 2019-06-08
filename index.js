require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
const morgan =  require('morgan');
const cors =  require('cors');

const router = require('./routes');
const {cloudinaryConfig} =  require('./utils/cloudinaryConfig');


const app = express();


const PORT  = process.env.PORT || 8000

const MONGO = process.env.NODE_ENV  == "test" ? process.env.MONGO_URI_TEST : process.env.MONGO_URI

mongoose.connect(MONGO,{ useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('*',cloudinaryConfig);

app.use('/api/v1',router);

//http://localhost:8000/api/v1/prueba

app.get('/',(req,res) => {
	res.send('Saludos desde mi api');
})

app.listen(PORT,() =>{
	console.log(`Works in port ${PORT}`)
});

module.exports = app;
