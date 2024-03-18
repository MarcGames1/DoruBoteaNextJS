import React from "react";
import { Alert } from "react-bootstrap";
import Checkmark from "../svgComponents/checkmark";
import Clock from "../svgComponents/clock";
import Mail from "../svgComponents/mail";
import Phone from "../svgComponents/phone";
const PuncteForte = () => {
  const arr = [
    "PROFESIONALISM",
    "EXPERIENTA",
    "SERIOZITATE",
    "PERSEVERENTA",
    "CORECTITUDINE",
    "CONFIDENTIALITATE",
  ];
  let arrComponents = arr.map((item) => {
    return (
      <div className={"p-2"}>
        <Alert variant="primary" className="text-dark">
          <Checkmark color="green" />
          <span> </span>
          {item}
        </Alert>
      </div>
    );
  });

  return (
    <>
      <section id="contact-main">{arrComponents}</section>
    </>
  );
};

export default PuncteForte;
