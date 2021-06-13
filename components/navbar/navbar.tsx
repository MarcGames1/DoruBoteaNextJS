import React from 'react'
import {MailOutlineOutlined, Facebook, WhatsApp, Phone} from '@material-ui/icons';
import NavbarTop from './navbar-top';
import NavbarMid from './navbar-middle';


function Navbar(){
return(
    <div className="bg-primary-color">
<NavbarTop />
<NavbarMid />
</div>
)
}

export default Navbar