const express = require('express');
const path = require('path');
const app = express();

// Serve static files from a directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = 81;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://36.50.40.177:${port}/`);
});
