import React from "react";
import { Alert, ListGroup } from "react-bootstrap";
import SecondaryPage from "../components/SecondaryPage";

const page=()=>{

    const servicii= [
        'Întocmim și redactăm rapoarte și opinii legale privind avizarea documentației juridice aferente creditelor ipotecare și imobiliare și asigurarea relației cu birourile notarilor publici pentru formalități aferente;',
        'Consultanță și asistență juridică privind procedurile și condițiile de autorizare în cazul instituțiilor de credit, precum și în cazul instituțiilor financiare nebancare (IFN);',
        'Consultanță și asistență juridică privind redactarea de contracte bancare și adaptarea contractelor bancare la modificările legislative în materie.'
    ]
       
    return(<>
        <SecondaryPage 
        metaTitle={'✅ Avocat Drept Bancar Brasov ⚖️ Doru Botea ✅'}
        metaDescription={'⚖️ Cabinet Avocat Doru Botea  cele mai bune solutii  in cazuri de drept bancar ✅Afla cum te putem ajuta pentru a transforma relatia cu banca in avantajul tau'}
        h1={'DREPT Bancar'}
        >
            <Alert variant='success'>
         <ListGroup>

         {servicii.map((serviciu, idx)=><ListGroup.Item key={idx}>{'✅ '}{serviciu}</ListGroup.Item>)}
             </ListGroup>   
            </Alert>
             

</SecondaryPage> 


<style jsx global>{`
.parallax{
background-image: url('secondaryPage/bancar.jpg');
}
    
`}</style>

</>)
}

export default page