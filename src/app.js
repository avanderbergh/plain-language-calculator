const app = require('express')();
const bodyParser = require('body-parser');

const calc = require('./calculator');

app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
  res.send(`${calc.calculate(req.body.input)}`);
});

const server = app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listering on port 3000');
});

module.exports = server;
