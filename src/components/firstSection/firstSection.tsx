"use client";
import React from "react";

import { useState } from "react";
import Button from "../Button";
import dynamic from "next/dynamic";
import styles from "./firstSection.module.css";
let currentText = "";
let index = 0;
const textContent = [
  " drept penal",
  " dreptul familiei",
  " drept civil",
  " malpraxis medical",
  " dreptul muncii",
  " executari silite",
];

function FirsSection() {
  const [state, setState] = useState(textContent[0]);
  const img = "/assets/images/background1.webp";

  const changeText = () => {
    index < textContent.length - 1 ? index++ : (index = 0);
    currentText = textContent[index];
    setState(currentText);
  };
  setTimeout(changeText, 3000);

  return (
    <section className={`w-100 h-100 ${styles["first-section"]} `} id="top">
      <div className={styles.content}>
        <div>
          <h2 className="mb-4 hero-text">
            Avocat <span className="name">Doru Botea</span>
            <br className="my-4 d-block line" />
            <span className="my-4 d-block specializari ">
              Profesionalism si Incredere
            </span>
            <span className="d-block mt-4 dinamic">{state}</span>
          </h2>

          <Button class="main-cta" text="Vedeti Mai Multe" href={"#Servicii"} />
        </div>
      </div>
      <style global jsx>
        {`
          @media (min-width: 992px) {
            .main-cta {
              letter-spacing: 1.1rem;
            }
          }
        `}
      </style>
    </section>
  );
}
export default dynamic(() => Promise.resolve(FirsSection), { ssr: false });
