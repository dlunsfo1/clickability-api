const serverless = require('serverless-http');
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.get('/', function(req, res) {
  res.send('Bonjour le monde');
});

app.get('/api/:id/:url', (req, res) => {
  const contentID = req.params.id || 487026341;
  axios
    .get(``)
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => {
      console.log('err ', err);
    });
});

module.exports.handler = serverless(app);
