

const jwt = require('jsonwebtoken');
const authorModel = require('../models/Authors');

const SECRET_KEY = process.env.SECRET_KEY


const verifyToken = async (req, res, next) => {

	const Authorization = req.get("Authorization");

	try {
		if (Authorization) {
			if (Authorization.split(' ')[0] !== "JWT") res.status(400).json({ message: "its Not JWT" })
			const token = Authorization.replace("JWT ", "");
			const payload = jwt.verify(token, SECRET_KEY);
			const author = await authorModel.findById(payload._id).catch(e => res.status(401).json(e));
			if (!author) res.status(401).json({ message: "User not found" });
			req.author = author;
			next();
		} else {
			res.status(401).json({ message: "Authorization header not provided" })
		}
	}catch(e){
		res.status(400).json({message:"Invalid token"})
	}
}

const isAdmin = async(req,res,next) => {
	console.log(req.author)
	if(req.author && req.author.rol == "admin"){
		next()
	}else{
		res.status(403).json({message:"You are not admin"})
	}
}

module.exports = {
	verifyToken,
	isAdmin
}