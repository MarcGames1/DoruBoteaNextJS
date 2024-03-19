"use client";
import SecondaryPage from "@/components/SecondaryPage";
import { Alert, ListGroup } from "react-bootstrap";
import React from "react";

const DreptBancarComponent = () => {
  const servicii = [
    "Întocmim și redactăm rapoarte și opinii legale privind avizarea documentației juridice aferente creditelor ipotecare și imobiliare și asigurarea relației cu birourile notarilor publici pentru formalități aferente;",
    "Consultanță și asistență juridică privind procedurile și condițiile de autorizare în cazul instituțiilor de credit, precum și în cazul instituțiilor financiare nebancare (IFN);",
    "Consultanță și asistență juridică privind redactarea de contracte bancare și adaptarea contractelor bancare la modificările legislative în materie.",
  ];

  return (
    <>
      <SecondaryPage
        h1={"DREPT Bancar"}
        parallaxURL={"secondaryPage/bancar.jpg"}
      >
        <Alert variant="success">
          <ListGroup>
            {servicii.map((serviciu, idx) => (
              <ListGroup.Item key={idx}>
                {"✅ "}
                {serviciu}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Alert>
      </SecondaryPage>{" "}
    </>
  );
};
export default DreptBancarComponent;
