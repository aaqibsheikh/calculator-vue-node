const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/sum', (req,res) => {
    const num1 = Number(req.query.first_number);
    const num2 = Number(req.query.second_number);

    const sum = num1 + num2;
    res.end(JSON.stringify(sum));

});

app.listen(3000, () => {
  console.log('Server listening at port 3000');
});