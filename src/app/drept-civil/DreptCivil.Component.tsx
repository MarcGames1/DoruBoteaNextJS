"use client";
import { Accordion, Alert, Card, ListGroup } from "react-bootstrap";
import SecondaryPage from "@/components/SecondaryPage";
import React from "react";

const DreptCivilComponent = () => {
  const drepturiReale = [
    "Revendicari ale dreptului de proprietate",
    "Legea 10 Exproprieri Uzucapiune Evacuari Executari silite Inchirieri Recuperari ale investitiilor imobiliare",
    "Executare de contracte de proiectare si de constructii Intabularea dreptului de proprietate",
    "Reprezentare la biroul de cartea funciara",
    "Asistenta la redactarea de contracte si antecontracte, precum si in problemele litigioase legate de acestea",
    "Ipoteci si sarcini asupra bunurilor, radierea ipotecilor",
    "Aplicarea Legii 112/1995. Dreptul de proprietate si dezmembramintele proprietatii",
  ];
  const mosteniri = [
    "Partaj succesoral",
    "Partaj judiciar",
    "Reductiuni de liberalitati excesive",
    "Deschidere de mostenire",
    "Raporturi de donatie",
    "Anulare certificat mostenitor",
    "Calcularea cotelor succesorale",
    "Vanzarea unei parti din mostenire",
    "Negocierea impartelii mostenirii",
    "Redactare contract de partaj voluntar Partaj judiciar",
    "Anularea certificatului de mostenitor",
    "Testament, litigii testamentare",
  ];
  const contracte = [
    "Vanzare-Cumparare",
    "Ipoteca",
    "Schimb",
    "Locatiune",
    "Mandat Imputerniciri",
    "Tranzactii",
    "Litigii contractuale",
    "Pretentii contractuale",
  ];
  const servicii = [
    "In fata instantelor judecatoresti: Judecatorii, Tribunale, Curtea de Apel, Inalta Curte de Casatie si Justitie",
    "In fata autoritatilor competente: Politie, Parchet, Garda Financiara,etc In fata Birourilor de Executori Judecatoresti",
    "In fata Administratiei Publice centrale sau locale: Primarii, Administatii Financiare,Prefecturi, etc",
    "In fata Birourilor Notariale",
    "In fata Biroului de Carte Funciara La Oficiul National al Registrului Comertului ",
    "In raporturile cu orice persoana fizica si juridica",
  ];
  return (
    <SecondaryPage parallaxURL={"/secondaryPage/civil.jpg"} h1={"Drept Civil"}>
      <Accordion defaultActiveKey="0" className="text-dark">
        <Accordion.Item eventKey="0">
          <Accordion.Header
            className="cursor-poiner hover-info"
            as={Alert}
            variant="info"
          >
            <h2 className="h6"> ✅Drepturi Reale:</h2>
          </Accordion.Header>

          <Accordion.Body>
            <Card.Body>
              <ListGroup>
                {drepturiReale.map((dreptReal) => (
                  <ListGroup.Item key={dreptReal}>
                    {"✅ "}
                    {dreptReal}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header
            className="cursor-poiner hover-info"
            as={Alert}
            variant="info"
          >
            <h2 className="h6">✅ Mosteniri:</h2>
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              {mosteniri.map((mostenire) => (
                <ListGroup.Item key={mostenire}>
                  {"✅ "}
                  {mostenire}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header
            className="cursor-poiner hover-info"
            as={Alert}
            variant="info"
          >
            <h2 className="h6">
              ✅ Contracte: redactare antecontract, contract:
            </h2>
          </Accordion.Header>

          <Accordion.Body>
            <ListGroup>
              {contracte.map((mostenire) => (
                <ListGroup.Item key={mostenire}>
                  {"✅ "}
                  {mostenire}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header
            className="cursor-poiner hover-info"
            as={Alert}
            variant="info"
          >
            <h2 className="h6">
              ✅ Consultanta, asistenta si reprezentare juridica
            </h2>
          </Accordion.Header>

          <Accordion.Body>
            <ListGroup>
              {servicii.map((mostenire) => (
                <ListGroup.Item key={mostenire}>
                  {"✅ "}
                  {mostenire}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Alert variant={"success"}>
        <p>
          Obiectivul nostru este sa fim de folos clientilor, astfel incat
          acestia sa isi poata desfasura activitatea fara a se concentra asupra
          unor detalii juridice care nu tin de competenta lor.
        </p>
      </Alert>
    </SecondaryPage>
  );
};

export default DreptCivilComponent;
