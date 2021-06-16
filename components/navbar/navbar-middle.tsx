import React from "react";
import FacebookComponent from "./navbar-mid/facebook";
import NavBarBrand from "./navbar-mid/navbar-brand";
import NavBarEmail from "./navbar-mid/navbar-email";
import NavBarPhone from "./navbar-mid/navbar-phone";
import Search from "./navbar-mid/search";
import SearchComponent from "./navbar-mid/search-component";
import WhatsappComponent from "./navbar-mid/whatsapp";

const NavbarMid = () => {

    return (
        <div className="container-fluid">
            <div className="row justify-content-center  align-content-center">
                <div className="justify-self-left bordered-r col-1">
                    <NavBarBrand />
                </div>
                <div className="bordered-r justify-content-center align-content-center col-3">
                    <NavBarEmail />
                </div>
                <div className="bordered-r col-2">
                    <NavBarPhone />
                </div>
               <div className="col-3">
                   <SearchComponent />
               </div>
                <div className="d-flex justify-content-around align-self-center justify-self-end col-2">
                   <FacebookComponent />
                  
                   <WhatsappComponent />
                </div>
            </div>
        </div>
    )
}

export default NavbarMid