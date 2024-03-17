import React from "react"
import { Alert } from "react-bootstrap"
import Checkmark from "../svgComponents/checkmark"
import Clock from "../svgComponents/clock"
import Mail from "../svgComponents/mail"
import Phone from "../svgComponents/phone"
const Orar = ()=>{

const arr =['PROFESIONALISM', 'EXPERIENTA', 'SERIOZITATE', 'PERSEVERENTA', 'CORECTITUDINE', 'CONFIDENTIALITATE']
let arrComponents = arr.map((item)=>{
    return(<Alert variant="primary" className="text-dark"><Checkmark color='green'/>
         <span> </span>{item}
        </Alert>)
})



    return(<>
        <section id="contact-main">
        <h5 className='text-center'>ORAR</h5>
     
        <h5 className="text-center" id="ceas"><Clock /> 00:00 - 24:00</h5>
        <h5  className="text-center" id="telefon"><Phone /> 0744312032</h5>
        <h5  className="text-center" id="email"><Mail /> avocat.dorubotea@gmail.com </h5>
        {arrComponents}
    </section>
        

    </>
    )
}

export default Orar