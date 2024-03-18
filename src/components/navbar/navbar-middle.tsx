import React from "react";
import FacebookComponent from "./navbar-mid/facebook";
import NavBarBrand from "./navbar-mid/navbar-brand";
import NavBarEmail from "./navbar-mid/navbar-email";
import NavBarPhone from "./navbar-mid/navbar-phone";
import WhatsappComponent from "./navbar-mid/whatsapp";

const NavbarMid = () => {
  return (
    <div className="container-fluid">
      <div className="d-none d-md-flex justify-content-around align-items-center align-content-center">
        <NavBarBrand />
        <NavBarEmail />
        <NavBarPhone />
        <FacebookComponent />
        <WhatsappComponent />
      </div>
    </div>
  );
};
export default NavbarMid;
