const serverless = require('serverless-http');
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.get('/', function(req, res) {
  res.send('Clickability Guru API');
});

app.get('/api/:wss', (req, res) => {
  const wssID = req.params.wss || 'Topics';
  axios
    .get(`http://blog.clickability.guru/templates/getWSS?wssID=${wssID}`)
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => {
      console.log('err ', err);
    });
});

app.get('/api/:id/:url', (req, res) => {
  const contentID = req.params.id || 487026341;
  axios
    .get(`http://www.clickability.guru/templates/getContent2?cID=${contentID}`)
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => {
      console.log('err ', err);
    });
});

module.exports.handler = serverless(app);
