"use client";
import { Alert, ListGroup } from "react-bootstrap";
import SecondaryPage from "@/components/SecondaryPage";
import React from "react";

const DreptAdministrativComponent = () => {
  const servicii = [
    "Anularea unor acte administrative unilaterale. recunoașterea dreptului pretins și repararea pagubelor cauzate.",
    "Obligarea autorității să emită un act sau un al înscris, respectiv să efectueze o anumită operațiune administrativă, sub sancțiunea penalităților de întârziere sau a amenzii.",
    "încheierea, modificarea, interpretarea, executarea, anularea, rezilierea unui contract administrativ.",
    "executarea unui act administrativ emis.",
    "excepția de nelegalitate a unui act administrativ.",
    "repararea pagubei produsă printr-o ordonanță declarată neconstituțională.",
  ];

  return (
    <SecondaryPage
      parallaxURL={"/secondaryPage/administrativ.jpg"}
      h1={"DREPT administrativ"}
    >
      <Alert variant="secondary">
        Această materie reglementează dreptul persoanei care se consideră
        vătămată într-un drept al său ori într-un interes legitim, de către o
        autoritate publică, printr- un act administrativ sau prin nesoluționarea
        în termenul legal a unei cereri, de a se adresa instanței de contencios
        administrativ cu solicitarea de a se anula actul, de a i se recunoaște
        dreptul pretins și repararea pagubei ce i-a fost provocată. De asemenea,
        autoritatea publică emitentă a unui act administrativ unilateral nelegal
        poate solicita instanței de contencios anularea acestuia, sau poate
        introduce acțiuni în această instanță, precum și orice ale instituții de
        drept public. În acest sens, societatea noastră desfășoară activități
        precum redactarea asistarea sau reprezentarea în litigii privind:
        <ListGroup>
          {servicii.map((serviciu, idx) => (
            <ListGroup.Item key={idx}>
              {"✅ "}
              {serviciu}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Alert>
    </SecondaryPage>
  );
};
export default DreptAdministrativComponent;
