import React from "react";
import { Accordion, Alert, Button, Card, ListGroup } from "react-bootstrap";
import SecondaryPage from "../components/SecondaryPage";



const page=()=>{

const argumenteContractMunca=[
'incheierea contractului individual de munca', 
'executarea contractului individual de munca',
'modificarea contractului individual de munca (delegare, detasare)',
'suspendarea contractului individual de munca (concediu de maternitate, concediu pentru incapacitate temporara de munca, concediu pentru cresterea copilului, concediu pentru ingrijirea copilului bolnav, concediu paternal, concediu pentru formare profesionala, greva, s.a.)', 
'incetarea contractului individual de munca',
'concedierea si contestatie la decizia de concediere',
'demisie'
]

const argumenteSedinteDeMediere=['Negocierea, stabilirea si acordarea drepturilor salariale, precum si a altor drepturi ce decurg din contractul individual de munca',
'negocierea, stabilirea, incidenta si acordarea drepturilor/indeplinirea obligatiilor decurgand din clauze specifice din contractul individual de munca: clauza cu privire la formarea profesionala, clauza de neconcurenta, clauza de mobilitate, clauza de confidentialitate',
'stabilirea si acordarea drepturilor privitoare la concedii (de odihna, de studiu, fara plata, medicale)',
'cercetarea, aplicarea si contestarea sanctiunilor disciplinare (avertismentul scris, retrogradarea din functie, reducerea salariului de baza si/sau a indemnizatiei de conducere, desfacerea disciplinara a contractului individual de munca)',
'atragerea raspunderii salariatului pentru restituirea unor sume incasate necuvenit, pentru repararea unor prejudicii aduse angajatorului, pentru incalcarea unor clauze specifice',
'negocierea, stabilirea si acordarea despagubirilor pentru daune materiale',
'negocierea, stabilirea si acordarea despagubirilor pentru daune morale']



    return (
      <>
        <SecondaryPage
          metaTitle={'Avocat Dreptul Muncii Brasov ⚖️ Doru Botea'}
          metaDescription={
            '⚖️ Cabinet Avocat Doru Botea ✅ cele mai bune solutii  in cazuri de litigii de munca ✅  Profesionalism si  ✅ Preturi decente Afla cum te putem ajuta'
          }
          h1={'Avocat Dreptul Muncii'}
        >
          <h2>Ce oferim si cum va putem ajuta?</h2>

          <Accordion defaultActiveKey="0" className="text-dark">
            <Accordion.Item eventKey="0">
              <Accordion.Header
                className="cursor-poiner hover-info"
                as={Alert}
                variant="info"
              >
                <div>
                  {' '}
                  <h6 className="text-secondary">
                    In ceea ce priveste contractul individual de munca va putem
                    ajuta cu:{' '}
                  </h6>
                  <h2 className="h6">
                    {' '}
                    ✅ Asistenta juridica si reprezentarea Dvs. in litigiile de
                    munca ivite intre angajator si salariat privitoare la{' '}
                    contractul individual de munca dar si consultanta juridica
                    cu privire la:
                  </h2>
                </div>
              </Accordion.Header>

              <Accordion.Body>
                <ListGroup>
                  {argumenteContractMunca.map((argument) => (
                    <ListGroup.Item key={argument}>
                      {'✅ '}
                      {argument}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header
                className="cursor-poiner hover-info"
                as={Alert}
                variant="info"
              >
                <div>
                  <h6 className="text-secondary">
                    Pe parcursul desfasurarii contractului individual de munca
                    sau dupa incheierea acestuia oferim
                  </h6>

                  <h2 className="h6">
                    ✅ Asistenta juridica si reprezentarea clientilor in
                    litigiile de munca privitoare la{' '}
                    <span className="text-success">
                      drepturile si obligatiile salariatilor sau angajatorilor
                    </span>
                  </h2>
                </div>
              </Accordion.Header>

              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <ListGroup>
                    {argumenteSedinteDeMediere.map((argument) => (
                      <ListGroup.Item key={argument}>
                        {'✅ '}
                        {argument}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Accordion.Item>
          </Accordion>
        </SecondaryPage>

        <style jsx global>{`
          .parallax {
            background-image: url('secondaryPage/muncii.jpg');
          }
        `}</style>
      </>
    );
}

export default page