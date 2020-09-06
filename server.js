const express = require("express");
const session = require('express-session');

const port = 3000;
const app = express();

let reviews = [];

app.set('views', './templates');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(session({
  secret: 'my-secret',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true
  }
}));

app.get('/', function (req, res) {
  if (req.query.newReview) reviews.push(req.query.newReview);

	res.render('index', {reviews});
});

app.listen(port, () => console.log(`The server is listening at http://localhost:${port}`));
