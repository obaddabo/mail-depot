// requiring packgaes

const express= require('express');
const nm = require("nodemailer");
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.listen(port, ()=> console.log('Server Started'));
app.set('view engine', 'ejs');
app.set('views', 'views');

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Use express Static
app.use(express.static('public'))



app.get('/', (req, res)=>{
        res.render('index', { title : 'Home'})
})
app.get('/home', (req, res)=>{
        res.redirect('/');
        res.statusCode(301)
})


app.get('/send', (req, res)=>{
    res.render('send', { title : 'Send Email'})
})

app.post('/send', (req, res)=>{
   console.log(req.body)

    res.send(req.body)
})
