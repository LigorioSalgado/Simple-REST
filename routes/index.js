

const express =  require('express');

const {login,
	CreateAuthor,
	ListAuthors,
	getSingleAuthor,
	updateAuthor,
	deleteAuthor,
	reactiveAuthor} = require('../controllers/authorController');

const {
	createPost,
	listPosts,
	updatePost,
	getSinglePost,
	deletPost,
	postsUser,
	uploadImage
} = require('../controllers/postController');

const {verifyToken} = require('../middlewares/isAuthenticated');

const {multerUpload} = require('../middlewares/multerUpload');

const router  =  express.Router();


router.post('/login',login);

router.get('/authors',ListAuthors);

router.post('/authors',CreateAuthor);

router.patch('/authors/reactive',reactiveAuthor); //Restful

router.get('/authors/:id',getSingleAuthor);

router.patch('/authors/:id',updateAuthor);

router.delete('/authors/:id',deleteAuthor);


// Rutas de posts
router.get('/posts',listPosts);

router.post('/posts',verifyToken,createPost);

router.get('/posts/:id',getSinglePost);

router.patch('/posts/:id',verifyToken,updatePost);

router.delete('/posts/:id',verifyToken,deletPost);

router.get('/me/posts',verifyToken,postsUser);


router.post('/posts/upload',multerUpload,uploadImage);





module.exports = router;