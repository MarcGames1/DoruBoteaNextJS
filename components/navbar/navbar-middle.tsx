import React from "react";
import NavBarBrand from "./navbar-mid/navbar-brand";
import NavBarEmail from "./navbar-mid/navbar-email";
import NavBarPhone from "./navbar-mid/navbar-phone";

const NavbarMid = () => {

    return (
        <div className="container-fluid">
            <div className="row justify-content-between">
                <div className="col-1">
                    <NavBarBrand />
                </div>
                <div className="col-3">
                    <NavBarEmail />
                </div>
                <div className="col-3">
                    <NavBarPhone />
                </div>
                <div className="col-1">
                    {/* facebook */}
                </div>
                <div className="col-1">
                    {/* whatsapp */}
                </div>
            </div>
        </div>
    )
}

export default NavbarMid