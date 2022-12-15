const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const port = 3001

app.get('/', (req, res) => 
  res
  .status(200)
  .send({mensagem : "HOME"})
);

app.listen(port, () => console.log(`servidor ouvind na porta ${port}`));

module.exports = app;