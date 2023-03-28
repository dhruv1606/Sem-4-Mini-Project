const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

app.set('vew engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render('home.ejs');
})

app.listen(3000, () => {
  console.log("Listening on Port 3000");
})