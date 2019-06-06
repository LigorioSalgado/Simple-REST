

const mongoose = require('mongoose');
const bcrypt =  require('bcrypt');

const Schema = mongoose.Schema

const  SALT_FACTOR =  10;

const AuthorSchema =  new Schema({

	first_name:{
		type:String,
		required:true
	},
	last_name:{
		type:String,
		required:true
	},
	username:{
		type:String,
		unique:true,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	bio:{
		type:String
	},
	birth_date:{
		type:Date
	},
	is_active:{
		type:Boolean,
		default:true
	}

},{timestamps:true,collection:"authors"});

//Create o Save
//No funciona con update
function encryptPassword(next){
	let author = this;

	if(!author.isModified('password')){return next()}

	bcrypt.genSalt(SALT_FACTOR,function(err,salt){
		if(err) return next(err);

		bcrypt.hash(author.password,salt,function(err,hash){
			if(err) return next(err);
			author.password =  hash
			next();
		});
	});

}


AuthorSchema.pre('save',encryptPassword);
AuthorSchema.pre('update',encryptPassword);


module.exports = mongoose.model('authors',AuthorSchema);