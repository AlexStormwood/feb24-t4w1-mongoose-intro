const { createPost, findManyPosts, findOnePost } = require("./crud/PostCrud");
const { createUser } = require("./crud/UserCrud");
const { dbConnect, dbDisconnect } = require("./database");

require("dotenv").config();

async function seed (){
	// await dbConnect();

	let newUser = await createUser("alexh", true, "alex@bigfootds.com");
	
	await createPost(
		"Example title", 
		[
			{
				languageCode: "en",
				content: "Example content blah blah blah"
			},
			{
				languageCode: "fr",
				content: "Omelette au fromage"
			},
		],
		newUser.id
	);

	let resultFindOne = await findOnePost(
		{
			title: "Example title", 
			"content.languageCode": "en", 
			"content.content": "Example content blah blah blah"
		}
	);

	console.log(resultFindOne.title);
	console.log(resultFindOne._id);
	console.log(resultFindOne.id);

	// let resultFindMany = await findManyPosts({title:"Nonexistent title"});
	// console.log(resultFindMany);



	console.log("Seeding is done, disconnecting from the database!");
	await dbDisconnect();
}

dbConnect().then(() => {
	console.log("Connected to DB, seeding now!");
	seed();
})
// seed();

// await createPost();