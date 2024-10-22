var express = require("express"); // Requires the Express module
var http = require('http');
// Calls the express function to start a new Express application
var app = express();
app.use(function(request, response) { // middleware
 console.log("In comes a request to: " + request.url);
 response.end("Hello, world 2!");
});
http.createServer(app).listen(81); // start the server