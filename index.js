const express = require('express');

const server = express();

server.get('/teste',(req,res) => {
  return res.send('Hello world');
})
server.listen(8080);
