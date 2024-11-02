// Provide CRUD functions for the UserModel 

const { UserModel } = require("../../models/UserModel");

async function createUser (username, isOver18, email) {
	let result = await UserModel.create({
		username: username,
		isOver18: isOver18,
		email: email
		// leaving "date" out since its default is Date.now
	});

	return result;
}

// findOneUser({username:"alexh"});
async function findOneUser (query) {
	let result = await UserModel.findOne(query);

	return result;
}

async function findManyUsers (query) {
	let result = await UserModel.find(query);

	return result;
}

async function updateOneUser () {

}

async function updateManyUsers () {

}

async function deleteOneUser () {

}

async function deleteManyUsers () {

}

module.exports = {
	createUser,
	findOneUser, findManyUsers,
	updateOneUser, updateManyUsers,
	deleteOneUser, deleteManyUsers
}