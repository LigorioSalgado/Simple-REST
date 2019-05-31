

const express =  require('express');

const {prueba} = require('../controllers/authorController');

const router  =  express.Router();


router.get('/',prueba);


module.exports = router;