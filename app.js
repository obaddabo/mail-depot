// requiring packgaes

const express= require('express');
const nm = require("nodemailer");
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.listen(port, ()=> console.log('Server Started'));
app.set('view engine', 'ejs');
app.set
// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// setting Express static folder
express.static('public')


app.get('/', (req, res)=>{
        res.send('Hello World')
})
