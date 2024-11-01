const express = require("express");

const { PostModel } = require("../models/PostModel");
const { findOnePost, findManyPosts } = require("../utils/crud/PostCrud");

const router = express.Router();

// create route 

// find one route by ID 
router.get("/search/:postId", async (request, response) => {
	console.log("Searching for post with ID of: " + request.params.postId);
	let result = await findOnePost({_id: request.params.postId});
	console.log("Found post with data of: " + JSON.stringify(result));
	response.json({
		data: result
	});
});

router.get("/query", async (request, response) => {
	// get the query from the request.body
	console.log(request.body.query);
	
	let query = request.body.query;
	// let {query} = request.body;

	// use the query in a Post CRUD function 
	let result = await findOnePost(query);

	// return the result 
	response.json({
		data: result
	});
});

// localhost:8080/posts/all
// localhost:8080/posts/search/oasdhfaolifshjaodfjhkasdofdsaj

// get all posts
router.get("/all", async (request, response) => {

	let result = await findManyPosts({});

	response.json({
		data: result
	});
});

// find many route 


module.exports = router;