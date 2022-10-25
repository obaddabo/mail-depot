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

app.post('/send', (req, res)=>{
    const output = `
    <p>you have a new contact reques</p>
    
    <ul>
    <li>Name : ${req.body.name}</li>
    <li>Name : ${req.body.company}</li>
    <li>Name : ${req.body.email}</li>
    <li>Name : ${req.body.phone}</li></ul>
    `  


    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info =  transporter.sendMail({
        from: '"Fred Foo 👻" <sender email>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    
})
