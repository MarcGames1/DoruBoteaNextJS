import React from 'react'
import Form from './Form/form'
import GoogleMaps from '../GoogleMaps/GoogleMaps'

const ConsultantaOnline = ()=>{
    return(
        <>
  <style jsx>{`    


#consultanta-online{
    max-width: 90vw;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-content: space-around;
   
}

#consultanta-online .background{
    height: auto;
}
#consultanta-online .form-container, #consultanta-online .description{
    align-self: center;
    justify-self: center;
    
    padding-top: 2em;
}
#consultanta-online .form-container{
   grid-column: 1 / 2;
   grid-row: 1 / 2;
 
}

.form-container{
   
    display: flex;
  
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  
    background-color: wheat;
}
.form-container h1{
    text-align: center;
    justify-self: center;
    vertical-align: middle;
    font-family:var(--decorativeFont);
    color: var(--primary-color);
    
}
.form-container form {
    
    align-self: center;
    border: white solid 2px;
    
    display: flex;
    flex-flow: column wrap;
    align-self: center;
    margin-bottom: 1em;
    
    width: 100%;
    height: auto;
   
    text-align: center;
    background-color:wheat;
    padding-top: 2em;
}
input::-webkit-input-placeholder , textarea::-webkit-input-placeholder{
    color: #808080;
    transition: all .5s;
}
input:focus::-webkit-input-placeholder, textarea:focus::-webkit-input-placeholder {
  
    transform: scale(0.00001)
}

form input, form textarea{
    border-bottom: var(--secondary-font-color) 2px solid;
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
    border: var(--inv) solid 2px;
    font-family: var(--decorativeFont);
}
textarea{
    text-align: justify;
    height: auto;
    background-color:transparent;
    
}

fieldset {
    display: grid;
    grid-template-columns: 8fr 1fr;
}
fieldset label a{
    font-size: 1rem;
    color: black;
   transition: color .5s;
    

}

fieldset label a:hover{
    text-decoration:underline solid var(--secondary-font-color) ;
    color:blue;
}

.form-container form input, .form-container button{

    background-color: transparent;
}
`}</style>
        <section id="consultanta-online">


<main className="description content">
    <main>
        <h2 className="section-head">AVOCAT DORU BOTEA</h2>
        <h3 className="section-head">CONSULTANTA JURIDICA ONLINE!</h3>
        <h4 className="section-head">APROAPE DE DUMNEAVOASTRA ORIUNDE ATI FI!</h4>
    </main>

    <main className="paragraphs">

        <p>Cabinet Avocat Doru Botea vine în întâmpinarea nevoilor clienţilor, prin asigurarea de servicii de
            consultanţă juridică online.</p>

        <p> Acest tip de servicii de consultanţă asigură o rezolvare facilă şi rapidă pentru anumite probleme
            juridice
            şi oferă o serie de avantaje cum ar fi evitarea deplasării cu rezultatul firesc al economiei de
            timp,
            costuri mai scăzute şi nu în ultimul rând, având în vedere contextul social, păstrarea unei
            distanţări
            sociale.</p>

        <p> Societatea în care trăim se află într-o continuă evoluţie, iar în prezent aşa numitul proces de
            digitalizare, cuprinde tot mai multe sectoare ale vieţii economico sociale şi asigură o paletă din
            ce în ce
            mai largă de servicii.</p>

    </main>
</main>

<Form/>
{/* <GoogleMaps /> */}
</section>
        </>
    )
}

export default ConsultantaOnline