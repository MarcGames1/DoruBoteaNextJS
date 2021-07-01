import React from "react";
import { Alert, ListGroup, ListGroupItem, Accordion, Card } from "react-bootstrap";


import SecondaryPage from "../components/SecondaryPage";

const page = () => {

    const servicii = [
        'Obtinerea legalizarilor hotararilor judecatoresti care urmeaza a fi puse in executare silita',
        'Obtinerea titlurilor executorii pentru recuperarea creantelor',
        'Consultanta si asistenta juridica in vederea identificarii celei mai avantajoase proceduri de executare silita',
        'Negocieri cu debitorii/creditorii',
        'Redactare acorduri de plata, tramzactii etc',
        'Asistenta juridica si reprezentare in fata executorului judecatoresc in procedura executarii silite',
        'Urmarirea actelor de executare pana la finalizarea executarii silite',
        'Asistenta si reprezentare juridica in procedura contestatiei la executare precum si in cadrul actiunilor avand ca obiect suspendarea executarii',
        'Constatarea prescrierii/ perimarii',
        'Intoarcerea executarii silite',
        'constatarea nulitatii clauzei de fidejusiune',
        'Asistenta juridica si reprezentare in procedura evacuarii, licitatiei, sechestre etc.',
        'Consultanta si asistenta juridica in procedura executarii silita a obligatiilor de a face si a nu face, a hotararilor judecatoresti referitoare la minori precum stabilirea locuintei minorilor, darea in plasament, exercitarea dreptului de a avea legaturi personale cu minorul, precum si orice alte masuri prevazute de lege',
        'Orice alte servicii specifice'

    ]

    return (<>
        <SecondaryPage
            metaTitle={'✅Avocat Executari Silite Brasov ⚖️ Doru Botea✅'}
            metaDescription={'⚖️ Cabinet Avocat Doru Botea ✅ cele mai bune solutii  in cazuri de executare silita  ✅  Profesionalism si  ✅ Preturi decente Afla cum te putem ajuta'}
            h1={'Executari Silite'}
        >

            <Accordion>
                <Alert variant={'success'}>

                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Alert.Link} variant="link" eventKey="0">
                                Notiuni Generale Despre Executarea Silita
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>


                                <p>Executarea silita reprezinta operatiunea juridica de recuperare a creantelor certe lichide si exigibile, constatate printr-un inscris avand valoare de titlu executoriu, in ipoteza in care debitorul nu-si executa de bunavoie obligatia rezultata din acesta, declansata doar prin manifestarea de vointa a creditorului obligatiei prevazute in titlul executoriu, care poate opta pentru mai multe forme de executare, derulate simultan sau succesiv, pana la recuperarea integrala a dreptului recunoscut, achitarea dobanzilor si penalitatilor, precum si a cheltuielilor de executare pe care creditorul este obligat sa le avanseze.</p>
                                <p>Odata pornita executarea silita, aceasta trebuie incuviintata de catre instanta de executare la solicitarea executorului judecatoresc, instanta solutionand cererea in cadrul unei proceduri necontencioase, in camera de consiliu si fara citarea partilor, modalitatea prin care debitorul poate desfiinta executarea silita fiind contestatia la executare, care trebuie formulata intr-un anumit termen calculat de la data la care debitorul primeste actele de la executorul judecatoresc, judecarea cauzei fiind facuta de urgenta si cu precadere.</p>
                                <p>Odata cu introducerea contestatiei la executare, dar si printr-o actiune separata, pentru protejarea intereselor debitorului si pentru a se limita, pe cat posibil, prejudiciile aduse acestuia, debitorul poate formula si o cerere de suspendare a executarii silite si, suplimentar, de suspendare provizorie, pentru motive temeinice si cu achitarea unei cautiuni cu rol de garantie pentru creditor in ceea ce priveste abuzurile din partea debitorilor rau-platnici, dar si pentru a acoperi prejudiciile suferite de catre creditor pentru intarzierea procedurii de executare.</p>
                                <p>O problema aparte a practicii noastre o reprezinta situatia contractelor de credit bancar, in cazul carora, debitorii sunt executati de catre banca sau de catre firme de recuperare, iar executarea silita este declansata la solicitarea acestora, fie dupa implinirea termenului in care creditorul avea dreptul de a cere executarea, fie inainte de declararea scadentei anticipate a creditului, fie in lipsa unui titlu executoriu.</p>



                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Alert>
            </Accordion>


            <Alert variant={'secondary'}>
                Cabinet Avocat Brasov Doru Botea ofera servicii de consultanta, asistenta juridica si reprezentare atat pentru creditori in vederea recuperarii creantelor de la persoane fizice sau juridice, cat si pentru debitori, persoane fizice sau juridice, impotriva carora s-a declansat executarea silita, urmarind respectarea tutor drepturilor si garantiilor stipulate de codul de procedura civila in favoarea acestora, prin identificarea strategiei de urmat si obtinerea rezultatelor favorabile intr-un timp util.
                <Alert.Heading>
                    Serviciile juridice pe care le punem la dispozitia dumneavoastra sunt multiple si constau in:
                </Alert.Heading>
                <hr />
                <ListGroup variant={'flush'}>
                    {servicii.map((serviciu) => <ListGroupItem key={serviciu}>✅ {serviciu}</ListGroupItem>)}
                </ListGroup>
            </Alert>

            <Alert variant={'secondary'}>
                Indiferent daca aveti calitatea de debitor sau creditor in etapa de executare silita, este important sa cunoasteti intinderea drepturilor si a obligatiilor pe care le aveti, modalitatile cele mai eficiente de abordare a spetei, etapele care urmeaza a fi parcurse in solutionarea demersului dumneavoastra si nu in ultimul rand, modul in care va puteti recupera cheltuielile ocazionate de astfel de litigii, sprijinul unui avocat specializat in procedura executarii silite fiind indispensabil derularii unei proceduri executionale echitabile.
            </Alert>
            <Alert variant={'secondary'}>
                O sanctiune procesuala care determina anularea actelor de executare silita efectuate in cadrul unui dosar de executare silita, ca o consecinta a lipsei de staruinta a creditorului o reprezinta si perimarea executarii silite, cabinetul nostru reprezentand cu succes si obtinand hotarari judecatoresti de anulare a executarii ca urmare a perimarii ca aparare de fond, valorificata in cadrul contestatiei la executare, cat si pe calea dreptului comun, prin actiunea in constatarea perimarii executarii.
            </Alert>

            <Alert variant={'success'}>
                <Alert.Heading>
                    O parte din relizarile noastre:
                    <hr />
                </Alert.Heading>
                <p>Cabinetul nostru a obtinut numeroase hotarari prin care instanta a dispus anularea executarii silite pornite de firme de recuperare precum Kruk, Secapital, EOS KSI etc.care persevereaza in declansarea executarii silite pentru creante prescrise sau in baza unor contracte de cesiune, incheiate cu banca de la care debitorul a contractat creditul si neaduse la cunostinta debitorului, contract care nu reprezinta titlu executoriu si, prin urmare, nu se bucura de beneficiile recunoscute de lege institutiilor bancare.</p>
                <p>Inceputul anului 2017 a adus o serie de modificari legislative cu privire la firmele de recuperare creante care nu vor mai putea desfasura activitatea de recuperare daca nu vor fi inregistrate la Autoritatea Nationala pentru Protectia Consumatorului, fiind obligate, in acelasi timp, sa aiba sediul social, o sucursala sau un reprezentant in Romania, iar persoanele din conducerea si administrarea societatii sa se bucure de o buna reputatie.</p>


            </Alert>


        </SecondaryPage>


        <style jsx global>{`
.parallax{
background-image: url('/secondaryPage/Executari.jpg');
}
    
`}</style>

    </>)
}

export default page