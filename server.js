const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

const users = {
  'jayOwen': {
    name: 'Jon',
    highScores: [
      0,
      20,
      15,
      300,
      42,
    ],
    favoriteGames: [
      'frogger',
    ],
  },
};


app.post('/newUser', (req, res) => {
  console.log('newUser req.body: ', req.body);
});

app.get('/users', (req, res) => {
  console.log('get users heard');
  res.send(users);
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = 9001;



app.listen(port, () => {
  console.log(`App is ready at localhost:${port}`);
});