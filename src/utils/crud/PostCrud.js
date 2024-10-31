// Provide CRUD functions for the PostModel 

const { PostModel } = require("../../models/PostModel");

async function createPost (title, content = null) {
	let result = await PostModel.create({
		title: title,
		content: content
		// leaving "date" out since its default is Date.now
	});

	return result;
}

async function findOnePost () {

}

async function findManyPosts () {

}

async function updateOnePost () {

}

async function updateManyPosts () {

}

async function deleteOnePost () {

}

async function deleteManyPosts () {

}

module.exports = {
	createPost,
	findOnePost, findManyPosts,
	updateOnePost, updateManyPosts,
	deleteOnePost, deleteManyPosts
}