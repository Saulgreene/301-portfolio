'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 8888;

app.use(express.static('.'));

app.get('*', function(request, response) {
  response.sendFile('index.html', {root: '.'});
})

app.listen(PORT, function() {
  console.log('The PORT is', PORT);
})
