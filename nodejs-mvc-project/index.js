const express = require('express');
const path = require('path');
const app = express();
const HomeController = require('./app/controllers/HomeController');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app', 'views'));
app.use(express.static('public'));

app.get('/', HomeController.index);
app.get('/epac', HomeController.epac);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});