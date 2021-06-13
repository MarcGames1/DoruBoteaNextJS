import * as React from 'react'

import {MailOutlineOutlined} from '@material-ui/icons';
import styles from './Navbar.module.css';
const NavBarEmail = ()=>{
    return(
        <a className="d-flex flex-row text-decoration-none" href="mailto:avocat.dorubotea@gmail.com">

        <MailOutlineOutlined className={styles.icon} />
        <div className="white text-center">
            
        <p className="font-weight-bold white text-align-center">avocat.dorubotea@gmail.com</p>
        <p className="white text-align-center small ">Contactati-ne oricand</p>
        </div>
        </a>
        
    )
}

export default NavBarEmail