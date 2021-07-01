import React from "react";
import { Alert, ListGroup } from "react-bootstrap";
import SecondaryPage from "../components/SecondaryPage";

const page = () => {
    const temePrincipale = [
        'Incredintarea minorilor din casatorie',
        'Stabilirea pensiei de intretinere pentru minorii din casatorie',
        'Partajarea bunurilor comune din casatorie – partaj',
        'Modalitatea de desfacere a casatoriei',
        'Exercitarea autoritatii parintesti',
        'Stabilirea domiciliului minorilor',
        'Ce nume se va purta dupa desfacerea casatoriei',
        'Stabilirea pensiei de intretinere in favoarea minorului/minorilor'
    ]

    const activitati = [
        'Consultanta juridica pentru procese de divort',
        'Asistenta juridica a partilor pe durata proceselor de divort',
        'Reprezentare a cetatenilor romani din strainatate in procese de divort desfasurate in Romania. Trebuie mentionat ca in acest caz nu se poate realiza divortul la notar',
        'Redactare documente juridice necesare in procesele de divort',
        'Realizarea partajului o data cu procesul de divort'
    ]



    return (<>
        <SecondaryPage
            metaTitle={'✅ Avocat Divort Brasov ⚖️  Doru Botea ✅'}
            metaDescription={'⚖️ Cabinet Avocat Doru Botea ✅ cele mai bune solutii  pentru un proces de divort  ✅  Profesionalism si  ✅ Preturi decente Afla cum te putem ajuta'}
            h1={'Procesul de divort'}
        >
            <div className="text">

                <p>Procesul de divort implica de cele mai multe ori atat decizii greu de luat, precum si stari
                    emotionale
                    dificil de surmontat pentru ambele parti implicate.
                    Divortul reprezinta, in primul rand, o oficializare a unei rupturi definitive, acumulata in timp,
                    intre
                    cei
                    doi soti. Din punct de vedere legal, insa, divortul poate implica o serie de alte aspecte deosebit
                    de
                    importante si de sensibile, care nu se pot solutiona decat prin derularea unei consultante juridice
                    acordata
                    de avocat:</p>

                <ListGroup>
                    {temePrincipale.map((tema) => <ListGroup.Item key={tema}>{'📜 '}{tema}</ListGroup.Item>)}
                </ListGroup>
                <h2 className='h5 mt-3'>Cu ce te ajuta un avocat in procesul de divort</h2>
                <p>Asistenta unui avocat in procesul de divort este imperios necesara, chiar daca legea nu o impune.


                    Cunoasterea in detaliu a elementelor ce definesc un astfel de proces, a modului in care fiecare
                    parte
                    isi
                    poate sustine si apara punctual de vedere, efectuarea in cunostinta de cauza si in mod corect a
                    etapelor
                    si
                    procedurilor ce decurg firesc dintr-un astfel de proces, reprezinta impreuna elementele absolut
                    necesare
                    si
                    legale pentru obtinerea unei decizii de divort echitabila si in conformitate cu vointa ambelor parti
                    si
                    cu
                    situatia reala existenta.</p>
                <h2 className='h5 mt-3'>Avand o bogata experienta in Dreptul Familiei si in Dreptul Civil, Cabinetul de Avocatura Botea Doru
                    desfasoara in mod uzual activitati de:</h2>
<hr/>
                <ListGroup>
                    {activitati.map((activitate) => <ListGroup.Item key={activitate}>{'✅ '}{activitate}</ListGroup.Item>)}
                </ListGroup>
                <hr />
                
                <Alert variant='success'>
                    <Alert.Heading>Cabinetul de Avocat Doru Botea va asigura: </Alert.Heading><hr />
                    <ListGroup>
                        <ListGroup.Item>✅ Un proces de divort cu implicatii cat mai reduse emotional si financiar pe toata durata
                            procesului,
                            cat si ulterior, tinand cont de consecintele firesti ale acestui proces legal.</ListGroup.Item>
                        <ListGroup.Item>✅ Profesionalism si Preturi Decente.</ListGroup.Item>
                    </ListGroup>
                </Alert>




            </div>
        </SecondaryPage>


        <style jsx global>{`
.parallax{
background-image: url('/secondaryPage/familie.jpeg');
}

    
`}</style>

    </>)
}

export default page