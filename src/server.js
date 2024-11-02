// Purpose:
// Configure the server, eg.
// - routes
// - middleware 
// - CORS 
// - debug logger setups
// - connections to databases
// - connections to file storage 

const express = require("express");
const app = express();

// Server app configuration goes here
// middleware, routes, etc 

app.use(express.json());

// app.verb(path, callback);
// http://localhost:8080/
app.get("/", (request, response) => {
	// response.send("<h1>Hello, world!</h1>");

	response.json({
		message:"Hello world!"
	});
});

const PostController = require("./controllers/PostController.js");
app.use("/posts", PostController);

// Server app configuration is finished by this point 

// Export the app so that other files can control when the server
// starts and stops 
module.exports = {
	app
}