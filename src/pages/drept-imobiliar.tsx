import React from "react";
import { Accordion, Alert, Card, ListGroup } from "react-bootstrap";

import SecondaryPage from "../components/SecondaryPage";

const page=()=>{
    return(<>
        <SecondaryPage 
        metaTitle={'Avocat Drept Imobiliar Brasov  ⚖️ Doru Botea'}
        metaDescription={'⚖️ Cabinet Avocat Doru Botea  cele mai bune solutii  in cazuri de Drept Imobiliar ✅Tranzactii imobiliare, ✅Dreptul constructiilor  la  ✅Preturi decente'}
        h1={'Drept Imobiliar'}
        >

        <Alert variant={'secondary'}>
            <ListGroup>
                <ListGroup.Item>Cabinet Avocat Doru Botea din Brasov profeseaza si in Drept Imobiliar, tranzactii imobiliare, dreptul constructiilor si asigura consiliere societatilor comerciale si marilor companii de investitii, gestionand tranzactii si litigii complexe de natura imobiliara. Avem ca obiectiv sa ajutam clientii sa-si exercite optiunile legale, sa atinga obiective realiste si rezonabile prin acordarea de indrumari de natura juridica, necesare in luarea unor decizii in contextual afacerilor imobiliare.</ListGroup.Item>
                <ListGroup.Item>De asemenea, Cabinet avocat Doru Botea ofera servicii de asistenta, consultanta si reprezentare juridica companiilor nationale si internationale, cat si persoanelor fizice in vederea efectuarii tranzactiilor imobiliare.</ListGroup.Item>
                <ListGroup.Item>Avocatul, are un rol important in a va asista in fata notarului public in vederea redactarii contractului de vanzare-cumparare sau inchiriere, documente ce trebuiesc intocmite astfel incat sa aibe valabilitate juridica si sa mentioneze clar legea aplicabila continutului oricarui contract.</ListGroup.Item>
            </ListGroup>
        </Alert>


        <Accordion>
                <Alert variant={'secondary'}>

                    <Accordion.Item eventKey="0">

                            <Accordion.Header as={Alert.Link} variant="link" eventKey="0">
                                Citeste despre Actiunea in revendicare imbiliara
                            </Accordion.Header>
                       
                        <Accordion.Body >
                           <>
                                <p>Este o actiune reala, petitorie, un mijloc direct de aparare a dreptului de proprietate pus la indemana proprietarului pentru recuperarea bunului sau imobil de la posesor sau de la alta persoana care il detine fara drept. Calitatea procesuala activa (reclamant) o are proprietarul unic si exclusive al unui imobil, dar si oricare dintre coproprietari care poate introduce singur actiunea in revendicare , conform art. 643 alin.1) C civil. Calitatea procesuala pasiva (parat) o are orice persoana care stapaneste bunul fara drept, respectiv posesor, detentor precar, tolerat sau orice ocupant al bunului; de mentionat ca actiunea in revendicare nu poate fi introdusa in contra unui alt coproprietar. Obiectul revendicarii. Se vor solicita de catre reclamant elemente de identificare a imobilului revendicat cum ar fi: localitatea si judetul, strada si numarul, iar, in lipsa, vecinatatile, etajul si apartamentul, numarul de carte funciara si numarul cadastral, atunci cand imobilul este inscris in cartea funciara. Se va indica si valoarea impozabila a bunului. Aceasta valoare este necesara stabilirii competentei instantei, dar si pentru stabilirea taxei judiciare de timbru. In cazul actiunii in revendicare se pot solicita despagubiri pentru lipsa de folosinta a imobilului sau pentru fructele produse in perioada cat reclamantul a fost deposedat de bun, caz in care se va indica, cel putin provizoriu valoarea estimativa a despagubitilor, care ulterior vor fi stabilite in cursul procesului printr-o expertiza de specialitate.</p>
                                <p> Se va mentiona in actiune calitatea reclamantului de proprietar sau coproprietar al imobilului revendicat si titlul pe care se intemeiaza aceasta calitate. Reclamantul poate invoca drept titlu un contract de vanzare-cumparare, un contract de donatie, o hotarare judecatoreasca de constatare a dobandirii dreptului de proprietate prin uzucapiune, un act de tranzatie, etc. De asemenea mai trebuie mentionat faptul ca paratul ocupa imobilul revendicat ,iar daca imobilul este inscris in cartea funciara, faptul ca reclamantul figureza ca titular al dreptului de proprietate. Dovada proprietatii se realizeaza in cazul acestor imobile prin extrasul de carte funciara. Daca imobilul nu este inscris in cartea funciara, faptul ca paratul nu are un titlu de proprietate asupra bunului revendicat sau dupa caz, ca titlul detinut de acesta nu este preferabil celui al reclamantului. Daca numai reclamantul are titlu, se va mentiona ca acesta indeplineste conditiile necesare pentru admiterea actiunii in revendicare, respective titlul emana de la un tert, nu de la reclamantul insusi si data titlului este anterioara posesiei paratului . Daca ambele parti au titluri de proprietate, argumentatia va fi diferita, dupa cum titlurile provin de la acelasi autor sau de la autori diferiti.</p>
                                <ol>
                                    <li>Daca titlurile provin de la acelasi autor , cand partile au cumparat acelasi bun de la acelasi vanzator , se va arata daca au fost sau nu indeplinite formalitatile de publicitate imobiliara , iar daca nu au fost indeplinite se va invoca faptul ca titlul reclamantului are o data mai veche, ar daca ambele sunt inscrise se va invoca anterioritatea inscrierii titlului reclamantului.</li>
                                    <li>Daca titlurile provin de la autori diferiti se va argument de ce dreptul autorului reclamantului este preferabil in raport cu dreptul autorului paratului, de exemplu se va arata ca autorul reclamantului a fost adevaratul proprietar, spre deosebire de autorul paratului, care nu a avut aceasta calitate.</li>
                                </ol>
                                <p>In cazul in care nici una dintre parti nu are titlu si nici nu poate invoca dobndirea dreptului de proprietate prin modurile originare de dobandire a proprietatii , se va mentiona acest fapt si se va argument de catre reclamant ca posesia exercitata de el asupra imobilului revendicat este mai bine caracterizata decat cea a paratului, putandu-se invoca in acest sens o posesie mai indelungata, neviciata, exercitata cu buna credinta.</p>
                           </>
                               
                        </Accordion.Body>
                    </Accordion.Item>

                </Alert>
            </Accordion>

</SecondaryPage> 


<style jsx global>{`
.parallax{
background-image: url('/secondaryPage/imobiliar.jpg');
}
    
`}</style>

</>)
}

export default page