import React from "react";
import { Accordion, Alert, Button, Card } from "react-bootstrap";
import SecondaryPage from "../components/SecondaryPage";

const page = () => {

    return (<>
        <SecondaryPage background-class='bg-light'
            metaTitle={'Avocat Malpraxis Medical Brasov ⚖️ Doru Botea'}
            metaDescription={'⚖️ Cabinet Avocat Doru Botea ✅ cele mai bune solutii  in cazuri de malpraxis medical  ✅  Profesionalism si  ✅ Preturi decente Afla cum te putem ajuta'}
            h1={'Avocat Malpraxis Medical'}
        >
            <h2>Ce poate face pacientul daca banuieste ca este victima unui caz de malpraxis? </h2>
            <p> Inainte de toate, trebuie avut in vedere ca personalul medical are o obligatie de diligenta: trebuie sa depuna toate diligentele necesare si posibile pentru a trata pacientul.</p>
            <Alert variant={'info'}>
                <cite>
                    “Prin urmare, putem vorbi despre malpraxis numai atunci cand personalul medical nu a depus aceste diligente, fiind neglijent, slab pregatit etc. Deci, cand trebuia sa procedeze intr-o anumita maniera in conditiile date si nu a facut-o”.
                </cite>
            </Alert>
            <p>Asadar, cand intalnim un rezultat nefavorabil in urma unui tratament, pentru a atrage raspunderea, trebuie ca acest rezultat sa fi fost cauza unei greseli pe care personalul medical era obligat sa o evite. </p>
            <Alert variant={'info'}>
                <cite>
                    Atragerea raspunderii personalului medical implicat si/sau a unitatii spitalicesti se face in doi pasi: stabilirea existentei unui caz de malpraxis si dovedirea prejudiciului suferit”.
                </cite>
            </Alert>
            <p>Mai exact, adauga specialistul, pentru primul pas (stabilirea existentei unui caz de malpraxis), legea sanatatii ne ofera doua variante alternative: fie sesizarea Comisiei de monitorizare si competenta profesionala pentru cazurile de malpraxis, fie sesizarea organelor de urmarire penala. </p>

            <Accordion>
                <Alert variant={'success'}>

                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Alert.Link} variant="link" eventKey="0">
                                Citeste despre Procedura in fata Comisiei de monitorizare si competenta profesionala pentru cazurile de malpraxis – procedura facultativa
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p>Comisia are competenta de a stabili daca in cadrul actului medical reclamat exista un caz de malpraxis, pe baza unui raport de expertiza intocmit de catre expertul/expertii desemnati de Comisie in acest sens.</p>
                                <p> Pacientul care se considera victima unui caz de malpraxis sau, dupa caz, succesorii persoanei decedate in urma unui caz de malpraxis pot sesiza Comisia, care stabileste daca exista un caz de malpraxis, in termen de 3 luni de la sesizare.</p>
                                <p>In acest sens, Comisia desemneaza un expert/grup de experti care intocmeste un raport asupra cazului, pe baza caruia Comisia va lua decizia. Decizia Comisiei poate fi atacata in termen de 15 zile de la comunicare, de orice persoana implicata (pacient, medic, asigurator etc.) la Judecatoria in raza careia a avut loc actul de malpraxis reclamat. Daca se stabileste ca a existat un caz de malpraxis, persoana vatamata poate formula si plangere penala in termen de 3 luni de zile, plangere care va fi depusa la organul competent. Procedura in fata instantei Persoana interesata poate sesiza direct instanta de judecata (civila), nefiind obligata ca in prealabil sa parcurga procedura in fata Comisiei. In acest caz, reclamantul va trebui sa dovedeasca existenta unui caz de malpraxis, nucleul probatoriului in acest sens fiind, bineinteles, raportul de expertiza medico-legala. Prejudiciul victimei pote consta si in unele infirmitati sau handicapuri care se pot intinde chiar toata viata </p>
                                <Alert variant={'info'}>
                                    <cite>
                                        “Oricat de clara ar parea greseala din documentele medicale, fara raport de expertiza este aproape imposibila dovedirea malpraxisului reclamat”.
                                    </cite>
                                </Alert>
                                <p> <span className='h5'>Cel de-al doilea pas </span>ar fi, conform avocatului, dovedirea prejudiciului in vederea obtinerii de despagubiri. In aceste situatii, numai instanta de judecata poate obliga persoanele responsabile la plata despagubirilor pentru prejudiciul cauzat prin actul de malpraxis. Asadar, reclamantul trebuie sa arate instantei ca actul de malpraxis i-a cauzat un prejudiciu moral (dureri fizice, suferinte psihice, restrangerea posibilitatii victimei de a se bucura de viata) si/sau material (sumele de bani platite pentru o interventie chirurgicala care a esuat)si sa arate intinderea acestui prejudiciu. In timp ce prejudiciul material este simplu de dovedit prin acte, prejudiciul moral este lasat la latitudinea instantei.</p>
                                <Alert variant={'info'}>
                                    <cite>
                                    “Asupra daunelor morale, instanta este chemata sa statueze in echitate pentru a acorda despagubiri apte sa constituie o satisfactie echitabila si proportionala cu suferinta victimei, in functie de imprejurarile concrete ale cauzei, neavand la dispozitie criterii matematice sau economice”. 
                                    </cite>
                                </Alert>



                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Alert>
            </Accordion>


        </SecondaryPage>


        <style jsx global>{`
.parallax{
background-image: url('/secondaryPage/malpraxis.jpg');
}
    
`}</style>

    </>)
}

export default page