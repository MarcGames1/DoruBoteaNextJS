export default function (req, res) {
    require('dotenv').config()


let nodemailer = require('nodemailer')
console.log("Entered Contact.js")
console.log(req.body)
console.log(req.body.comments)

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'contact.avocat.dorubotea@gmail.com',
        pass: process.env.password,
    },
    secure: true,
})



const mailData = {
    
    from: 'contact.avocat.dorubotea@gmail.com',
    to: 'george.marcu20@gmail.com',
    subject: `[FORMULAR_CONTACT]${req.body.name} a completat formularul: `,
    text:"Nume: " + req.body.name + "\n"+
    "EMAIL: " + req.body.email + '\n'+
    "TELEFON: "+ req.body.phone +"\n"+
    "MESAJ: " +req.body.comments + "\n"+
    "GDPR: " +req.body.gdpr,
        html: `<div>NUME:${req.body.name}</div>
        <h3>EMAIL: ${req.body.email}</h3>
        <h3>TELEFON: ${req.body.phone}</h3>
        <p>MESAJ: ${req.body.comments}</p>
        <p>GDPR: ${req.body.gdpr}</p>`
}


console.log(mailData)

    
    transporter.sendMail(mailData, function (err, info) {
        if(err){

            console.log("eroare in cintact.js")
            console.log(err)
        }
        else
        console.log(info)
        console.log("EMAIL SENT!!!!")
    })
   
    res.send("Success")
}