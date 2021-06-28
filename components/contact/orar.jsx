import Clock from "../svgComponents/clock"
import Mail from "../svgComponents/mail"
import Phone from "../svgComponents/phone"

const Orar = ()=>{
    return(
        <section id="contact-main">
        <h1>ORAR</h1>
     
        <h2 className="contact-icons" id="ceas"><Clock></Clock>Clock 00:00 - 24:00</h2>
        <h2  className="contact-icons" id="telefon"><Phone /> 0744312032</h2>
        <h2  className="contact-icons" id="email"><Mail /> avocat.dorubotea@gmail.com </h2>
    <h2>PROFESIONALISM, EXPERIENTA, SERIOZITATE, PERSEVERENTA, CORECTITUDINE, CONFIDENTIALITATE.</h2>
    </section>
    )
}

export default Orar