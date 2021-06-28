import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "../components/ConsultantaOnline/Form/form";
import Cobco from "../components/contact/cobco";
import Orar from "../components/contact/orar";

const page=()=>{
    return(<>
        <div className="parallax"></div>
        <Container fluid className='bg-black'>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row>
    <Col xs={12} md={4} lg={4}>
      <Cobco />
    </Col>
    <Col xs={12} md={4} lg={4}>
      <Form />
    </Col>
    <Col xs={12} md={4}>
        <Orar />
    </Col>
  </Row>
  </Container>
    
    
    <style jsx>
        {`

.parallax{
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: overlay;
    background-position: center;
 
    background-attachment: fixed;
    background-image: url(../assets/contact-assets/brasov-sus.jpg);
    width: 100%;
    height: 100vh;
  
}
        `}
    </style>
    </>
    )
}

export default page