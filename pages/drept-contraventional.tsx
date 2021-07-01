import React from "react";
import { Alert, ListGroup  } from "react-bootstrap";
import SecondaryPage from "../components/SecondaryPage";

const page=()=>{

    const servicii=[
'Consultanta juridica in domeniul contraventional',
'Redacatare si sustinere plangere contraventionala;',
'Asistenta juridica si reprezentare in actiunile in justitie avand ca obiect contestarea procesului-verbal de contraventie pe fondul cauzei precum si in caile de atac;',
'Asistenta juridica si reprezentare in litigiile care au ca obiect anularea procesului-verbal de contraventie ca urmare a intervenirii prescriptiei raspunderii contraventionale si a caducitatii acestuia;',
'Orice alte activitati din domeniul contraventiilor.'    


]


    return(<>
        <SecondaryPage 
        metaTitle={'✅ Avocat Drept Contraventional Brasov  ⚖️ Doru Botea ✅'}
        metaDescription={'⚖️ Cabinet Avocat Doru Botea  cele mai bune solutii  in cazuri contraventionale ✅Afla cum te putem ajuta in a obtine o reducere a amenzii sau chiar anularea ei'}
        h1={'DREPT CONTRAVENTIONAL'}
        >


        <Alert variant={'secondary'}>
        In domeniul dreptului contraventional Cabinet Avocat Brasov Doru Botea va pune la dispozitie urmatoarele servicii juridice:

        <ListGroup variant={'flush'}>
        {servicii.map((serviciu)=><ListGroup.Item key={serviciu}>✅ {serviciu}</ListGroup.Item>)}
        </ListGroup>
        </Alert>
</SecondaryPage> 


<style jsx global>{`
.parallax{
background-image: url('/secondaryPage/contraventional.png');
}
    
`}</style>

</>)
}

export default page