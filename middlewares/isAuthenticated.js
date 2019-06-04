

const jwt =  require('jsonwebtoken');
const authorModel =  require('../models/Authors');

const SECRET_KEY = "hdskahdiUEHD2I3SDJKSAHDUHGJHWGSajs"


const verifyToken = async (req,res,next) => {

	const Authorization = req.get("Authorization");

	if(Authorization){
		const token =  Authorization.replace("JWT ","");
		const payload =  jwt.verify(token,SECRET_KEY);
		const author = await authorModel.findById(payload._id).catch(e => res.status(401).json(e));
		if(!author) res.status(401).json({message:"User not found"});
		req.author =  author;
		next();
	}else{
		res.status(401).json({message:"Authorization header not provided"})
	}
}

module.exports =  {
	verifyToken
}