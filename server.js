const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname + '')));
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
