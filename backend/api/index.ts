import express from "express";
import bodyParser from "body-parser";


const app: express.Application = express();

app.use(bodyParser.json());

const port: Number = 3001;

app.get('/', (_req, _res) =>{ 
  _res
  .status(200)
  .send({mensagem : "HOME"})
});

app.listen(port, () => console.log(`servidor ouvind na porta ${port}`));

module.exports = app;