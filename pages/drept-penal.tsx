
import React from "react";
import { Jumbotron, ListGroup, Alert } from "react-bootstrap";
import SecondaryPage from "../components/SecondaryPage";


const penal=()=>{

const listaServicii=[
    'Consultanta juridica in probleme de drept penal',
    'Redactare de plangeri penale',
    'Redactare cereri, motive de apel si recurs',
    'Cai extraordinare de atac',
    'Asistenta si reprezentare juridica in fata organelor de cercetare penala si instantelor judecatoresti in cauze penale ce au ca obiect infractiuni prevazute in Codul penal si in legi speciale '
]



    return(<>
       <SecondaryPage 
       metaTitle={'DREPT PENAL'}
       metaDescription={'Descriere'}
       h1={'DREPT PENAL'}
       >
      
<Jumbotron>
                <p>Cabinetul de avocat – Doru Botea va ofera o experienta considerabila in asistenta si reprezentarea
                persoanelor fizice, dar si a societatilor comerciale in cauze penale. Cabinetul nostru <b>va apara
                interesele</b> si va ajuta sa va exercitati <b>drepturile</b> atat in faza de urmarire penala, cat si in fata
                instantei de judecata. Asistenta de care puteti beneficia priveste si dosarele penale aflate in apel sau
                recurs ori in cai extraordinare de atac. <b className='text-success'>Garantam clientilor</b> servicii juridice profesioniste tratându-va
                cauzele cu maxima eficienta si diligenta. Avem capacitatea si resursele necesare pentru a ne ocupa de
                probleme penale in mod direct, mai ales de cazurile complexe, precum infractionalitatea organizata,
                economica, informatica, etc.</p>
</Jumbotron>
<p>

                Vă putem ajuta daca sunteti acuzat sau implicat in orice calitate intr-un caz de:
            </p>
            <ListGroup>
                <ListGroup.Item>Furt, tâlhărie, înșelăciune, delapidare sau gestiune frauduloasă;</ListGroup.Item>
                <ListGroup.Item>Fals în înscrisuri oficiale sau sub semnătură privată;</ListGroup.Item>
                <ListGroup.Item>Infracțiuni de corupție (luare/dare de mită, trafic de influență, primire de foloase necuvenite);
                </ListGroup.Item>
                <ListGroup.Item>Criminalitate informatică;</ListGroup.Item>
                <ListGroup.Item>Trafic/consum de droguri;</ListGroup.Item>
                <ListGroup.Item>Trafic de persoane sau proxenetism;</ListGroup.Item>
                <ListGroup.Item>Infracțiuni economice: evaziune fiscală, bancrută frauduloasă, spălare de bani;</ListGroup.Item>
                <ListGroup.Item>Omor, omor calificat sau deosebit de grav;</ListGroup.Item>
                <ListGroup.Item>Ucidere din culpă;</ListGroup.Item>
                <ListGroup.Item>Vătămare corporală (gravă, din culpă);</ListGroup.Item>
                <ListGroup.Item>Conducere sub influenţa băuturilor alcoolice sau drogurilor;</ListGroup.Item>
            </ListGroup>
               <Alert variant={'secondary'}>
                Simplul fapt ca sunteti invinuit sau inculpat intr-o cauza de natura penala nu este echivalent cu a fi
                gasit vinovat și condamnat de catre o instanta de judecata. Situatia dumneavoastra poate fi intotdeauna
                imbunatatita daca aveti alaturi un avocat de drept penal care sa actioneze operativ si care sa va ofere
                consultanta specializata. Invinuitul sau inculpatul are dreptul sa fie asistat de aparator in tot cursul
                urmaririi penale si al judecatii, iar organele judiciare sunt obligate sa-i aduca la cunostinta acest
                drept.
               </Alert>


<h2 className='h4'>O parte din serviciile pe care le oferim din sfera dreptului penal sunt:</h2>
            

              <ListGroup>
              {listaServicii.map((serviciu)=><ListGroup.Item key={serviciu}>{'✔️ '}{serviciu}</ListGroup.Item>)}

              </ListGroup>

              <Alert variant={'success'}>
              Odată ce ați apelat la serviciile noastre, noi începem de îndată să lucrăm pentru a preveni formularea de acuzaţii penale sau, în cazurile în care organele de urmărire penală au formulat deja acuzaţii, lucrăm pentru a obţine respingerea sau reducerea acestora.
<hr />

<h5>❗Pentru mai multe detalii despre conditiile colaborarii cu un avocat penalist, nu ezitati sa ne
                contactati. </h5>
</Alert>

           </SecondaryPage> 


        <style jsx global>{`
        .parallax{
    background-image: url('/secondaryPage/penal.png');
}
            
        `}</style>
       
    </>)
}

export default penal