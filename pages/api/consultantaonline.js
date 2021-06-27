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
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
    },
    secure: true,
})



const mailData = {
    
    from: 'contact.avocat.dorubotea@gmail.com',
    to: 'george.marcu20@gmail.com',
    subject: `[FORMULAR_CONTACT]${req.body.name.toString()} a completat formularul: `,
    text:`NUME:${req.body.name.toString()}
    EMAIL: ${req.body.email.toString()}
    TELEFON: ${req.body.phone.toString()}
    MESAJ: ${req.body.comments.toString()}
    GDPR: ${req.body.gdpr.toString()}`,
        html: `<div>
        <p>NUME:${req.body.name.toString()}</p>
        <p>EMAIL: ${req.body.email.toString()}</p>
        <p>TELEFON: ${req.body.phone.toString()}</p>
        <p>MESAJ: ${req.body.comments.toString()}</p>
        <p>GDPR: ${req.body.gdpr.toString()}</p>
        </div>
        `
}

console.log("MAIL DATA IS /n===============================")
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