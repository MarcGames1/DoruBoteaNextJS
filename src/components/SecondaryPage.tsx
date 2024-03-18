import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactCenter from "./ConsultantaOnline/Form/contactCenter";
import PuncteForte from "@/components/contact/puncteForte";
const SecondaryPage = ({
  children,
  h1,
}: {
  children: React.ReactNode;
  h1: string;
}) => {
  return (
    <div className="bg-secondary-b">
      <section className="categorie mx-auto">
        <div className="parallax"></div>

        <div className="text">
          <h1>{h1}</h1>
          {children}
        </div>
      </section>
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} md={6} lg={6}>
            <ContactCenter />
          </Col>
          <Col xs={12} md={6} lg={6}>
            <PuncteForte />
          </Col>
        </Row>
      </Container>

      <style global jsx>{`
        .categorie .text {
          width: 80vw;
        }

        .text {
          display: block;

          margin: 5em auto;
          line-height: 2em;
        }

        .text h1 {
          text-transform: uppercase;
        }
        .text p {
          text-indent: 2em;
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

        /* Non-Retina */
        @media screen and (-webkit-max-device-pixel-ratio: 1) {
        }

        /* Retina */
        @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
          only screen and (-o-min-device-pixel-ratio: 3/2),
          only screen and (min--moz-device-pixel-ratio: 1.5),
          only screen and (min-device-pixel-ratio: 1.5) {
          .parallax {
            background-attachment: scroll;
          }
        }

        /* iPhone Portrait and landscape */
        @media only screen and (max-device-width: 480px) and (orientation: portrait),
          only screen and (max-device-width: 480px) and (orientation: landscape), {
          .parallax {
            background-attachment: scroll;
          }
        }
      `}</style>
    </div>
  );
};

export default SecondaryPage;
