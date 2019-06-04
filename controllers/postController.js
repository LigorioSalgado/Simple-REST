const postModel = require('../models/Posts');


const createPost = async (req,res) => {
	const {_id} =  req.author
	req.body.author =  _id
	const post = await postModel.create(req.body).catch(e => res.status(400).json(e));
	res.status(201).json(post)
}


const listPosts = async (req,res) => {
	const posts =  await postModel.find({is_active:true})
	res.send(200).json(posts)
}

const updatePost = async(req,res) => {
	const {id} =  req.params
	const post  =  await postModel.findOneAndUpdate({_id:id,is_active:true},{...req.body},{new:true});
	if(!post) res.send(404).json(post);
	res.send(200).json(post)
}

const getSinglePost = async(req,res) => {
	const {id} =  req.params
	const post  =  await postModel.findOne({_id:id,is_active:true});
	if(!post) res.send(404).json(post);
	res.send(200).json(post)

}

const deletPost = async (req,res) => {
	const {id} =  req.params
	const post  =  await postModel.findOneAndUpdate({_id:id,is_active:true},{is_active:false},{new:true});
	if(!post) res.send(404).json(post);
	res.sendStatus(204);
}

module.exports = {
	createPost,
	listPosts,
	updatePost,
	getSinglePost,
	deletPost
}

