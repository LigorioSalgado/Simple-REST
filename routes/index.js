

const express =  require('express');

const {prueba,
	CreateAuthor,
	ListAuthors,
	getSingleAuthor,
	updateAuthor,
	deleteAuthor,
	reactiveAuthor} = require('../controllers/authorController');

const router  =  express.Router();


router.get('/',prueba);

router.get('/authors',ListAuthors);

router.post('/authors',CreateAuthor);

router.patch('/authors/reactive',reactiveAuthor); //Restful

router.get('/authors/:id',getSingleAuthor);

router.patch('/authors/:id',updateAuthor);

router.delete('/authors/:id',deleteAuthor);





module.exports = router;