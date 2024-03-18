import React from "react";
import ContactCenter from "./Form/contactCenter";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import Text from "./text";
const ConsultantaOnline = () => {
  return (
    <>
      <div className=" text-white bg-black-t container-fluid">
        <br />
        <div className="row">
          <div className=" offset-1 offset-md-0 offset-lg-0 col order-first col-md-6 order-lg-last order-md-last col-lg-6 col-10 ">
            <Text />
            <br />
          </div>
          <div className="offset-1 offset-md-0 offset-lg-0 col order-last col-md-6 order-lg-first order-md-first col-lg-6 col-10 ">
            <ContactCenter />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultantaOnline;
