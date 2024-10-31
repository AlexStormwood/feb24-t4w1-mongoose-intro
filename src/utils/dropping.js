const { dbConnect, dbDisconnect, dbDrop } = require("./database");

async function drop (){
	// await dbConnect();
	
	await dbDrop();

	console.log("Dropping is done, disconnecting from the database!");
	await dbDisconnect();
}

dbConnect().then(() => {
	console.log("Connected to DB, dropping now!");
	drop();
})
