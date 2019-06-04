
const jwt  =  require('jsonwebtoken');

const SECRET_KEY = "hdskahdiUEHD2I3SDJKSAHDUHGJHWGSajs"

Date.prototype.addDays = function(days){
	var date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	return date;
}


const createToken = ({username,first_name,_id}) => {

	const exp = new Date().addDays(1).getTime(); //152452673727

	const payload = {
		_id,
		username,
		first_name,
		exp
	}

	return jwt.sign(payload,SECRET_KEY);
}

module.exports ={
	createToken
}