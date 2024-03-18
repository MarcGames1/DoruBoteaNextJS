"use client";
import React from "react";
import Clock from "@/components/svgComponents/clock";
import Phone from "@/components/svgComponents/phone";
import Mail from "@/components/svgComponents/mail";
import GoogleMaps from "@/components/GoogleMaps/GoogleMaps";
import { FaWhatsapp } from "react-icons/fa";

const ContactCenter = () => {
  return (
    <div className={"text-white"}>
      <h5 className="text-center">ORAR</h5>

      <h5 className="text-center" id="ceas">
        <Clock /> 09:00 - 17:00
      </h5>
      <a className={"link-light text-decoration-none"} href={"tel:0744312032"}>
        <h5 className="text-center" id="telefon">
          <Phone /> 0744312032
        </h5>
      </a>
      <a
        className={"link-light text-decoration-none"}
        href={"mailto:avocat.dorubotea@gmail.com"}
      >
        <h5 className="text-center" id="email">
          <Mail /> avocat.dorubotea@gmail.com{" "}
        </h5>
      </a>
      <a
        title={"Trimite un mesaj pe whatsapp"}
        className={"link-light text-decoration-none"}
        href={"mailto:avocat.dorubotea@gmail.com"}
      >
        <h5 className="text-center" id="email">
          <FaWhatsapp size={"2em"} color={"#ab8356"} /> 0744312032
        </h5>
      </a>
      <GoogleMaps />
    </div>
  );
};

export default ContactCenter;
