import React from "react";
import { Accordion, Alert, Card, ListGroup } from "react-bootstrap";
import SecondaryPage from "../components/SecondaryPage";

const page=()=>{

    const drepturiReale=[
        'Revendicari ale dreptului de proprietate',
        'Legea 10 Exproprieri Uzucapiune Evacuari Executari silite Inchirieri Recuperari ale investitiilor imobiliare',
        'Executare de contracte de proiectare si de constructii Intabularea dreptului de proprietate',
        'Reprezentare la biroul de cartea funciara',
        'Asistenta la redactarea de contracte si antecontracte, precum si in problemele litigioase legate de acestea',
        'Ipoteci si sarcini asupra bunurilor, radierea ipotecilor',
        'Aplicarea Legii 112/1995. Dreptul de proprietate si dezmembramintele proprietatii'
    ]
    const mosteniri =[
        'Partaj succesoral',
        'Partaj judiciar',
        'Reductiuni de liberalitati excesive',
        'Deschidere de mostenire',
        'Raporturi de donatie',
        'Anulare certificat mostenitor',
        'Calcularea cotelor succesorale',
        'Vanzarea unei parti din mostenire',
        'Negocierea impartelii mostenirii',
        'Redactare contract de partaj voluntar Partaj judiciar',
        'Anularea certificatului de mostenitor',
        'Testament, litigii testamentare'
    ]
    const contracte =[
        'Vanzare-Cumparare',
        'Ipoteca',
        'Schimb',
        'Locatiune',
        'Mandat Imputerniciri',
        'Tranzactii',
        'Litigii contractuale',
        'Pretentii contractuale'
    ]
    const servicii=[
     'In fata instantelor judecatoresti: Judecatorii, Tribunale, Curtea de Apel, Inalta Curte de Casatie si Justitie',
    'In fata autoritatilor competente: Politie, Parchet, Garda Financiara,etc In fata Birourilor de Executori Judecatoresti',
    'In fata Administratiei Publice centrale sau locale: Primarii, Administatii Financiare,Prefecturi, etc',
    'In fata Birourilor Notariale',
    'In fata Biroului de Carte Funciara La Oficiul National al Registrului Comertului ',
    'In raporturile cu orice persoana fizica si juridica'

    ]

    return(<>
        <SecondaryPage 
        metaTitle={'Avocat Drept Civil Brasov ⚖️ Doru Botea'}
        metaDescription={'⚖️ Cabinet Avocat Doru Botea ✅ cele mai bune solutii  pentru probleme de ordin civil  ✅  Profesionalism si  ✅ Preturi decente Afla cum te putem ajuta'}
        h1={'Drept Civil'}
        >


<Accordion className='text-dark'> 
  <Card>
   
         
      <Accordion.Toggle className="cursor-poiner hover-info" as={Alert}  variant="info" eventKey="0">
     <h2 className="h6"> ✅Drepturi Reale:</h2>
      </Accordion.Toggle>
    
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <ListGroup>
          {drepturiReale.map((dreptReal)=><ListGroup.Item key={dreptReal}>{'✅ '}{dreptReal}</ListGroup.Item>)}
          </ListGroup>

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    
    
    <Accordion.Toggle className="cursor-poiner hover-info" as={Alert}  variant="info" eventKey="1">
  <h2 className='h6'>✅ Mosteniri:</h2>
      </Accordion.Toggle>
    
    <Accordion.Collapse eventKey="1">
    <Card.Body>
      <ListGroup>
          {mosteniri.map((mostenire)=><ListGroup.Item key={mostenire}>{'✅ '}{mostenire}</ListGroup.Item>)}
          </ListGroup>

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    
    
    <Accordion.Toggle className="cursor-poiner hover-info" as={Alert}  variant="info" eventKey="2">
  <h2 className='h6'>✅ Contracte: redactare antecontract, contract:</h2>
      </Accordion.Toggle>
    
    <Accordion.Collapse eventKey="2">
    <Card.Body>
      <ListGroup>
          {contracte.map((mostenire)=><ListGroup.Item key={mostenire}>{'✅ '}{mostenire}</ListGroup.Item>)}
          </ListGroup>

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    
    
    <Accordion.Toggle className="cursor-poiner hover-info" as={Alert}  variant="info" eventKey="3">
  <h2 className='h6'>✅ Consultanta, asistenta si reprezentare juridica</h2>
      </Accordion.Toggle>
    
    <Accordion.Collapse eventKey="3">
    <Card.Body>
      <ListGroup>
          {servicii.map((mostenire)=><ListGroup.Item key={mostenire}>{'✅ '}{mostenire}</ListGroup.Item>)}
          </ListGroup>

      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

<Alert variant={'success'}>
    <p>Obiectivul nostru este sa fim de folos clientilor, astfel incat acestia sa isi poata desfasura activitatea fara a se concentra asupra unor detalii juridice care nu tin de competenta lor.</p>
</Alert>





</SecondaryPage> 


<style jsx global>{`
.parallax{
background-image: url('/secondaryPage/civil.jpg');
}
    
`}</style>

</>)
}

export default page