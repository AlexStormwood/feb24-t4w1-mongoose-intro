const mongoose = require("mongoose");


const LocalizedContentSchema = new mongoose.Schema({
	languageCode: {
		type: String,
		required: true,
		default: "en" // fr, ko,
	},
	content: {
		type: String,
		required: true
	}
});

// Do not want a model, subdocuments are just schemas!
// const LocalizedContentModel = mongoose.model("LocalizedContent", LocalizedContentSchema);

module.exports = {
	LocalizedContentSchema
}