const authorModel = require('../models/Authors');
const {authenticate} = require('../utils/authenticate');
const {createToken} =  require('../utils/generateToken');

const prueba = (req,res) => {
	res.send("Hola mundo");
}


const ListAuthors = async (req,res) => {

	const authors  =  await authorModel.find({is_active:true});
	// 200 = Ok
	return res.status(200).json(authors);

}

const CreateAuthor = async(req,res) => {
	const author =  await authorModel.create(req.body).catch(e => res.status(400).json(e));
	//201 = created
	res.status(201).json(author);
}


const  getSingleAuthor =  async(req,res) => {
	const {id} = req.params; //req.params.id
	const author  = await authorModel.findOne({_id:id,is_active:true}).catch(e => res.status(400).json(e));
	if(!author) res.status(404).json({message:"Author not found"});
	res.status(200).json(author);
	
}

const updateAuthor =  async(req,res) => {
	const {id} = req.params; //req.params.id
	//spread object
	const author =  await authorModel.findOneAndUpdate({_id:id,is_active:true},{...req.body},{new:true}).catch(e => res.status(400).json(e));
	if(!author) res.status(404).json({message:"Author not found"});

	res.status(200).json(author)
}

const deleteAuthor = async(req,res)=> {
	const {id} = req.params; //req.params.id
	//spread object
	const deletedAuthor =  await authorModel.findOneAndUpdate({_id:id,is_active:true},{is_active:false}).catch(e => res.status(400).json(e));
	if(!deletedAuthor) res.status(404).json({message:"Author not found"});
	res.sendStatus(204);

}

const reactiveAuthor = async(req,res) => {
	const {username} = req.body;
	const activeUser = await authorModel.findOneAndUpdate({username,is_active:false},
															{is_active:true},{new:true});
	if(!activeUser) res.status(404).json({message:"Author not found"});
	res.status(200).json(activeUser);
}

const login = (req,res) => {

	authenticate(req.body).then((user) => {
		if(!user) res.send(404).json({message:"User not found"});
		const  token =  createToken(user);
		res.status(200).json({token});
	}).catch( e => res.status(400).json(e));
}




module.exports = {
	prueba,
	ListAuthors,
	CreateAuthor,
	getSingleAuthor,
	updateAuthor,
	deleteAuthor,
	reactiveAuthor,
	login
}