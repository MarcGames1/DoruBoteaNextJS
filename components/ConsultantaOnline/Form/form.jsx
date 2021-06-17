import { useState } from 'react'
import axios from 'axios'




const Form = ()=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    const [phone, setPhone] =  useState('')
    const [gdpr, setGdpr]=useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        console.log("sending!")
        let data = {
            name,
            email,
            comments,
            phone,
            gdpr,
            submitted
        }
        console.log("AICI SUNT DATELE")
        console.log(data)
        const headers = {
            'Accept': 'application/json, text/plain, */*',
      'content-type': 'application/json'
        }

        

        axios.post('/api/contact',data, headers)
          .then((response) => {
            console.log("Response Receved!");
            console.log(response)
          }, (error) => {
            console.log("Error! PLM!");
            console.log(error);
          });

        e.preventDefault()
        console.log('Sending')

        resetState()
      }

 const resetState=()=>{
setName("")
setEmail("")
setPhone("")
setGdpr("")
setSubmitted(false)
 }   
    return(
        <>
        <main className="form-container" id="contact">
    <h2>Contact Rapid</h2>
    <form action="/pages/success.html" method="post">
        <label htmlFor="nume">Nume</label>

        <input required type="text" id="nume" name="nume" placeholder="Nume si Prenume" onChange={(e)=>{setName(e.target.value)}}/>


        <label htmlFor="email">Email</label>
        <input required type="email" name="email" id="email" placeholder="Adresa de email" onChange={(e)=>{setEmail(e.target.value)}}/>

        <label htmlFor="phone">Telefon</label>
        <input required type="tel" name="phone" id="phone" pattern="[0-9]{10}" placeholder="Telefon" onChange={(e)=>{setPhone(e.target.value)}}/>
        <textarea required name="comments" id="comments" rows="10" placeholder="Descrieti Cauza" onChange={(e)=>{setComments(e.target.value)}} />






        <fieldset>
            <label id="gdpr-label" htmlFor="gdpr"><a href="/pages/gdpr.html">Sunt de acord cu politica de prelucrare
                    a datelor</a></label>
            <input required type="checkbox" name="gdpr" onChange={(e)=>{setGdpr(e.target.value)}}/>
        </fieldset>
        <button className="btn from-right" type="submit"
         onClick={(e)=>{handleSubmit(e)}} > Trimiteti!</button>
    </form>
</main>
</>
    )
}

export default Form