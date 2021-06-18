import React from 'react'
import NavbarTop from './navbar-top';
import NavbarMid from './navbar-middle';
import NavBot from './navbar-bot';



function Navbar(){
return(
    <div className="bg-primary-color">
<NavbarTop />
<NavbarMid />
<NavBot />
</div>
)
}

export default Navbar