console.log("Visitor Manager is going to work!");

const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const bodyParser = require('body-parser');
const forms = require('./routes/forms');
const mail = require('./routes/mail');
const checkedIn = require('./routes/checked-in');
const welcome = require('./routes/welcome')

app.set('view engine', 'ejs');
//body parser time
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static('FrontEnd'))
app.use(forms);
app.use(mail);
app.use(checkedIn);
app.use(welcome);

app.listen(port, () => {
  console.log('Listening on port', port);
});
