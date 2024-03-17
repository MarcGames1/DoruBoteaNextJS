import React from "react";
import { NextSeo } from "next-seo";
import ConsultantaForm from "../components/ConsultantaOnlinePage/form";
import Text from "../components/ConsultantaOnlinePage/text";
import GoogleMaps from "@/components/GoogleMaps/GoogleMaps";

const page = () => {
  const title =
    "Avocat Online Consultanta Juridica Online ⚖️ Avocat Doru Botea";
  const description =
    "Beneficiaza de Consultanta juridica online prin Whatsapp cu onorarii decente. ✅ Afla care este rezolvarea problemelor tale juridice ✅ Programeaza-te acum";

  return (
    <>
      <NextSeo title={title} description={description} />

      <div className=" text-white bg-black container-fluid">
        <div className="parallax"></div>
        <br />
        <div className="row">
          <div className=" offset-1 offset-md-0 offset-lg-0 col order-first col-md-6 order-lg-last order-md-last col-lg-6 col-10 ">
            <Text />
            <br />
          </div>
          <div className="offset-1 offset-md-0 offset-lg-0 col order-last col-md-6 order-lg-first order-md-first col-lg-6 col-10 ">
            <GoogleMaps />
          </div>
        </div>
      </div>
      <style global jsx>{`
        .text h1 {
          text-transform: uppercase;
        }
        .text p {
          text-indent: 2em;
          font-size: 1.3em;
        }
        .text ul {
          margin: 0rem;
        }

        .parallax {
          background-size: contain;
          background-repeat: no-repeat;
          background-blend-mode: overlay;
          background-position: center;
          background-attachment: fixed;
          height: 100%;

          width: 100%;
          height: 50vh;
        }

        section h1 {
          text-align: center;
          margin: 1em;
        }

        li {
          font-size: 1rem;
          padding: 0.5rem 0;
          list-style-position: inside;
        }

        .contact2 {
          position: relative;
          display: grid;

          grid-template-columns: 1fr 1fr;
          gap: 10px;
          align-items: center;
          justify-content: space-around;
        }
        .parallax {
          background-image: url(assets/pages/consultantaonline/consultantaonline.jpg);
        }

        .text h3,
        .text h4,
        .text li::marker,
        .text p:first-of-type,
        .text h2 {
          color: var(--secondary-font-color);
        }

        .text li::marker,
        .text li {
          font-weight: bold;
        }

        .text h2,
        .text h3,
        .text h4,
        .text li {
          font-size: 1em;
          margin: 1em 0.5em;
          text-align: center;
        }

        .text p {
          margin: 1em 0.5em;
        }

        .text li {
          text-align: justify;
        }
      `}</style>
    </>
  );
};
export default page;
