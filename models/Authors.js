

const mongoose = require('mongoose');


const Schema = mongoose.Schema


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


module.exports = mongoose.model('authors',AuthorSchema);