"use client";
import SecondaryPage from "@/components/SecondaryPage";
import { Alert, ListGroup } from "react-bootstrap";
import React from "react";

const DreptContraventionalComponent = () => {
  const servicii = [
    "Consultanta juridica in domeniul contraventional",
    "Redacatare si sustinere plangere contraventionala;",
    "Asistenta juridica si reprezentare in actiunile in justitie avand ca obiect contestarea procesului-verbal de contraventie pe fondul cauzei precum si in caile de atac;",
    "Asistenta juridica si reprezentare in litigiile care au ca obiect anularea procesului-verbal de contraventie ca urmare a intervenirii prescriptiei raspunderii contraventionale si a caducitatii acestuia;",
    "Orice alte activitati din domeniul contraventiilor.",
  ];
  return (
    <SecondaryPage
      parallaxURL={"/secondaryPage/contraventional.png"}
      h1={"Avocat Drept Contraventional Brasov"}
    >
      <Alert variant={"secondary"}>
        In domeniul dreptului contraventional Cabinet Avocat Brasov Doru Botea
        va pune la dispozitie urmatoarele servicii juridice:
        <ListGroup variant={"flush"}>
          {servicii.map((serviciu) => (
            <ListGroup.Item key={serviciu}>✅ {serviciu}</ListGroup.Item>
          ))}
        </ListGroup>
      </Alert>
    </SecondaryPage>
  );
};
export default DreptContraventionalComponent;
