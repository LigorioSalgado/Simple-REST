const {config,uploader} = require('cloudinary');


const cloudinaryConfig =  (req,res,next) => {

	config({
		cloud_name:"doaaht440" || process.env.CLOUDINARY_CLOUD_NAME,
		api_key:"215755899985283" || process.env.CLOUDINARY_API_KEY,
		api_secret: "pbRBEpOAwIrCA7EvNf-R4qK09V4" || process.env.CLOUDINARY_API_SECRET
	})

	next();
}

module.exports = {
	cloudinaryConfig,
	uploader
}