

const mongoose = require('mongoose');


const Schema = mongoose.Schema


const AuthorSchema =  new Schema({

	fisrt_name:{
		type:String
	},
	last_name:{
		type:String
	},
	username:{
		type:String,
		unique:true
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