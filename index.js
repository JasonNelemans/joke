const express = require('express');

const app = express();

const page = `<html>
<head>
  <title>Jason Nelemans</title>
  <style>
    html {
      background: linear-gradient(90deg, rgba(40,31,200,1) 0%, rgba(5,104,255,1) 25%, rgba(0,212,255,1) 100%);
    }

    .container {
      color: #f98402;
      text-align: center;
      margin-top: 200px;
    }

    p {
      font-size: 30px;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>Why did the bike fall over?</h1>
    <p>It was two tired</p>
  </div>
</body>
</html>`

app.get('/', (request, response) => {
  response.send(page);
});

const port = process.env.PORT || 3000;

function onListen() {
  console.log(`Listening on :${port}`);
};

app.listen(port, onListen);
