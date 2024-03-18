import * as React from "react";

import Mail from "../../svgComponents/mail";

const NavBarEmail = () => {
  return (
    <a
      className="d-flex align-items-center flex-row text-decoration-none"
      href="mailto:avocat.dorubotea@gmail.com"
    >
      <Mail />
      <div className="white vstack text-center">
        <p className="font-weight-bold white text-align-center">
          avocat.dorubotea@gmail.com
        </p>
        <p className="white text-align-center small ">Contactati-ne oricand</p>
      </div>
    </a>
  );
};

export default NavBarEmail;
