import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactCenter from "./ConsultantaOnline/Form/contactCenter";
import PuncteForte from "@/components/contact/puncteForte";
import styles from "./SecondaryPage.module.css";
const SecondaryPage = ({
  children,
  h1,
  parallaxURL,
}: {
  children: React.ReactNode;
  h1: string;
  parallaxURL: string;
}) => {
  return (
    <div className="bg-secondary-b">
      <section className={`${styles.categorie} mx-auto`}>
        <div
          className={styles.parallax}
          style={{ backgroundImage: `url(${parallaxURL})` }}
        ></div>

        <div className={styles.text}>
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
    </div>
  );
};

export default SecondaryPage;
