const express = require("express");

const { PostModel } = require("../models/PostModel");
const { findOnePost } = require("../utils/crud/PostCrud");

const router = express.Router();

// create route 

// find one route by ID 
router.get("/:postId", async (request, response) => {
	console.log("Searching for post with ID of: " + request.params.postId);
	let result = await findOnePost({_id: request.params.postId});
	console.log("Found post with data of: " + JSON.stringify(result));
	response.json({
		data: result
	});
});

// find many route 


module.exports = router;