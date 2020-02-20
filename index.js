const express = require('express');

const app = express();

const page = `<html>
<head>
  <title>Jason Nelemans</title>
</head>

<body>
  <h1>Why did the bike fall over?</h1>
  <p>It was two tired</p>
</body>
</html>`

app.get('/', (request, response) => {
  response.send(page);
});

const port = 3000;

function onListen() {
  console.log(`Listening on :${port}`);
};

app.listen(port, onListen);
