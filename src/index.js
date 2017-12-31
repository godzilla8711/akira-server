const debug = require('debug')('akira-server:index');
const express = require('express');
const app = express();

const port = process.env.AKIRA_SERVER_PORT || 5000;

app.get('/', (req, res) => {
  res.send({
    name: 'akiar server',
    version: '0.0.1'
  });
});

app.listen(port);
console.log(`Akira server node process started on port ${port}`);
