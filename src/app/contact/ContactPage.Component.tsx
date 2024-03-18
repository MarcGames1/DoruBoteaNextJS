"use client";
import { Col, Container, Row } from "react-bootstrap";
import Cobco from "@/components/contact/cobco";
import ContactCenter from "@/components/ConsultantaOnline/Form/contactCenter";
import PuncteForte from "@/components/contact/puncteForte";
import React from "react";
import styles from "./ContactPage.module.css";

// import bg from "/assets/contact-assets/brasov-sus.jpg";
const ContactPageComponent = () => {
  return (
    <>
      <div className={styles.parallax}></div>
      <Container fluid className="bg-black justify-content-evenly">
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row className="align-items-center">
          <Col xs={12} md={4} lg={4}>
            <Cobco />
          </Col>
          <Col xs={12} md={4} lg={4}>
            <ContactCenter />
          </Col>
          <Col xs={12} md={4}>
            <PuncteForte />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ContactPageComponent;
