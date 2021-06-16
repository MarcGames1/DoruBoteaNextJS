import React from 'react'
import {WhatsApp} from '@material-ui/icons';
import styles from './Navbar.module.css';

const WhatsappComponent = ()=>{
    return(
        <a className="d-flex flex-row text-decoration-none"  href="https://www.facebook.com/avocatdorubotea">

        <WhatsApp className={styles.icon} />
        <div className="white text-center">
        </div>
        </a>
        
    )
}

export default WhatsappComponent