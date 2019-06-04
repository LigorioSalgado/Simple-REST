

const authorModel =  require('../models/Authors');
const bcrypt =  require('bcrypt');



const authenticate =  ({username,password}) => {
	return  new Promise((resolve,reject) => {
		authorModel.findOne({username}).then((author) =>{
			console.log(author)
			if(!author)reject(new Error("User does not exist"));
			bcrypt.compare(password,author.password,(err,isValid) =>{
					console.log(isValid);
					if(!isValid) reject(new Error("Password not match"))
					resolve(author)
			})
		}).catch((err) => {
			reject(err)
		})

	});

}

module.exports  = {
	authenticate
}