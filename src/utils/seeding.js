const { createPost } = require("./crud/PostCrud");
const { dbConnect, dbDisconnect } = require("./database");

async function seed (){
	// await dbConnect();
	
	await createPost("Example title", "Example content blah blah blah");






	console.log("Seeding is done, disconnecting from the database!");
	await dbDisconnect();
}

dbConnect().then(() => {
	console.log("Connected to DB, seeding now!");
	seed();
})
// seed();

// await createPost();