const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}.`);
});

module.exports = (bot) => { 
  app.post('/new-message', (req, res, next) => {
    bot.processUpdate(req.body);
    res.status(200).json({'message': 'Got your message!'});
  });
}