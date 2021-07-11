import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Button, Modal } from 'react-bootstrap'



function ConsultantaForm () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    const [phone, setPhone] =  useState('')
    const [speta, setSpeta] =  useState('')
    const [ore, setOre] =  useState(0)
    const [gdpr, setGdpr]=useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
      
      console.log("sending!")
      let data = {
        name,
        email,
        comments,
        phone,
        gdpr,
        submitted,
        speta,
        ore
      }
      console.log("HANDLE SUBMIT MAI JOS E DATA")
      console.log(data)
      if(data.name && data.email && data.comments && data.phone && data.gdpr && data.submitted ==false){
        console.log("AICI SUNT DATELE")
        console.log(data)
        const headers = {
          'Accept': 'application/json, text/plain, */*',
          'content-type': 'application/json'
        }
        
        
        
        axios.post('/api/consultantaonline',data, headers)
        .then((response) => {
          alert("Va multumim, va vom contacta curand");
          resetState()
          console.log(response)
        }, (error) => {
          alert("Formularul nu s-a trimis!!!!");
          console.log(error);
        });
        
        // e.preventDefault()
        // e.reset()
        console.log("HANDLE SUBMIT/n===========================================")
        console.log(e)
        
        
      } else{
        console.log(data)
        alert("A intervenit o eroare! va rugam sa completati toate campurile daca ati facut-o, apasati F5 si mai completati odata formularul Va multumim")
      }
      }

 const resetState=()=>{
setName("")
setEmail("")
setPhone("")
setGdpr("")
setOre(0)
setSpeta('')
setSubmitted(false)
 }   
    return(
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>GDPR</Modal.Title>
        </Modal.Header>
        <Modal.Body>Datele transmise in formular vor fi folosite strict pentru comunicarea intre avocat si client</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Inchideti
          </Button>

        </Modal.Footer>
      </Modal>
        <main className="form-container container" id="contact">
    <h3>completeaza formularul si programeaza acum sedinta de consultanta online</h3>
    <form autoComplete="off"
     
     method="post">
        <label htmlFor="nume">Nume</label>

        <input required type="text" id="nume" name="nume" placeholder="Nume si Prenume" onChange={(e)=>{setSubmitted(false), setName(e.target.value)}}/>


        <label htmlFor="email">Email</label>
        <input required type="email" name="email" id="email" placeholder="Adresa de email" onChange={(e)=>{setSubmitted(false), setEmail(e.target.value)}}/>

        <label htmlFor="phone">Telefon</label>
        <input required type="tel" name="phone" id="phone" pattern="[0-9]{10}" placeholder="Telefon" onChange={(e)=>{setPhone(e.target.value)}}/>
        <label htmlFor="speta">Speta</label>
                    <select required id="speta" name="speta"  onChange={(e)=>{setSpeta(e.target.value)}}>
                        <option value="Drept Penal">Drept Penal</option>
                        <option value="Dreptul Familiei">Dreptul Familiei</option>
                        <option value="Drept Civil">Drept Civil</option>
                        <option value="Malpraxis Medical">Malpraxis Medical</option>
                        <option value="Dreptul Muncii">Dreptul Muncii</option>
                        <option value="Executari Silite">Executari Silite</option>
                
                    </select>
                    <label htmlFor="ore de consultanta"></label>
                    <input type="range" id="ore de consultanta " step='1' onChange={(e)=>{setOre(parseInt(e.target.value))}} name="Ore de Consultanta"
                        min="1" max="10" value={ore} />
                    <p className='primary h4'>Ore De Consultanta selectate:{ore}</p>

   
        <textarea required name="comments" id="comments" rows="10" placeholder="Descrieti Cauza" onChange={(e)=>{setComments(e.target.value)}} />






        <fieldset>
            <label id="gdpr-label" htmlFor="gdpr"><a  onClick={handleShow}>Sunt de acord cu politica de prelucrare
                    a datelor</a></label>
            <input required type="checkbox" name="gdpr" onChange={(e)=>{setGdpr(e.target.value)}}/>
        </fieldset>
        <button className="btn btn-success" id='butonContact' type="submit"
         onClick={(e)=>{handleSubmit(e)
         document.querySelector("form").reset()
         resetState()
         }} > Trimiteti!</button>
    </form>
</main>




<style jsx>{`   







.form-container h1,
.form-container input{
    border-bottom: 4px #945345de solid ;
}
.form-container h1{
    
    color:var(--primary-font-color) !important;
}

.form-container{
   
    display: flex;
  
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  border: var(--primary-font-color) solid 7px;
    background-color: var(--fundal-formular);
}
.form-container h1{
    text-align: center;
    justify-self: center;
    vertical-align: middle;
    font-family:var(--decorativeFont);
    color: var(--primary-font-color);

    
}
.form-container form {
    
    align-self: center;
    /* border: white solid 2px; */
    
    display: flex;
    flex-flow: column wrap;
    align-self: center;
    margin-bottom: 1em;
    
    width: 100%;
    height: auto;
   
    text-align: center;
    background-color:var(--fundal-formular);
    padding-top: 2em;
}
input::-webkit-input-placeholder , textarea::-webkit-input-placeholder{
    /* color: #808080; */
    transition: all .5s;
}
input:focus::-webkit-input-placeholder, textarea:focus::-webkit-input-placeholder {
  
    transform: scale(0.00001)
}

::placeholder{
    color: var(--primary-font-color);
}

.form-container input:focus ~ label,
.form-container textarea:focus ~ label,
.form-container input:valid ~ label,
.form-container textarea:valid ~ label {
    
    font-size: 1rem;
    font-weight: bold;
}
label{
    display: none;
}

#gdpr-label{
    display: inline-block;
}

textarea, input, label{
    width: 100%;
    
    font-size: 1.5rem;
    align-self: center;
    text-align: center;
    border: var(--fundal-formular) solid 2px;
    font-family: var(--decorativeFont);

    color: var(--primary-font-color);
}

textarea{
    text-align: justify;
    height: auto;
    background-color:transparent;
    
}

fieldset {
    border: none;
    cursor: pointer;
    display: grid;
    grid-template-columns: 8fr 1fr;
}
fieldset label a{
    font-size: 1rem;
    color: var(--primary-font-color);
    cursor: pointer;
   transition: color .5s;
    line-height: normal;

}
input[type = checkbox]:hover{
    color: wheat;
    cursor: pointer;
}
button[type="submit"] {
    background: rgba(0, 128, 0, 0.7) !important;
}
button[type="submit"]:hover::after{
    background: green;
}
fieldset label a:hover{
    text-decoration:underline solid black ;
    color:black;
}

.form-container form input, .form-container button{

    background-color: transparent;
}

input[type = button]{
    color: var(--secondary-font-color);
}
`}</style>
</>
    )
}

export default ConsultantaForm