const express = require('express');
const path = require('path');
const app = express();

var apiRouter = require("./routes/api_router");


// Serve static files from a directory
app.use(express.static(path.join(__dirname, 'public')));


app.use("/api", apiRouter);

const port = 80;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at ${port}/`);
});
