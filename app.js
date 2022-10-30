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
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Use express Static
app.use(express.static('public'))



app.get('/', (req, res)=>{
        res.render('index', { title : 'Home'})
})

app.post('/send', (req, res)=>{
    const output = `
    
    `  
    // ${req.body.company}

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
      });
    
      // send mail with defined transport object
      let info =  transporter.sendMail({
        from: '"Mail Depot" <sender email>', // sender address
        to: useremail, // list of receivers
        subject: subject, // Sububject line
        text: body, // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    
      console.log("Message sent: %s", info.messageId);
  
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    
})
