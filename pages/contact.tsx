import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "../components/ConsultantaOnline/Form/form";
import Cobco from "../components/contact/cobco";
import Orar from "../components/contact/orar";
import GoogleMaps from "../components/GoogleMaps/GoogleMaps";

const page = () => {
  return (<>
    <div className="parallax"></div>
    <Container fluid className='bg-black justify-content-evenly' >
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row className='align-items-center'>
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
    <GoogleMaps />


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
/* Non-Retina */
@media screen and (-webkit-max-device-pixel-ratio: 1) {

}

/* Retina */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
only screen and (-o-min-device-pixel-ratio: 3/2),
only screen and (min--moz-device-pixel-ratio: 1.5),
only screen and (min-device-pixel-ratio: 1.5) {
  .parallax{
    background-attachment:scroll;
  }
}

/* iPhone Portrait and landscape */
@media only screen and (max-device-width: 480px) and (orientation:portrait),
 only screen and (max-device-width: 480px) and (orientation:landscape),


 {
  .parallax{
    background-attachment:scroll;
  }
} 



 


        `}
    </style>
  </>
  )
}

export default page